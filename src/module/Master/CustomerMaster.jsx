import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Paper component for custom styling
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[200],
  height: "120px", // Smaller height
  width: "100%", // Full width of the grid item
  maxWidth: "200px", // Max width of each box
  boxShadow: theme.shadows[1], // Lighter shadow for a subtle effect
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

const CustomerList = ({ onSelectCustomer, onBack }) => {
  return (
    <Box
      style={{
        padding: 2,
        height: "100vh",
        border: "2px solid black",
        borderRadius: 2,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">
          Customer
          <Button
            variant="contained"
            color="error"
            style={{ float: "right" }}
            onClick={onBack}
          >
            Cancel
          </Button>
        </Typography>
        <Grid container spacing={4}>
          {" "}
          {/* Adjust spacing between items */}
          {customers.map((customer) => (
            <Grid item xs={12} sm={6} md={4} key={customer.id}>
              <StyledPaper>
                <Typography variant="h6">{customer.name}</Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor:
                      customer.status === "Active" ? "darkgreen" : "red",
                    marginTop: "8px", // Smaller margin
                  }}
                  onClick={() => onSelectCustomer(customer)}
                >
                  {customer.status}
                </Button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerList;
