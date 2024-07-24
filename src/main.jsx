import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
