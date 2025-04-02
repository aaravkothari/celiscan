from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import pandas as pd
from chatbot import query_transactions
import openai
import os
from werkzeug.security import generate_password_hash, check_password_hash
import pickle

# initialize flask app
app = Flask(__name__)
# enable cross-origin resource sharing
CORS(app)

# database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///project.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# initialize sqlalchemy
db = SQLAlchemy(app)
# initialize marshmallow
ma = Marshmallow(app)

# define route for chatbot interaction
@app.route('/chatbot', methods=['POST'])
def chatbot():
    message = request.json['message'] # get the message from the request
    print(f"Received message: {message}")
    res = query_transactions(db.engine, message) # query mintyAI RAG agent
    response = {"response": str(res)} # prepare the response
    return jsonify(response) # return the response

@app.route('/diagnose', methods=['POST'])
def diagnose():

    # Extract required parameters from the request
    data = request.json
    model_input = [
        data['age'],
        data['tTG_IgA'],
        data['tTG_IgG'],
        data['tTG_IgM'],
        not data['diabetesMellitusTypeI'],  # Diabetes_no
        data['diarrhoea'] == 'inflammatory',  # Diarrhoea_inflammatory
        data['diarrhoea'] == 'watery',  # Diarrhoea_watery
        data['abdominal'],  # Abdominal_yes
        data['shortStature'] == 'PSS',  # Short_Stature_PSS
        data['shortStature'] == 'Variant',  # Short_Stature_Variant
        data['steatorrhea'],  # Sticky_Stool_yes
        data['weightLoss']  # Weight_loss_yes
    ]
    
    load_model = pickle.load(open('celiac_model.sav', 'rb'))
    # Example: Replace with actual model loading and prediction logic
    result = load_model.predict([model_input])[0]
    certainty = load_model.predict_proba([model_input])[0].max()

    # Return the result and certainty
    return jsonify({"Result": result, "Certainty": f"{certainty * 100:.2f}%"})


# run the flask app
if __name__ == "__main__":
    app.run(debug=True, port=8080)