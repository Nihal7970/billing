import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import itemList from "../../Data/item.json";
import { useNavigate } from "react-router-dom";

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

const ItemList = ({ onSelectCustomer, onBack }) => {
  const navigate = useNavigate();
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
          Item
          <Button
            variant="contained"
            color="error"
            style={{ float: "right" }}
            onClick={() => navigate("/master/add_item")}
          >
            Add
          </Button>
        </Typography>
        <Grid container spacing={4}>
          {" "}
          {/* Adjust spacing between items */}
          {itemList.map((customer) => (
            <Grid item xs={12} sm={6} md={4} key={customer.id}>
              <StyledPaper>
                <Typography variant="h6">{customer.Name}</Typography>
                <Button
                  variant="contained"
                  style={{
                    textWrap: "nowrap",
                    backgroundColor:
                      customer.isActive === "Y" ? "darkgreen" : "red",
                    marginTop: "8px", // Smaller margin
                  }}
                  onClick={() => onSelectCustomer(customer)}
                >
                  {customer.isActive === "Y" ? "Active" : "In-Active"}
                </Button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ItemList;
