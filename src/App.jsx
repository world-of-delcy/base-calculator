import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import BtnSection from "./components/BtnSection";
import { evaluate } from "./Services/Functionality";
function App(props) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [convert, setConvert] = useState("");
  const [mode, setMode] = useState("dec");
  useEffect(() => {
    if (input === "") {
      setOutput("");
      return;
    }
    try {
      const result = evaluate(input, mode);
      if (result) setOutput(result + "");
    } catch (error) {
      console.log(error);
      setOutput("Invalid Data");
    }
  }, [input, mode]);
  return (
    <div id="body">
      <Navbar />
      <Container
        input={input}
        output={output}
        setInput={setInput}
        setOutput={setOutput}
      />
      <BtnSection
        input={input}
        output={output}
        setInput={setInput}
        setOutput={setOutput}
        convert={convert}
        setConvert={setConvert}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
