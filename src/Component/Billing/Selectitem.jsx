import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[200],
  height: "60px",
  width: "60%",
}));

const items = [
  { id: 1, name: "Laptop", status: "Active" },
  { id: 2, name: "Mobile Phone", status: "Active" },
  { id: 3, name: "LED Monitor", status: "Active" },
  { id: 4, name: "Pendrive", status: "Active" },
  { id: 5, name: "Powerbank", status: "NonActive" },
  { id: 6, name: "Headphone", status: "NonActive" },
];

function Selectitem({ onBack }) {
  return (
    <div
      style={{
        padding: 2,
        height: "50vh",
        borderRadius: 2,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ padding: 10 }}>
        <h1>Select Item</h1>
        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <StyledPaper>
                <h2>{item.name}</h2>
                <button
                  style={{
                    backgroundColor:
                      item.status === "Active" ? "darkgreen" : "red",
                    marginTop: "60px",
                  }}
                >
                  {item.status}
                </button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "3px",
          width: "100%",
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            padding: "2px",
            color: "white",
          }}
          onClick={onBack}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "rgb(45, 45, 79)",
            padding: "2px",
            color: "white",
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Selectitem;
