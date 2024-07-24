import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavStyle.css";

function Nav() {
  return (
    <Drawer
      variant="permanent"
      className="Nav"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          top: 90, // Offset from the top
          height: `calc(100% - 90px)`, // Adjust height accordingly
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/master">
          <ListItemText primary="Master" />
        </ListItem>
        <ListItem button component={Link} to="/Billing">
          <ListItemText primary="Billing" />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
}

export default Nav;
