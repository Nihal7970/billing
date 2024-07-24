// SelectCustomer.jsx
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
    <div
      style={{
        padding: 2,
        height: "100vh",
        border: "2px solid black",
        borderRadius: 2,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ padding: 10 }}>
        <h1>
          Select Customer{" "}
          <button
            style={{ backgroundColor: "red", marginLeft: "90%" }}
            onClick={onBack}
          >
            Cancel
          </button>
        </h1>
        <Grid container spacing={5}>
          {customers.map((customer) => (
            <Grid item xs={12} sm={6} key={customer.id}>
              <StyledPaper>
                <h2>{customer.name}</h2>
                <button
                  style={{
                    backgroundColor:
                      customer.status === "Active" ? "darkgreen" : "red",
                    marginTop: "60px",
                  }}
                  onClick={() => onSelectCustomer(customer)}
                >
                  {customer.status}
                </button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Selectcustomer;
