import pandas as pd
import os
import openai
from dotenv import load_dotenv
from sqlalchemy import create_engine
from llama_index.experimental.query_engine import PandasQueryEngine
from prompts import new_prompt, instruction_str, context
from llama_index.core.tools import QueryEngineTool, ToolMetadata
from llama_index.core.agent import ReActAgent
from llama_index.llms.openai import OpenAI
from llama_index.core import StorageContext, VectorStoreIndex, load_index_from_storage
from llama_index.core import download_loader

load_dotenv()

def get_index(data, index_name):
    index = None
    if not os.path.exists(index_name):
        print("building index", index_name)
        index = VectorStoreIndex.from_documents(data, show_progress=True)
        index.storage_context.persist(persist_dir=index_name)
    else:
        index = load_index_from_storage(
            StorageContext.from_defaults(persist_dir=index_name)
        )

    return index

def query_transactions(engine, query):
    PDFReader = download_loader("PDFReader")

    pdf_path = os.path.join("data", "celiscan_info.pdf")
    pft_pdf = PDFReader().load_data(file=pdf_path)
    pft_index = get_index(pft_pdf, "celiac_disease__diagnostic_tool_information")
    pft_engine = pft_index.as_query_engine()

    # cutom data that the agent can access when queried
    tools = [
        # this tool is used to query the personal finance tracker information
        QueryEngineTool(query_engine=pft_engine, metadata=ToolMetadata(
            name="celiac_disease__diagnostic_tool_information", 
            description="""this gives detailed information about all the detailes regarding 
                           the celiac disease diagnostic tool and the resources it provides to help 
                           the user either patient or doctor with using the tool called celiscan"""
        ))
    ]

    # Agent creattion with gpt-4o llm
    llm = OpenAI(model="gpt-4o-mini")
    agent = ReActAgent.from_tools(
        tools=tools,
        llm=llm,
        verbose=True,
        context=context,

    )

    res = agent.query(query)
    return res

if __name__ == "__main__":
    from main import db
    #OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    engine = db.engine
    res = query_transactions(engine, "test prompt")
    print(res)






