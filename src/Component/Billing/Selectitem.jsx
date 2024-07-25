import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        height: "90vh",
        width: "80%",
        background: "#fff",
        padding: "18px",
        boxSizing: "border-box",
        transform: "translate(-50%, -50%)",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "18px" }}>
        Select Item
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Box
              sx={{
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                background: "#e5e5e5",
              }}
            >
              <Typography variant="body2">{item.name}</Typography>
              <Button
                variant="contained"
                color={item.status === "Active" ? "success" : "error"}
                sx={{ marginTop: "8px" }}
              >
                {item.status}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "3px",
          width: "100%",
        }}
      >
        <Button variant="contained" color="error" onClick={onBack}>
          Cancel
        </Button>
        <Button variant="contained" color="success">
          Create
        </Button>
      </Box>
    </Box>
  );
}

export default Selectitem;
