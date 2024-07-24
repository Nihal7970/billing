import React from "react";
import Nav from "./Nav";
import Upperside from "./Upperside";
import { Box } from "@mui/material";
import "./HomeStyle.css";

const Home = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Upperside />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Nav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: "240px", // Space for the side nav using margin-left shorthand
            mt: "64px", // Space for the top bar (adjust as needed)
            height: "calc(100vh - 64px)", // Adjust height to fill remaining space
          }}
        >
          {children} {/* Render children here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
