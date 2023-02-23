import React from "react";
import Button from "@mui/material/Button";

const RenderButton = ({ children }) => {
  return (
    <Button variant="outlined" size="large">
      {children}
    </Button>
  );
};

export default RenderButton;
