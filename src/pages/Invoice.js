import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Invoice.css';

const Invoice = () => {
  const [columnName, setColumnName] = useState('');
  const [columnType, setColumnType] = useState('');
  const [dropdownInputFields, setDropdownInputFields] = useState([]);
  const [radioInputFields, setRadioInputFields] = useState([]);
  const [columns, setColumns] = useState([]);

  const navigate = useNavigate(); // For navigation

  const handleAddDropdownValue = () => {
    setDropdownInputFields([...dropdownInputFields, '']);
  };

  const handleDropdownValueChange = (index, value) => {
    const newValues = [...dropdownInputFields];
    newValues[index] = value;
    setDropdownInputFields(newValues);
  };

  const handleAddRadioValue = () => {
    setRadioInputFields([...radioInputFields, '']);
  };

  const handleRadioValueChange = (index, value) => {
    const newValues = [...radioInputFields];
    newValues[index] = value;
    setRadioInputFields(newValues);
  };

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        columnName,
        columnType,
        serialNo: columns.length + 1,
        dropdownValues: columnType === 'Dropdown' ? dropdownInputFields : [],
        radioValues: columnType === 'Radio' ? radioInputFields : [],
      },
    ]);
    setColumnName('');
    setColumnType('');
    setDropdownInputFields([]);
    setRadioInputFields([]);
  };

  const handleAddInvoiceData = () => {
    // Navigate to the "Add Invoice Data" page
    navigate('/AddInvoiceData');
  };

  const handleViewInvoices = () => {
    // Navigate to the "View Invoices" page
    navigate('/ViewInvoice');
  };

  return (
    <div className="invoice-container">
      <div className="top-button-container">
        <button onClick={handleAddInvoiceData} className="add-invoice-data-btn">
          Add Invoice Data
        </button>
        <button onClick={handleViewInvoices} className="view-invoices-btn">
          View Invoices
        </button>
      </div>

      <h2>Add Invoice Column</h2>
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
          <label>Column Type:</label>
          <select
            value={columnType}
            onChange={(e) => setColumnType(e.target.value)}
            className="input-field"
          >
            <option value="">Select Column Type</option>
            <option value="String">String</option>
            <option value="Boolean">Boolean</option>
            <option value="Integer">Integer</option>
            <option value="Checkbox">Checkbox</option>
            <option value="Radio">Radio</option>
            <option value="Dropdown">Dropdown</option>
          </select>
        </div>

        {columnType === 'Dropdown' && (
          <div className="dropdown-container">
            <h3>Dropdown Values:</h3>
            {dropdownInputFields.map((value, index) => (
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
            <button onClick={handleAddDropdownValue} className="add-dropdown-btn">
              Add Dropdown Value
            </button>
          </div>
        )}

        {columnType === 'Radio' && (
          <div className="radio-container">
            <h3>Radio Values:</h3>
            {radioInputFields.map((value, index) => (
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
            <button onClick={handleAddRadioValue} className="add-radio-btn">
              Add Radio Value
            </button>
          </div>
        )}

        <button onClick={handleAddColumn} className="add-column-btn">
          Add Column
        </button>
      </div>

      <h3>Invoice Columns List</h3>
      <div className="table-container">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Column ID</th>
              <th>Column Name</th>
              <th>Column Type</th>
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
                <td>{column.columnType}</td>
                <td>{column.serialNo}</td>
                <td>{column.dropdownValues.join(', ')}</td>
                <td>{column.radioValues.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
