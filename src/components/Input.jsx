import React from "react";
import { Input, Label } from "reactstrap";

const MyInput = ({ name, label, ...rest }) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input {...rest} name={name} id={name} className="form-control" />
    </div>
  );
};

export default MyInput;
