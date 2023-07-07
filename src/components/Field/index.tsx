import React, { useState, ChangeEvent } from "react";
import "./field.css";

interface fieldProps {
  label: string;
  value: number;
  setValue: any;
  min?: number;
  max?: number;
}

const Field = React.memo<fieldProps>((props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;
    if (str.charAt(str.length - 1) === ".") {
      return;
    }
    let newValue = parseFloat(str);
    if (props.max && newValue > props.max) {
      newValue = props.max;
    }
    setValue(newValue);
    props.setValue(newValue);
  };
  return (
    <div className="field">
      <div className="fieldLabel">{props.label}</div>
      <div className="fieldInput">
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          value={value}
          min={props.min}
        />
        {!value && <div className="hint">Please enter a value</div>}
      </div>
    </div>
  );
});

export default Field;
