import React from "react";
import { Box } from "@mui/material";

function Billing1({ onAddClick }) {
  return (
    <>
      <h3>Billing</h3>
      <Box
        sx={{
          width: "80%",
          height: "250px",
          p: 3,
          m: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <button onClick={onAddClick}>Add</button>
      </Box>
    </>
  );
}

export default Billing1;
