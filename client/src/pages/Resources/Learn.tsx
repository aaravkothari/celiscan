import React, { useState } from "react";
import { GrResources } from "react-icons/gr";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Learn = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="p-4">
      {/* Page Overview */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Resources</h1>
        <p className="text-sm text-stone-500">
          Welcome to the Resources page! Here, you'll find essential information
          to guide you through every step of managing celiac disease, from
          diagnosis to lifestyle adjustments.
        </p>
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-4">
        {/* What to Do Before Diagnosis */}
        <div className="border border-stone-400 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("beforeDiagnosis")}
          >
            <h2 className="font-medium">What to Do Before Diagnosis</h2>
            {expandedSection === "beforeDiagnosis" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
          {expandedSection === "beforeDiagnosis" && (
            <div className="p-4 text-sm text-stone-500">
              <ul className="list-disc list-inside">
                <li>Consult your doctor if you suspect celiac disease.</li>
                <li>
                  Undergo preliminary tests like blood tests for celiac markers.
                </li>
                <li>
                  Avoid starting a gluten-free diet before testing to ensure
                  accurate results.
                </li>
                <li>Use feedback reports to input values into CeliScan Diagnostic App or ask doctor to do so</li>
              </ul>
            </div>
          )}
        </div>

        {/* What to Do After Diagnosis */}
        <div className="border border-stone-400 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("afterDiagnosis")}
          >
            <h2 className="font-medium">What to Do After Diagnosis</h2>
            {expandedSection === "afterDiagnosis" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
          {expandedSection === "afterDiagnosis" && (
            <div className="p-4 text-sm text-stone-500">
              <ul className="list-disc list-inside">
                <li>Follow up with your doctor for a treatment plan.</li>
                <li>Adopt a strict gluten-free diet to prevent symptoms.</li>
                <li>Learn strategies to avoid accidental gluten exposure.</li>
                <li>
                  Adjust your lifestyle to accommodate dietary restrictions.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dietary Recommendations */}
        <div className="border border-stone-400 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("dietaryRecommendations")}
          >
            <h2 className="font-medium">Dietary Recommendations</h2>
            {expandedSection === "dietaryRecommendations" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
          {expandedSection === "dietaryRecommendations" && (
            <div className="p-4 text-sm text-stone-500">
              <ul className="list-disc list-inside">
                <li>Avoid foods containing wheat, barley, and rye.</li>
                <li>
                  Opt for safe alternatives like rice, quinoa, and certified
                  gluten-free products.
                </li>
                <li>
                  Carefully read ingredient labels to detect hidden gluten.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Medical Consultation Guidelines */}
        <div className="border border-stone-400 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("medicalGuidelines")}
          >
            <h2 className="font-medium">Medical Consultation Guidelines</h2>
            {expandedSection === "medicalGuidelines" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
          {expandedSection === "medicalGuidelines" && (
            <div className="p-4 text-sm text-stone-500">
              <ul className="list-disc list-inside">
                <li>Schedule regular follow-up visits with your doctor.</li>
                <li>
                  Prepare questions about managing symptoms and long-term care.
                </li>
                <li>Discuss available treatments and therapies.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Support Groups & Online Communities */}
        <div className="border border-stone-400 rounded-md">
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("supportGroups")}
          >
            <h2 className="font-medium">Support Groups & Online Communities</h2>
            {expandedSection === "supportGroups" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
          {expandedSection === "supportGroups" && (
            <div className="p-4 text-sm text-stone-500">
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    to="https://www.beyondceliac.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 underline"
                  >
                    Beyond Celiac
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://celiac.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 underline"
                  >
                    Celiac Disease Foundation
                  </Link>
                </li>
                <li>
                  Join local or virtual support groups to connect with others.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* How to Use the Resources Section */}
      <div className="mt-6 border border-stone-400 rounded-md p-4">
        <h3 className="font-medium mb-2">How to Use the Resources Section</h3>
        <p className="text-sm text-stone-500">
          Click on any section above to expand and read more details. Use the
          provided links for credible medical guidance or download PDFs for
          offline reference.
        </p>
      </div>
    </div>
  );
};

export default Learn;
