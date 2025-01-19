import React, { useState } from "react";
import "./ExpensePanel.css";

const ExpensePanel = () => {
  const [expenses, setExpenses] = useState([]);
  const [paidDate, setPaidDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [salary, setSalary] = useState("");
  const [rent, setRent] = useState("");
  const [utilityBill, setUtilityBill] = useState("");

  // Handle form submission
  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      paidDate,
      employeeName,
      salary: parseFloat(salary) || 0,
      rent: parseFloat(rent) || 0,
      utilityBill: parseFloat(utilityBill) || 0,
      total: (parseFloat(salary) || 0) + (parseFloat(rent) || 0) + (parseFloat(utilityBill) || 0),
    };
    setExpenses([...expenses, newExpense]);

    // Reset form fields
    setPaidDate("");
    setEmployeeName("");
    setSalary("");
    setRent("");
    setUtilityBill("");
  };

  return (
    <div className="expense-panel-container">
      {/* Add Expense Form */}
      <h2>Add Expense</h2>
      <form className="expense-form" onSubmit={handleAddExpense}>
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
          <label htmlFor="employeeName">Employee Name</label>
          <select
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select Employee</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Alice Johnson">Alice Johnson</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary amount"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rent">Rent</label>
          <input
            type="number"
            id="rent"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            placeholder="Enter rent amount"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="utilityBill">Utility Bill</label>
          <input
            type="number"
            id="utilityBill"
            value={utilityBill}
            onChange={(e) => setUtilityBill(e.target.value)}
            placeholder="Enter utility bill amount"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>

      {/* Expense Report Table */}
      <h2>Expense Report</h2>
      <div className="table-container">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Paid Date</th>
              <th>Employee Name</th>
              <th>Salary</th>
              <th>Rent</th>
              <th>Utility Bill</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.paidDate}</td>
                  <td>{expense.employeeName}</td>
                  <td>${expense.salary.toFixed(2)}</td>
                  <td>${expense.rent.toFixed(2)}</td>
                  <td>${expense.utilityBill.toFixed(2)}</td>
                  <td>${expense.total.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No expenses added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpensePanel;
