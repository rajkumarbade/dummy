import React from "react";
import TextField from "@mui/material/TextField";

const RenderTextField = ({ label, meta, input }) => {
  console.log(input);
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      error={meta.touched && meta.error}
    />
  );
};

export default RenderTextField;
