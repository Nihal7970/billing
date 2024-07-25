import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const Invoicedetail = ({ customer }) => {
  // if (!customer) return <div>No customer selected</div>;
  const location = useLocation();
  const [customerData, setCustomerData] = useState(
    location.state?.customerDetails
  );
  console.log(location);
  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6">Invoice Details</Typography>
        <Typography>Name: {customerData?.Name}</Typography>
        <Typography>Address: {customerData?.Price}</Typography>
        <Typography>PAN Card: {customerData?.PAN}</Typography>
        <Typography>GST Num: {customerData?.GST}</Typography>
        <h4>items</h4>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h7">
              Name<div>{customerData?.Name}</div>
            </Typography>
            <Typography variant="h7">
              Amount
              <h2>Total</h2>
            </Typography>
            <Typography variant="h7">
              Amount <div> {customerData?.Price}</div>
              <h2>{customerData?.Price}</h2>
            </Typography>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default Invoicedetail;
