import React, { useState } from "react";
import Dash from "../../Component/Dashboard/Dash";
import Input from "../../Component/Dashboard/Input";
import Datatable from "../../Component/Dashboard/Datatable"; // Ensure correct import path
import Invoicedetail from "../../Component/Dashboard/Invoicedetail"; // Ensure correct import path

const Dashlayout = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

  const handleViewClick = (customer) => {
    setSelectedCustomer(customer);
    setActiveComponent("invoicedetail");
  };

  const handleBackClick = () => {
    setActiveComponent("dashboard");
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {activeComponent === "dashboard" && (
        <>
          <Dash />
          <Input onSearchChange={handleSearchChange} />{" "}
          {/* Pass search handler */}
          <Datatable searchQuery={searchQuery} onViewClick={handleViewClick} />
        </>
      )}

      {activeComponent === "invoicedetail" && (
        <>
          <Invoicedetail customer={selectedCustomer} />
          <button onClick={handleBackClick}>Back to Dashboard</button>
        </>
      )}
    </div>
  );
};

export default Dashlayout;
