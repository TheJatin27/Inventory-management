import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddInvoiceData.css";

const AddInvoiceData = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [receiveDate, setReceiveDate] = useState("");
  const [paidDate, setPaidDate] = useState("");
  const [saleCash, setSaleCash] = useState("");
  const [saleCredit, setSaleCredit] = useState("");

  const navigate = useNavigate();

  // Navigate to the View Invoice page
  const handleViewInvoice = () => {
    navigate("/view-invoice"); // Replace this with your actual route for viewing invoices
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform logic to save the invoice data
    console.log({
      invoiceNumber,
      vendorName,
      receiveDate,
      paidDate,
      saleCash,
      saleCredit,
    });
    alert("Invoice data added successfully!");
    // Reset form fields
    setInvoiceNumber("");
    setVendorName("");
    setReceiveDate("");
    setPaidDate("");
    setSaleCash("");
    setSaleCredit("");
  };

  return (
    <div className="add-invoice-container">
      {/* View Invoice Button */}
      <div className="top-button-container">
        <button onClick={handleViewInvoice} className="view-invoice-btn">
          View Invoice
        </button>
      </div>

      {/* Add Invoice Form */}
      <h2>Add Invoice Data</h2>
      <form className="add-invoice-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="invoiceNumber">Invoice Number</label>
          <input
            type="text"
            id="invoiceNumber"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="Enter invoice number"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="vendorName">Vendor Name</label>
          <select
            id="vendorName"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select Vendor</option>
            <option value="Vendor A">Vendor A</option>
            <option value="Vendor B">Vendor B</option>
            <option value="Vendor C">Vendor C</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="receiveDate">Receive Date</label>
          <input
            type="date"
            id="receiveDate"
            value={receiveDate}
            onChange={(e) => setReceiveDate(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="paidDate">Paid Date</label>
          <input
            type="date"
            id="paidDate"
            value={paidDate}
            onChange={(e) => setPaidDate(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="saleCash">Sale Cash</label>
          <input
            type="number"
            id="saleCash"
            value={saleCash}
            onChange={(e) => setSaleCash(e.target.value)}
            placeholder="Enter cash sale amount"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="saleCredit">Sale Credit</label>
          <input
            type="number"
            id="saleCredit"
            value={saleCredit}
            onChange={(e) => setSaleCredit(e.target.value)}
            placeholder="Enter credit sale amount"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Invoice
        </button>
      </form>
    </div>
  );
};

export default AddInvoiceData;
