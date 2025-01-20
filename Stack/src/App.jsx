// App.jsx

import React, { useState } from "react";
import "./App.css";
import { snippets, style } from "../attempterBoilerplate";

function App() {
  const [combinedText, setCombinedText] = useState("");
  const [latexStyle, setLatexStyle] = useState(""); // State for LaTeX style
  const [canPromptInput, setCanPromptInput] = useState(""); // New state for "Can Prompt Be Solved" input

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    if (!text) {
      alert("No text to copy!");
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard successfully!");
      })
      .catch((err) => {
        alert("Failed to copy text to clipboard: " + err);
      });
  };

  // Function to add text to the combined text area
  const addToTextArea = (text) => {
    setCombinedText((prev) => (prev ? `${prev}\n${text}` : text));
  };

  // Function to handle adding snippets with or without parameters
  const handleAddSnippet = (snippet) => {
    if (snippet.label === "Can Prompt Be Solved") {
      // Handle "Can Prompt Be Solved" snippet separately
      let text = "Can the prompt be solved?";
      if (canPromptInput.trim() !== "") {
        text += `: \`${canPromptInput.trim()}\``; // Add colon and wrapped input
      }
      addToTextArea(text);
    } else if (typeof snippet.value === "function") {
      // Snippets requiring LaTeX style
      const text = snippet.value(latexStyle);
      addToTextArea(text);
    } else {
      // Snippets not requiring LaTeX style
      addToTextArea(snippet.value);
    }
  };

  // Function to handle copying snippets with or without parameters
  const handleCopySnippet = (snippet) => {
    if (snippet.label === "Can Prompt Be Solved") {
      // Handle "Can Prompt Be Solved" snippet separately
      let text = "Can the prompt be solved?";
      if (canPromptInput.trim() !== "") {
        text += `: \`${canPromptInput.trim()}\``; // Add colon and wrapped input
      }
      copyToClipboard(text);
    } else if (typeof snippet.value === "function") {
      const text = snippet.value(latexStyle);
      copyToClipboard(text);
    } else {
      copyToClipboard(snippet.value);
    }
  };

  return (
    <div className="App" style={style}>
      <h1>Job Template Builder</h1>

      {/* LaTeX Style Selection */}
      <div className="latex-style-selection" style={{ marginBottom: "20px" }}>
        <h2>Select LaTeX Style (Optional)</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <label>
            <input
              type="radio"
              name="latexStyle"
              value=""
              checked={latexStyle === ""}
              onChange={() => setLatexStyle("")}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              name="latexStyle"
              value="Inline Math Mode"
              checked={latexStyle === "Inline Math Mode"}
              onChange={() => setLatexStyle("Inline Math Mode")}
            />
            Inline Math Mode
          </label>
          <label>
            <input
              type="radio"
              name="latexStyle"
              value="Display Math Mode"
              checked={latexStyle === "Display Math Mode"}
              onChange={() => setLatexStyle("Display Math Mode")}
            />
            Display Math Mode
          </label>
        </div>
      </div>

      {/* Buttons Section */}
      <div
        className="buttons-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        {snippets.map((snippet, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "300px",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{snippet.label}</h3>

            {/* Special handling for "Can Prompt Be Solved" snippet */}
            {snippet.label === "Can Prompt Be Solved" ? (
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  placeholder="Enter additional text (optional)..."
                  value={canPromptInput}
                  onChange={(e) => setCanPromptInput(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "5px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                  }}
                />
              </div>
            ) : null}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => handleCopySnippet(snippet)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>
              <button
                onClick={() => handleAddSnippet(snippet)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#008CBA",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Combined Text Area */}
      <div style={{ width: "100%" }}>
        <h2>Combined Descriptions</h2>
        <textarea
          value={combinedText}
          onChange={(e) => setCombinedText(e.target.value)}
          placeholder="Combined Descriptions..."
          style={{
            width: "100%",
            height: "300px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            resize: "vertical",
          }}
        />
        <button
          onClick={() => {
          copyToClipboard(combinedText);
          }}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Copy all
        </button>

        <button
          onClick={() => setCombinedText("")}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Reset Text Area
        </button>
      </div>
    </div>
  );
}

export default App;
