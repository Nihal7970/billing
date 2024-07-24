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

const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      <Typography variant="h5" sx={{ marginBottom: "12px" }}>
        Add New Item
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Item Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Customer Selling Price"
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

export default AddItems;
