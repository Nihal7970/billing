import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/common/Home";
import Dashlayout from "./module/Dashboard/Dashlayout"; // Import the new component

// import Selectitem from "../Billing/Selectitem";
import Billinglayout from "./module/Billing/Billinglayout";
import Master1 from "./module/Master/Master1";
import Masterlayout from "./module/Master/Masterlayout";
import Invoicedetail from "./Component/Dashboard/Invoicedetail";

function App() {
  return (
    <Home>
      <Routes>
        <Route path="/dashboard" element={<Dashlayout />} />
        <Route path="/dashboard/customer/:id" element={<Invoicedetail />} />
        <Route path="/billing/home" element={<Billinglayout />} />
        <Route path="/master" element={<Billinglayout />} />
        <Route path="/master/add_customer" element={<Billinglayout />} />
        <Route path="/master/add_item" element={<Billinglayout />} />

        {/* Add more routes as needed */}
      </Routes>
      {/* <Selectitem /> */}
      {/* <Masterlayout /> */}
    </Home>
  );
}

export default App;
