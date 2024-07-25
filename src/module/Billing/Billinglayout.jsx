import React, { useState } from "react";
import Billing1 from "../../Component/Billing/Billing1";
import Selectcustomer from "../../Component/Billing/Selectcustomer";
import Customerdetails from "../../Component/Billing/Customerdetail";
import Selectitem from "../../Component/Billing/Selectitem";
import { Modal } from "@mui/material";

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

  const handleBackToCustomerDetail = () => {
    setActiveComponent("customerdetails");
  };

  return (
    <div>
      {activeComponent === "billing1" && (
        <Billing1 onAddClick={handleAddClick} />
      )}
      <Modal open={activeComponent === "selectcustomer"}>
        <Selectcustomer
          onSelectCustomer={handleCustomerSelect}
          onBack={handleBackToBilling}
        />
      </Modal>
      {activeComponent === "customerdetails" && (
        <Customerdetails
          customer={selectedCustomer}
          onBack={handleBackToCustomerList}
          onAddClick={handleAddItemsClick}
        />
      )}
      <Modal open={activeComponent === "selectitem"}>
        <Selectitem onBack={handleBackToCustomerDetail} />
      </Modal>
    </div>
  );
}

export default Billinglayout;
