import React from "react";
import Button from "./Button";
import Decimal from "./../Services/Decimal";
import Binary from "./../Services/Binary";
import HexaDecimal from "./../Services/HexaDecimal";
import Octal from "./../Services/Octal";

function BtnSection({
  input,
  setInput,
  output,
  setOutput,
  convert,
  setConvert,
  mode,
  setMode,
}) {
  const handelBtnClick = (btn) => {
    let result;
    if (btn.value === "=") {
      setInput(output);
      setOutput("");
      return;
    } else if (btn.value === "clear") result = "";
    else if (btn.value === "delete") {
      result = input.slice(0, -1);
    } else result = input + btn.value;

    setInput(result);
  };
  const validate = (valids) => {
    for (let i = 0; i < input.length; i++) {
      const x = input.charAt(i);
      if (x === " ") continue;
      if (valids.indexOf(x) === -1) {
        setOutput("Invalid Input");
        return false;
      }
    }
    return true;
  };
  const handleConvertMenuChange = (e) => {
    const target = e.target.value;
    if (mode === "dec") {
      if (!validate(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])) return;
      if (target === "bin") {
        const bin = Decimal.toBinary(input);
        setOutput(bin);
      } else if (target === "hex") {
        const hex = Decimal.toHexaDecimal(input);
        setOutput(hex);
      } else if (target === "oct") {
        const oct = Decimal.toOctal(input);
        setOutput(oct);
      } else if (target === "1s") {
        const bin = Decimal.toBinary(input);
        const ones = Binary.one_s(bin);
        const dec = Binary.toDecimal(ones);
        setOutput(dec);
      } else if (target === "2s") {
        const bin = Decimal.toBinary(input);
        const twos = Binary.two_s(bin);
        const dec = Binary.toDecimal(twos);
        setOutput(dec);
      }
    }
    if (mode === "bin") {
      if (!validate(["0", "1"])) return;
      if (target === "dec") {
        const dec = Binary.toDecimal(input);
        setOutput(dec);
      } else if (target === "hex") {
        const hex = Binary.toHexaDecimal(input);
        setOutput(hex);
      } else if (target === "oct") {
        const oct = Binary.toOctal(input);
        setOutput(oct);
      } else if (target === "1s") {
        const ones = Binary.one_s(input);
        setOutput(ones);
      } else if (target === "2s") {
        const twos = Binary.two_s(input);
        setOutput(twos);
      }
    }
    if (mode === "hex") {
      if (
        !validate([
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ])
      )
        return;
      if (target === "bin") {
        const bin = HexaDecimal.toBinary(input);
        setOutput(bin);
      } else if (target === "dec") {
        const dec = HexaDecimal.toDecimal(input);
        setOutput(dec);
      } else if (target === "oct") {
        const oct = HexaDecimal.toOctal(input);
        setOutput(oct);
      } else if (target === "1s") {
        const bin = HexaDecimal.toBinary(input);
        const ones = Binary.one_s(bin);
        const hex = Binary.toHexaDecimal(ones);
        setOutput(hex);
      } else if (target === "2s") {
        const bin = HexaDecimal.toBinary(input);
        const twos = Binary.two_s(bin);
        const hex = Binary.toHexaDecimal(twos);
        setOutput(hex);
      }
    }
    if (mode === "oct") {
      if (!validate(["0", "1", "2", "3", "4", "5", "6", "7"])) return;
      if (target === "bin") {
        const bin = Octal.toBinary(input);
        setOutput(bin);
      } else if (target === "hex") {
        const hex = Octal.toHexaDecimal(input);
        setOutput(hex);
      } else if (target === "dec") {
        const dec = Octal.toDecimal(input);
        setOutput(dec);
      } else if (target === "1s") {
        const bin = Octal.toBinary(input);
        const ones = Binary.one_s(bin);
        const oct = Binary.toOctal(ones);
        setOutput(oct);
      } else if (target === "2s") {
        const bin = Octal.toBinary(input);
        const twos = Binary.two_s(bin);
        const oct = Binary.toOctal(twos);
        setOutput(oct);
      }
    }
    setConvert("");
  };
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  const handleNOT = () => {
    if (
      !validate([
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ])
    )
      return;
    if (mode === "dec") {
      const bin = Decimal.toBinary(input);
      const ones = Binary.one_s(bin);
      const dec = Binary.toDecimal(ones);
      setOutput(dec);
      return;
    }
    if (mode === "bin") {
      const bin = Binary.one_s(input);
      setOutput(bin);
      return;
    }
    if (mode === "hex") {
      const bin = HexaDecimal.toBinary(input);
      const ones = Binary.one_s(bin);
      const hex = Binary.toHexaDecimal(ones);
      setOutput(hex);
      return;
    }
    if (mode === "oct") {
      const bin = Octal.toBinary(input);
      const ones = Binary.one_s(bin);
      const oct = Binary.toOctal(ones);
      setOutput(oct);
      return;
    }
  };
  const buttons = [
    { label: "C", value: "clear" },
    { label: "Delete", value: "delete" },
    {
      label: "Mode",
      type: "menu",
      options: [
        { label: "DEC", value: "dec" },
        { label: "BIN", value: "bin" },
        { label: "HEX", value: "hex" },
        { label: "OCT", value: "oct" },
      ],
      defaultValue: mode,
      value: "mode",
    },
    {
      label: "ConvertTo",
      type: "menu",
      options: [
        { label: "Convert To", value: "" },
        { label: "Decimal", value: "dec" },
        { label: "Binary", value: "bin" },
        { label: "HexaDecimal", value: "hex" },
        { label: "Octal", value: "oct" },
        { label: "1's compliment", value: "1s" },
        { label: "2's compliment", value: "2s" },
      ],
      defaultValue: convert,
      value: "ConvertTo",
    },
    { label: "%", value: " % " },
    { label: "AND", value: " & " },
    { label: "OR", value: " | " },
    { label: "XOR", value: " ^ " },
    { label: "NOT", value: " ! " },
    { label: "+", value: " + " },
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: "-", value: " - " },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: "x", value: " * " },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "/", value: " / " },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" },
    { label: <span className="equalTo">=</span>, value: "=" },
  ];
  const getOnClick = (btn) => {
    if (btn.label === "ConvertTo") return handleConvertMenuChange;
    if (btn.label === "Mode") return handleModeChange;
    if (btn.label === "NOT") return handleNOT;
    return handelBtnClick;
  };
  return (
    <div className="btn-section">
      {buttons.map((btn) => (
        <Button {...btn} key={btn.value} onClick={getOnClick(btn)} />
      ))}
    </div>
  );
}

export default BtnSection;
