import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accounting.css";

const Accounting = () => {
  const [columnName, setColumnName] = useState("");
  const [dataType, setDataType] = useState("String");
  const [dropdownValues, setDropdownValues] = useState([]);
  const [radioValues, setRadioValues] = useState([]);
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  // Handle adding dropdown values
  const handleAddDropdownValue = () => {
    if (dropdownValues.length < 5) {
      setDropdownValues([...dropdownValues, ""]);
    }
  };

  const handleDropdownValueChange = (index, value) => {
    const newValues = [...dropdownValues];
    newValues[index] = value;
    setDropdownValues(newValues);
  };

  // Handle adding radio values
  const handleAddRadioValue = () => {
    if (radioValues.length < 5) {
      setRadioValues([...radioValues, ""]);
    }
  };

  const handleRadioValueChange = (index, value) => {
    const newValues = [...radioValues];
    newValues[index] = value;
    setRadioValues(newValues);
  };

  // Handle adding a column
  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        columnName,
        dataType,
        serialNo: columns.length + 1,
        dropdownValues: dataType === "Dropdown" ? dropdownValues : [],
        radioValues: dataType === "Radio" ? radioValues : [],
      },
    ]);
    // Reset the form state
    setColumnName("");
    setDataType("String");
    setDropdownValues([]);
    setRadioValues([]);
  };

  // Navigate to Add Data page
  const handleAddAccountingData = () => {
    navigate("/add-accounting-data");
  };

  return (
    <div className="accounting-container">
      <div className="top-button-container">
        <button onClick={handleAddAccountingData} className="add-accounting-data-btn">
          Add Accounting Data
        </button>
      </div>

      <h2>Add Accounting Column</h2>
      <div className="form-container">
        <div className="form-group">
          <label>Column Name:</label>
          <input
            type="text"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Data Type:</label>
          <select
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="input-field"
          >
            <option value="String">String</option>
            <option value="Integer">Integer</option>
            <option value="Boolean">Boolean</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Radio">Radio</option>
            <option value="Dropdown">Dropdown</option>
          </select>
        </div>

        {/* Dropdown Values Input */}
        {dataType === "Dropdown" && (
          <div className="dropdown-container">
            <h3>Dropdown Values:</h3>
            {dropdownValues.map((value, index) => (
              <div key={index} className="dropdown-input-group">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleDropdownValueChange(index, e.target.value)}
                  className="input-field dropdown-input"
                  placeholder={`Dropdown value ${index + 1}`}
                />
              </div>
            ))}
            {dropdownValues.length < 5 && (
              <button onClick={handleAddDropdownValue} className="add-dropdown-btn">
                Add Dropdown Value
              </button>
            )}
          </div>
        )}

        {/* Radio Values Input */}
        {dataType === "Radio" && (
          <div className="radio-container">
            <h3>Radio Values:</h3>
            {radioValues.map((value, index) => (
              <div key={index} className="radio-input-group">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleRadioValueChange(index, e.target.value)}
                  className="input-field radio-input"
                  placeholder={`Radio value ${index + 1}`}
                />
              </div>
            ))}
            {radioValues.length < 5 && (
              <button onClick={handleAddRadioValue} className="add-radio-btn">
                Add Radio Value
              </button>
            )}
          </div>
        )}

        <button onClick={handleAddColumn} className="add-column-btn">
          Add Column
        </button>
      </div>

      <h3>Accounting Columns List</h3>
      <div className="table-container">
        <table className="accounting-table">
          <thead>
            <tr>
              <th>Column ID</th>
              <th>Column Name</th>
              <th>Data Type</th>
              <th>Serial No</th>
              <th>Dropdown Values</th>
              <th>Radio Values</th>
            </tr>
          </thead>
          <tbody>
            {columns.map((column) => (
              <tr key={column.id}>
                <td>{column.id}</td>
                <td>{column.columnName}</td>
                <td>{column.dataType}</td>
                <td>{column.serialNo}</td>
                <td>{column.dropdownValues.join(", ")}</td>
                <td>{column.radioValues.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounting;
