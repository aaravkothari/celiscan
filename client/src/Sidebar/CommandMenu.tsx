import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbReportSearch } from "react-icons/tb";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="Search..."
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>

          <Command.Group
            heading="Dashboard"
            className="text-sm mb-3 text-stone-400"
          >
            <Link to="/dashboard">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                <BsFillPersonFill />
                Celiac Disease Cases
              </Command.Item>
            </Link>
            <Link to="/transactions/addnewtransaction">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                <FaChartLine />
                Celiac Disease Statistics
              </Command.Item>
            </Link>
          </Command.Group>

          <Command.Group
            heading="Reports"
            className="text-sm mb-3 text-stone-400"
          >
            <Link to="/diagnostic-form">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                <TbReportSearch />
                Diagnostic Form
              </Command.Item>
            </Link>
          </Command.Group>

          {value && (
            <>
              <Command.Group
                heading="Instructions"
                className="text-sm text-stone-400 mb-3"
              >
                <Link to="/instructions#transactions-features">
                  <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                    <FiLink />
                    Instructions
                  </Command.Item>
                </Link>
              </Command.Group>

              <Command.Group
                heading="Resources"
                className="text-sm text-stone-400 mb-3"
              >
                <Link to="/resources">
                  <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                    <FiLink />
                    Resources
                  </Command.Item>
                </Link>
              </Command.Group>
            </>
          )}

          <Command.Item>
            <Link
              to="/scanai"
              className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2"
            >
              <FiLogOut />
              ScanAI
            </Link>
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
