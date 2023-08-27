import React from "react";

function Container({ input, output, setInput, setOutput }) {
  return (
    <>
      <div className="output-container">
        <input
          className="output"
          placeholder="Output"
          value={output}
          onChange={(e) => {
            setOutput(e.target.value);
          }}
          disabled
        />
        <input
          className="input"
          placeholder="Input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOutput(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default Container;
