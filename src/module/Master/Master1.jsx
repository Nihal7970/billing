// InteractiveBoxes.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const InteractiveBoxes = ({ onBoxClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          boxShadow: 3,
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        onClick={() => onBoxClick("box1")}
      >
        <Typography variant="h6">CUSTOMER</Typography>
      </Box>
      <Box
        sx={{
          width: "25%",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          boxShadow: 3,
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        onClick={() => onBoxClick("box2")}
      >
        <Typography variant="h6">ITEMS</Typography>
      </Box>
    </Box>
  );
};

export default InteractiveBoxes;
