import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Invoice.css';

const Invoice = () => {
  const [columnName, setColumnName] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isRadio, setIsRadio] = useState(false);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [radioValues, setRadioValues] = useState([]);
  const [columns, setColumns] = useState([]);
  const [dropdownInputFields, setDropdownInputFields] = useState([]);
  const [checkboxInputFields, setCheckboxInputFields] = useState([]);
  const [radioInputFields, setRadioInputFields] = useState([]);

  const navigate = useNavigate(); // For navigation

  const handleAddDropdownValue = () => {
    setDropdownInputFields([...dropdownInputFields, '']);
  };

  const handleDropdownValueChange = (index, value) => {
    const newValues = [...dropdownInputFields];
    newValues[index] = value;
    setDropdownInputFields(newValues);
  };

  const handleAddCheckboxValue = () => {
    setCheckboxInputFields([...checkboxInputFields, '']);
  };

  const handleCheckboxValueChange = (index, value) => {
    const newValues = [...checkboxInputFields];
    newValues[index] = value;
    setCheckboxInputFields(newValues);
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
        isDropdown,
        isCheckbox,
        isRadio,
        serialNo: columns.length + 1,
        dropdownValues: dropdownInputFields,
        checkboxValues: checkboxInputFields,
        radioValues: radioInputFields,
      },
    ]);
    setColumnName('');
    setIsDropdown(false);
    setIsCheckbox(false);
    setIsRadio(false);
    setDropdownValues([]);
    setCheckboxValues([]);
    setRadioValues([]);
    setDropdownInputFields([]);
    setCheckboxInputFields([]);
    setRadioInputFields([]);
  };

  const handleAddInvoiceData = () => {
    // Navigate to the "Add Invoice Data" page
    navigate('/add-invoice-data');
  };

  return (
    <div className="invoice-container">
      {/* Button on top to add invoice data */}
      <div className="top-button-container">
        <button onClick={handleAddInvoiceData} className="add-invoice-data-btn">
          Add Invoice Data
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
          <div>
            <input
              type="checkbox"
              id="dropdown"
              checked={isDropdown}
              onChange={() => setIsDropdown(!isDropdown)}
            />
            <label htmlFor="dropdown">Is Dropdown</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox"
              checked={isCheckbox}
              onChange={() => setIsCheckbox(!isCheckbox)}
            />
            <label htmlFor="checkbox">Is Checkbox</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="radio"
              checked={isRadio}
              onChange={() => setIsRadio(!isRadio)}
            />
            <label htmlFor="radio">Is Radio</label>
          </div>
        </div>

        {/* Dropdown Values Input */}
        {isDropdown && (
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

        {/* Checkbox Values Input */}
        {isCheckbox && (
          <div className="checkbox-container">
            <h3>Checkbox Values:</h3>
            {checkboxInputFields.map((value, index) => (
              <div key={index} className="checkbox-input-group">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleCheckboxValueChange(index, e.target.value)}
                  className="input-field checkbox-input"
                  placeholder={`Checkbox value ${index + 1}`}
                />
              </div>
            ))}
            <button onClick={handleAddCheckboxValue} className="add-checkbox-btn">
              Add Checkbox Value
            </button>
          </div>
        )}

        {/* Radio Values Input */}
        {isRadio && (
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
              <th>Is Dropdown</th>
              <th>Is Checkbox</th>
              <th>Is Radio</th>
              <th>Serial No</th>
              <th>Dropdown Values</th>
              <th>Checkbox Values</th>
              <th>Radio Values</th>
            </tr>
          </thead>
          <tbody>
            {columns.map((column) => (
              <tr key={column.id}>
                <td>{column.id}</td>
                <td>{column.columnName}</td>
                <td>{column.isDropdown ? 'Yes' : 'No'}</td>
                <td>{column.isCheckbox ? 'Yes' : 'No'}</td>
                <td>{column.isRadio ? 'Yes' : 'No'}</td>
                <td>{column.serialNo}</td>
                <td>{column.dropdownValues.join(', ')}</td>
                <td>{column.checkboxValues.join(', ')}</td>
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
