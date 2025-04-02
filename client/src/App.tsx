import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Sidebar } from "./Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import Instructions from "./pages/Instructions/Instructions";
import DiagnosticForm from "./pages/Reports/DiagnosticForm";
import Chatbot from "./pages/ChatBot/Chatbot";
import Resources from "./pages/Resources/Resources";

function AppContent() {
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation();

  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      {location.pathname !== "/home" && (
        <Sidebar selected={selected} setSelected={setSelected} />
      )}
      <div>
      
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/diagnosticform" element={<DiagnosticForm />} />
          <Route path="/resources/*" element={<Resources />} />
          <Route path="/scanai" element={<Chatbot />} />
        </Routes>
      </div>
    </main>
  );
}

/* 

*/

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
