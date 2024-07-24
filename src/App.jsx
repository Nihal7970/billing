import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/common/Home";
import Dashlayout from "./module/Dashboard/Dashlayout"; // Import the new component

// import Selectitem from "../Billing/Selectitem";
import Billinglayout from "./module/Billing/Billinglayout";
import Invoicedetail from "./Component/Dashboard/Invoicedetail";
import MasterMain from "./module/Master/MasterMain";
import CustomerList from "./module/Master/CustomerList";
import ItemList from "./module/Master/ItemList";
import AddCustomer from "./module/Master/AddCustomer";
import AddItems from "./module/Master/AddItem";

function App() {
  return (
    <Home>
      <Routes>
        <Route path="/dashboard" element={<Dashlayout />} />
        <Route path="/dashboard/customer/:id" element={<Invoicedetail />} />
        <Route path="/billing" element={<Billinglayout />} />
        <Route path="/master" element={<MasterMain />} />
        <Route path="/master/view_customers" element={<CustomerList />} />
        <Route path="/master/view_items" element={<ItemList />} />

        <Route path="/master/add_customer" element={<AddCustomer />} />
        <Route path="/master/add_item" element={<AddItems />} />

        {/* Add more routes as needed */}
      </Routes>
      {/* <Selectitem /> */}
      {/* <Masterlayout /> */}
    </Home>
  );
}

export default App;
