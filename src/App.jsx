import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { deposit } from "./features/accountSlice";
import { createCustomer, updateName } from "./features/customerSlice";

function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const customer = useSelector((state) => state.customer);

  const [depositAmount, setDepositAmount] = useState("");
  const [customerName, setCustomerName] = useState("");

  const handleDeposit = () => {
    if (depositAmount) {
      dispatch(deposit(parseInt(depositAmount)));
      //dispatch(accountsSlice.action.deposit(500))
      setDepositAmount("");
    }
  };

  const handleCreateCustomer = () => {
    if (customerName) {
      dispatch(createCustomer(customerName, "5455sd"));
      setCustomerName("");
    }
  };

  const handleUpdateName = () => {
    if (customerName) {
      dispatch(updateName(customerName));
      setCustomerName("");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Account Actions</h2>
        <div className="input-group">
          <label htmlFor="deposit">Deposit Amount:</label>
          <input
            type="number"
            id="deposit"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
        {/* <div className="input-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <button onClick={handleCreateCustomer}>Create Customer</button>
        </div>
        <div className="input-group">
          <label htmlFor="updateName">Update Name:</label>
          <input
            type="text"
            id="updateName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <button onClick={handleUpdateName}>Update Name</button>
        </div> */}
      </div>
      <div className="info">
        <h2>Account Information</h2>
        <p>Account Balance: {account.balance}</p>

        {/* <p>Customer Name: {customer.fullName}</p> */}
      </div>
    </div>
  );
}

export default App;
