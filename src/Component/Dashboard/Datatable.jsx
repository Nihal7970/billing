import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import customerData from "../../Data/item.json";
import { useNavigate } from "react-router-dom";

function createData(id, name, item, amount) {
  return { id, name, item, amount };
}

const Datatable = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [header, setHeader] = useState([]);
  const [body, setBody] = useState([]);

  const searchQueryString = (searchQuery || "").toString().trim();
  const filteredRows = body.filter((row) =>
    row[0].toString().includes(searchQueryString)
  );

  useEffect(() => {
    if (customerData.length > 0) {
      const headItems = Object.keys(customerData[0]);
      headItems.push("");
      setHeader(headItems);

      const bodyData = customerData.map((data) => Object.values(data));
      setBody(bodyData);
    }
  }, []);

  const handleViewCustomer = (customerId) => {
    const details = customerData.find((customer) => customer.id === customerId);
    navigate(`/dashboard/customer/${customerId}`, {
      state: { customerDetails: details },
    });
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: "60px" }}>
      <Table>
        <TableHead style={{ backgroundColor: "rgb(45, 45, 79)" }}>
          <TableRow>
            {header.map((headItem, index) => (
              <TableCell key={index} style={{ color: "white" }}>
                {headItem}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.length > 0 ? (
            filteredRows.map((colItem, index) => (
              <>
                <TableRow key={index}>
                  {colItem.map((item, i) => (
                    <TableCell key={i}>{item}</TableCell>
                  ))}
                  <TableCell>
                    <Button onClick={() => handleViewCustomer(colItem[0])}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))
          ) : (
            <TableCell colSpan={header.length}>No results found</TableCell>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Datatable;
