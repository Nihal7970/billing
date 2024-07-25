// SelectCustomer.jsx
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[200],
  height: "60px",
  width: "60%",
}));

const customers = [
  {
    id: 1,
    name: "Gupta Enterprise",
    status: "Active",
    adress: "123 Main St",
    pancard: "rf74yh",
    gstno: "fh34ut34y",
  },
  {
    id: 2,
    name: "Omkar Brothers",
    status: "Active",
    adress: "456 Side St",
    pancard: "ni74yh",
    gstno: "fh34utgt4",
  },
  {
    id: 3,
    name: "Bhuvan Infotech",
    status: "Active",
    adress: "789 High St",
    pancard: "hn74yh",
    gstno: "rgfg34yuf",
  },
  {
    id: 4,
    name: "Seastik Software",
    status: "Active",
    adress: "321 Low St",
    pancard: "br74yh",
    gstno: "4ytg87bfdh",
  },
  {
    id: 5,
    name: "Mahesh Industry",
    status: "NonActive",
    adress: "654 Down St",
    pancard: "6f74yh",
    gstno: "rb2ytf34y",
  },
];

const Selectcustomer = ({ onSelectCustomer, onBack }) => {
  return (
    <Box
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "18px",
        height: "80vh",
        width: "70%",
        border: "2px solid black",
        borderRadius: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">Select Customer </Typography>
        <IconButton onClick={onBack}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Grid container spacing={5}>
        {customers.map((customer) => (
          <Grid item xs={12} sm={6} key={customer.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "#e5e5e5",
                padding: "12px",
              }}
            >
              <Typography variant="body1">{customer.name}</Typography>
              <Button
                variant="contained"
                color={customer.status === "Active" ? "success" : "error"}
                sx={{
                  marginTop: "12px",
                }}
                onClick={() => onSelectCustomer(customer)}
              >
                {customer.status}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Selectcustomer;
