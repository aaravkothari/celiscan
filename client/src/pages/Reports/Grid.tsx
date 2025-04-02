import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming React Router is used

type ResultType = {
  message?: string; // Define the structure of the result object
  Certainty?: string;
  Result?: string;
};

const Grid = () => {
  const [formData, setFormData] = useState({
    age: "",
    tTG_IgA: "",
    tTG_IgG: "",
    tTG_IgM: "",
    EMA_IgA: "",
    DGP_IgA: "",
    DGP_IgG: "",
    AGA_IgA: "",
    AGA_IgG: "",
    totalSerumIgA: "",
    HLA_DQ2_5: false,
    HLA_DQ8: false,
    diabetesMellitusTypeI: false,
    steatorrhea: false,
    diarrhoea: "",
    BMI: "",
    BIA: "",
    shortStature: "",
    abdominal: false,
    weightLoss: false,
  });
  const [result, setResult] = useState<ResultType | null>(null); // Use the defined type
  const [showForm, setShowForm] = useState(false); // Track whether to show the form
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    if (result) {
      console.log("Result updated:", result); // Log when result updates
    }
  }, [result]); // Ensure the hook runs when `result` changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Comprehensive input validation
    for (const [key, value] of Object.entries(formData)) {
      if (value === "" || value === null || value === undefined) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    try {
      const payload = {
        age: formData.age,
        tTG_IgA: formData.tTG_IgA,
        tTG_IgG: formData.tTG_IgG,
        tTG_IgM: formData.tTG_IgM,
        diabetesMellitusTypeI: formData.diabetesMellitusTypeI,
        diarrhoea: formData.diarrhoea,
        abdominal: formData.abdominal,
        shortStature: formData.shortStature,
        steatorrhea: formData.steatorrhea,
        weightLoss: formData.weightLoss,
      };

      const response = await axios.post(
        "http://localhost:8080/diagnose",
        payload
      );

      if (response.data && typeof response.data === "object") {
        console.log("Response:", response.data); // Log the response directly
        setResult(response.data); // Store the result
      } else {
        console.error("Unexpected response format:", response);
        alert("An error occurred while processing the response.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const handleNewTest = () => {
    setResult(null); // Reset the result to retake the test
    setFormData({
      age: "",
      tTG_IgA: "",
      tTG_IgG: "",
      tTG_IgM: "",
      EMA_IgA: "",
      DGP_IgA: "",
      DGP_IgG: "",
      AGA_IgA: "",
      AGA_IgG: "",
      totalSerumIgA: "",
      HLA_DQ2_5: false,
      HLA_DQ8: false,
      diabetesMellitusTypeI: false,
      steatorrhea: false,
      diarrhoea: "",
      BMI: "",
      BIA: "",
      shortStature: "",
      abdominal: false,
      weightLoss: false,
    });
    setShowForm(false); // Return to the initial home screen
  };

  if (!showForm && !result) {
    return (
      <div className="col-span-12 m-4 p-4 rounded border border-stone-300 bg-white text-center">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">
          CeliScan Diagnostic Form
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600"
        >
          Take Diagnostic Test
        </button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="col-span-12 m-4 p-4 rounded border border-stone-300 bg-white text-center">
        <h2 className="text-xl font-bold text-stone-700 mb-4">
          Diagnostic Result
        </h2>
        <div className="text-md text-stone-600 mb-6">
          <p className="m-2">
            <strong>Result:</strong>{" "}
            {result.Result === "yes" ? "Positive" : "Negative"}
          </p>
          <p>
            <strong>Certainty: </strong>{" "} {result.Certainty || "0%"}
          </p>
          <div className="w-full bg-gray-300 rounded h-4 mt-2">
            <div
              className="bg-blue-500 h-4 rounded"
              style={{ width: result.Certainty ? result.Certainty : "0%" }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleNewTest}
            className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600"
          >
            Take New Test
          </button>
          <button
            onClick={() => navigate("/mintyAI")}
            className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600"
          >
            Talk to CeliScanAI
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-12 m-4 p-4 rounded border border-stone-300 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-stone-700 mb-4">
          Diagnostic Input Form
        </h2>
        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* tTG-IgA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            tTG-IgA
          </label>
          <input
            type="number"
            step="any"
            name="tTG_IgA"
            value={formData.tTG_IgA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* tTG-IgG */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            tTG-IgG
          </label>
          <input
            type="number"
            step="any"
            name="tTG_IgG"
            value={formData.tTG_IgG}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* tTG-IgM */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            tTG-IgM
          </label>
          <input
            type="number"
            step="any"
            name="tTG_IgM"
            value={formData.tTG_IgM}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* EMA-IgA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            EMA-IgA
          </label>
          <input
            type="number"
            step="any"
            name="EMA_IgA"
            value={formData.EMA_IgA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* DGP-IgA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            DGP-IgA
          </label>
          <input
            type="number"
            step="any"
            name="DGP_IgA"
            value={formData.DGP_IgA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* DGP-IgG */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            DGP-IgG
          </label>
          <input
            type="number"
            step="any"
            name="DGP_IgG"
            value={formData.DGP_IgG}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* AGA-IgA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            AGA-IgA
          </label>
          <input
            type="number"
            step="any"
            name="AGA_IgA"
            value={formData.AGA_IgA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* AGA-IgG */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            AGA-IgG
          </label>
          <input
            type="number"
            step="any"
            name="AGA_IgG"
            value={formData.AGA_IgG}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* Total Serum IgA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Total Serum IgA
          </label>
          <input
            type="number"
            step="any"
            name="totalSerumIgA"
            value={formData.totalSerumIgA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* HLA-DQ2.5 */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            HLA-DQ2.5
          </label>
          <input
            type="checkbox"
            name="HLA_DQ2_5"
            checked={formData.HLA_DQ2_5}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        {/* HLA-DQ8 */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            HLA-DQ8
          </label>
          <input
            type="checkbox"
            name="HLA_DQ8"
            checked={formData.HLA_DQ8}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        {/* Diabetes Mellitus Type I */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Diabetes Mellitus Type I
          </label>
          <input
            type="checkbox"
            name="diabetesMellitusTypeI"
            checked={formData.diabetesMellitusTypeI}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        {/* Steatorrhea */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Steatorrhea
          </label>
          <input
            type="checkbox"
            name="steatorrhea"
            checked={formData.steatorrhea}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        {/* Diarrhoea */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Diarrhoea
          </label>
          <select
            name="diarrhoea"
            value={formData.diarrhoea}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          >
            <option value="">Select</option>
            <option value="inflammatory">Inflammatory</option>
            <option value="fatty">Fatty</option>
            <option value="watery">Watery</option>
          </select>
        </div>
        {/* BMI */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            BMI
          </label>
          <input
            type="number"
            step="any"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* BIA */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            BIA
          </label>
          <input
            type="number"
            step="any"
            name="BIA"
            value={formData.BIA}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          />
        </div>
        {/* Short Stature */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Short Stature
          </label>
          <select
            name="shortStature"
            value={formData.shortStature}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm"
          >
            <option value="">Select</option>
            <option value="PSS">PSS</option>
            <option value="DSS">DSS</option>
            <option value="Variant">Variant</option>
          </select>
        </div>
        {/* Abdominal */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Abdominal
          </label>
          <input
            type="checkbox"
            name="abdominal"
            checked={formData.abdominal}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        {/* Weight Loss */}
        <div>
          <label className="block text-sm font-medium text-stone-600">
            Weight Loss
          </label>
          <input
            type="checkbox"
            name="weightLoss"
            checked={formData.weightLoss}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Grid;
