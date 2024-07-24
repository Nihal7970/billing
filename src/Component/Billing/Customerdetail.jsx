// CustomerDetails.jsx
import React from "react";
// import Selectitem from "./Selectitem";
import { Box, Typography, Paper, Button } from "@mui/material";
import AddItems from "./AddItems";

const CustomerDetails = ({ customer, onBack }) => {
  if (!customer) return <div>No customer selected</div>;

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Customer Details</Typography>
          <Typography>ID: {customer.id}</Typography>
          <Typography>Name: {customer.name}</Typography>
          <Typography>Status: {customer.status}</Typography>
          <Typography>Address: {customer.adress}</Typography>
          <Typography>PAN Card: {customer.pancard}</Typography>
          <Typography>GST No: {customer.gstno}</Typography>
          {/* <Button variant="contained" onClick={onBack}>
          Back to Customer List
        </Button> */}
        </Paper>
      </Box>
      <AddItems />
    </>
  );
};

export default CustomerDetails;
