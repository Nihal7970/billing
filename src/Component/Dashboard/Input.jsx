import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value); // Pass the value to parent
  };

  return (
    <div style={{ width: "100%" }}>
      <TextField
        label="Search"
        onChange={handleChange}
        placeholder="SEARCH BY INVOICE ID..."
        fullWidth
      />
    </div>
  );
};

export default Input;
