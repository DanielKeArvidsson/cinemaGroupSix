import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const InputField = ({ name, label, type, value, error, onChange }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={label}
        className="formControl"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </FormGroup>
  );
};

export default InputField;
