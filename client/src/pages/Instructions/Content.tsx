import React from "react";

const Content = () => {
  return (
    <div className="grid grid-cols-12 p-4 shadow-md">
      <div className="col-span-12 p-6 rounded-md border border-stone-300 overflow-y-auto max-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          CeliScan User Guide
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to <strong>CeliScan</strong>, an advanced diagnostic tool
          designed to assist in the early detection of{" "}
          <strong>celiac disease</strong> using a multi-modal machine learning
          model. This guide will walk you through the features and
          functionalities of the application.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Getting Started
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1. Accessing CeliScan
          </h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              Open the <strong>CeliScan</strong> app on your device or visit the{" "}
              <strong>web platform</strong>.
            </li>
            <li>
              Log in using your <strong>credentials</strong> if required. (coming soon)
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            2. Navigation
          </h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              The main navigation menu is located on the{" "}
              <strong>left of the screen</strong>.
            </li>
            <li>
              You can access different sections such as{" "}
              <strong>Dashboard, Diagnostic Form, Resources, and ScanAI</strong>
              .
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Overview</h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              <strong>General Information</strong> about celiac disease and
              diagnostic criteria.
            </li>
            <li>
              <strong>Recent Diagnostic Reports</strong> (if available).
            </li>
            <li>
              <strong>Alerts and Recommendations</strong> based on user inputs.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            How to Use the Dashboard
          </h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>View recent diagnostic activity and insights.</li>
            <li>
              Click on <strong>top right</strong> to gain direct access to diagnostic form.
            </li>
            <li>Navigate to different pages using the main menu.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Diagnostic Form
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Purpose</h3>
          <p className="text-gray-600 mb-4">
            The <strong>Diagnostic Form</strong> allows users (patients or
            doctors) to input relevant data. We then leverage a Multi-Modal Support Vector Machine to receive an ML-assisted{" "}
            <strong>diagnostic prediction</strong>.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Form Fields & Input Types
          </h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              <strong>Patient Information</strong>: Age (integer)
            </li>
            <li>
              <strong>Serological Markers</strong>: Blood test results (float
              values)
            </li>
            <li>
              <strong>Genetic Markers</strong>: Boolean (Yes/No)
            </li>
            <li>
              <strong>Clinical Symptoms</strong>: Boolean or categorical values
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Submitting the Form
          </h3>
          <ol className="pl-5 list-decimal space-y-2 text-gray-600">
            <li>Fill in all required fields as accurately as possible.</li>
            <li>
              Click <strong>"Submit"</strong> to process the diagnostic data.
            </li>
            <li>
              The AI model will analyze the inputs and return a{" "}
              <strong>probability score</strong> for celiac disease.
            </li>
            <li>
              If a diagnosis is likely, <strong>next steps</strong> will be
              provided.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Resources</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Overview</h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              <strong>What to Do Before Diagnosis</strong>
            </li>
            <li>
              <strong>What to Do After Diagnosis</strong>
            </li>
            <li>
              <strong>Dietary Recommendations</strong>
            </li>
            <li>
              <strong>Medical Consultation Guidelines</strong>
            </li>
            <li>
              <strong>Support Groups & Online Communities</strong>
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            How to Use the Resources Section
          </h3>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              Click on any resource to <strong>expand</strong> and read more
              details.
            </li>
            <li>
              Access <strong>external links</strong> for further medical
              guidance.
            </li>
            <li>
              Download <strong>guides and PDFs</strong> for offline use.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ScanAI – Your Virtual Assistant
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is ScanAI?
          </h3>
          <p className="text-gray-600 mb-4">
            <strong>ScanAI</strong> is an AI-powered chatbot designed to assist
            users with understanding diagnostic results, answering general
            questions about celiac disease, and providing guidance on next
            steps.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            How to Use ScanAI
          </h3>
          <ol className="pl-5 list-decimal space-y-2 text-gray-600">
            <li>
              Navigate to the <strong>ScanAI</strong> page from the menu.
            </li>
            <li>
              Type your <strong>question or concern</strong> into the chatbox.
            </li>
            <li>
              ScanAI will provide a <strong>detailed response</strong> based on
              medical knowledge and user data.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <ul className="pl-5 list-disc space-y-2 text-gray-600">
            <li>
              <strong>How secure is my data?</strong> All data is anonymized and
              stored securely, complying with HIPAA and GDPR regulations.
            </li>
            <li>
              <strong>Is ScanAI available 24/7?</strong> Yes. ScanAI is
              available at any time for assistance.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Final Notes</h2>
          <p className="text-gray-600">
            Thank you for using <strong>CeliScan</strong>. This application is
            designed to empower patients and doctors with AI-driven insights to
            improve the accuracy and accessibility of{" "}
            <strong>celiac disease diagnosis</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Content;
