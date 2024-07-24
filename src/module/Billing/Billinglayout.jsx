import React, { useState } from "react";
import Billing1 from "../../Component/Billing/Billing1";
import Selectcustomer from "../../Component/Billing/Selectcustomer";
import Customerdetails from "../../Component/Billing/Customerdetail";
import AddItems from "../../Component/Billing/AddItems"; // Ensure correct capitalization and path
import Selectitem from "../../Component/Billing/Selectitem"; // Ensure correct capitalization and path

function Billinglayout() {
  const [activeComponent, setActiveComponent] = useState("billing1");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleAddClick = () => {
    setActiveComponent("selectcustomer");
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setActiveComponent("customerdetails");
  };

  const handleBackToBilling = () => {
    setActiveComponent("billing1");
  };

  const handleBackToCustomerList = () => {
    setSelectedCustomer(null);
    setActiveComponent("selectcustomer");
  };

  const handleAddItemsClick = () => {
    setActiveComponent("selectitem");
  };

  const handleBackToAddItems = () => {
    setActiveComponent("additems");
  };

  return (
    <div>
      {activeComponent === "billing1" && (
        <Billing1 onAddClick={handleAddClick} />
      )}

      {activeComponent === "selectcustomer" && (
        <Selectcustomer
          onSelectCustomer={handleCustomerSelect}
          onBack={handleBackToBilling}
        />
      )}

      {activeComponent === "customerdetails" && (
        <Customerdetails
          customer={selectedCustomer}
          onBack={handleBackToCustomerList}
        />
      )}

      {activeComponent === "additems" && (
        <AddItems onAddClick={handleAddItemsClick} />
      )}

      {activeComponent === "selectitem" && (
        <Selectitem onBack={handleBackToAddItems} />
      )}
    </div>
  );
}

export default Billinglayout;
