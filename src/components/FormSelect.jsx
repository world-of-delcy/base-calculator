import React from "react";

function FormSelect({ options, onChange, value }) {
  return (
    <select value={value} className="btn" onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FormSelect;
