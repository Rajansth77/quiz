import React from "react";

const InputField = ({ label, id, placeholder, ...rest }) => (
  <div class="formcontainer">
    <input id={id} {...rest} />
    <label alt={label} htmlFor={id} placeholder={placeholder || label}>
      {label}
    </label>
  </div>
);

export default InputField;

export const RadioButton = ({
  label = "Below 18",
  name,
  id = Math.random(),
  isChecked = undefined,
}) => {
  return (
    <div className="col-4">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        checked={isChecked}
      />
      <label className="form-check-label mb-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
