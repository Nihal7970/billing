import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [Gst, setGST] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      <Typography variant="h5" sx={{ marginBottom: "12px" }}>
        Add New Customer
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Customer Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Customer Address"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            label="Customer PAN Card number"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={Gst}
            onChange={(e) => setGST(e.target.value)}
            label="Customer GST number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              fullWidth
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">In-Active</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item={6}>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </Grid>
        <Grid item={6}>
          <Button variant="contained">Create</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddCustomer;
