import "./App.css";
import {
  boilerPlateInstruction,
  style,
  response1,
  response2,
  score,
  justification,
  append,
} from "/boilerplate";
import React, { useEffect, useState } from "react";

function App() {
  const [instructions, setInstructions] = useState(boilerPlateInstruction);
  const [completePrompt, setCompletePrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  const [ChainOfThought1, setChainOfThought1] = useState("");
  const [code1,setCode1]=useState("")
  const [output1, setOutput1] = useState("");
  const [error1, setError1] = useState("");
  const [ChainOfThought2, setChainOfThought2] = useState("");
   const [code2,setCode2]=useState("")
  const [output2, setOutput2] = useState("");
  const [error2, setError2] = useState("");
  const [rateOne] = useState(response1);
  const [rateTwo] = useState(response2);
  const [SxSScore] = useState(score);
  const [SxSScorJustification] = useState(justification);
  const [combine, setCombinedPrompt] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const [showAlert, setShowAlert] = useState(false);

  const wrapper = (text, code = true) => {
    return code ? "`" + text + "`" : text;
  };

  const resetAll = async () => {
    setCompletePrompt("");
    setPrompt("");
    setChainOfThought1("");
    setCode1("")
    setOutput1("");
    setError1("");
    setChainOfThought2("");
    setCode2("")
    setOutput2("");
    setError2("");

    // Clear the clipboard if the Clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText("");
    }
  };

  useEffect(() => {
    let fullPrompt =
      instructions +
      " " +
      "\nPrompt: " +
      prompt +
      "\nChain of Thought 1: " +
      wrapper(ChainOfThought1) +
      "\nCode 1: " +
      wrapper(code1) +
      "\nOutput 1: " +
      wrapper(output1) +
      "\nError 1: " +
      wrapper(error1) +
      "\nChain of Thought 2: " +
      wrapper(ChainOfThought2) +
      "\nCode 2: " +
      wrapper(code2) +
      "\nOutput 2: " +
      wrapper(output2) +
      "\nError 2: " +
      wrapper(error2) +
      append;
    setCompletePrompt(fullPrompt);
  }, [
    combine,
    prompt,
    ChainOfThought1,
    code1,
    output1,
    error1,
    ChainOfThought2,
    code2,
    output2,
    error2,
  ]);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
      alert("Text copied to clipboard successfully!");
      })
      .catch((err) => {
       alert("Failed to copy text to clipboard: ", err);
      });
  };

  const CopyToClipboardElement = ({ title, value, code = "" }) => {
    return (
      <button onClick={() => copyToClipboard(code + value + code)}>
        Copy {title}
      </button>
    );
  };

  const InputElement = ({ label, value, setValue, code = "" }) => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <label>{label}</label>
        <input
          value={value}
          style={{ maxWidth: "20%", marginLeft: "10px" }}
          onChange={(e) => setValue(() => e.target.value)}
        />
        <CopyToClipboardElement title={label} value={value} code={code} />
      </div>
    );
  };

  const combineAndCopy = () => {
    setCombinedPrompt(true);
    copyToClipboard(completePrompt);
    

  };

  return (
    <div className="App" style={style}>
      <div className="buttonHolder">
        {CopyToClipboardElement({
          title: "Instructions",
          value: instructions,
        })}

        {CopyToClipboardElement({
          title: "Rate response1",
          value: rateOne,
        })}
        {CopyToClipboardElement({
          title: "Rate response2",
          value: rateTwo,
        })}
        {CopyToClipboardElement({
          title: "SxS Score",
          value: SxSScore,
        })}
        {CopyToClipboardElement({
          title: "SxS Justification",
          value: SxSScorJustification,
        })}

        <button onClick={combineAndCopy}>Combine and Copy Prompt</button>

        <button onClick={resetAll}>Reset All</button>
      </div>

      <br />
      {InputElement({
        label: "Initial Prompt",
        value: prompt,
        setValue: setPrompt,
      })}
      {InputElement({
        label: "Chain of Thought 1",
        value: ChainOfThought1,
        setValue: setChainOfThought1,
        code: "`",
      })}
      {InputElement({
        label: "Code 1",
        value: code1,
        setValue: setCode1,
        code: "`",
      })}
      {InputElement({
        label: "Output 1",
        value: output1,
        setValue: setOutput1,
        code: "`",
      })}
      {InputElement({
        label: "Error 1",
        value: error1,
        setValue: setError1,
        code: "`",
      })}
      {InputElement({
        label: "Chain of Thought 2",
        value: ChainOfThought2,
        setValue: setChainOfThought2,
        code: "`",
      })}
      {InputElement({
        label: "Code 2",
        value: code2,
        setValue: setCode2,
        code: "`",
      })}
      {InputElement({
        label: "Output 2",
        value: output2,
        setValue: setOutput2,
        code: "`",
      })}
      {InputElement({
        label: "Error 2",
        value: error2,
        setValue: setError2,
        code: "`",
      })}

      <h1>{prompt}</h1>
      <h1>{ChainOfThought1}</h1>
      <h1>{output1}</h1>
      <h1>{error1}</h1>
      <h1>{ChainOfThought2}</h1>
      <h1>{output2}</h1>
      <h1>{error2}</h1>
    </div>
  );
}

export default App;
