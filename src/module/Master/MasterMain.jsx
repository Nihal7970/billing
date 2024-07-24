// MasterMain.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MasterMain = () => {
  const navigate = useNavigate();

  const onBoxClick = (type) => {
    if (type === "customer") {
      navigate("/master/view_customers");
    } else if (type === "item") {
      navigate("/master/view_items");
    }
  };

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
        onClick={() => onBoxClick("customer")}
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
        onClick={() => onBoxClick("item")}
      >
        <Typography variant="h6">ITEMS</Typography>
      </Box>
    </Box>
  );
};

export default MasterMain;
