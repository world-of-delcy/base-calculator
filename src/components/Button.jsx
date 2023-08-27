import React from "react";
import FormSelect from "./FormSelect";

function Button({ label, value, onClick, type, name, options, defaultValue }) {
  if (type && type === "menu") {
    return (
      <FormSelect
        name={name}
        options={options}
        value={defaultValue}
        onChange={onClick}
      />
    );
  }
  return (
    <button className={"btn "} onClick={() => onClick({ label, value })}>
      {label}
    </button>
  );
}

export default Button;
