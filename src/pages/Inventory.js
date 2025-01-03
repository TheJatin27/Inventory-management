import React, { useState } from 'react';
import './Inventory.css';

const Inventory = () => {
  const [columnName, setColumnName] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  const [dropdownValues, setDropdownValues] = useState([]);
  const [columns, setColumns] = useState([]);
  const [dropdownInputFields, setDropdownInputFields] = useState([]);

  const handleAddDropdownValue = () => {
    setDropdownInputFields([...dropdownInputFields, '']);
  };

  const handleDropdownValueChange = (index, value) => {
    const newValues = [...dropdownInputFields];
    newValues[index] = value;
    setDropdownInputFields(newValues);
  };

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        columnName,
        isDropdown,
        serialNo: columns.length + 1,
        dropdownValues: dropdownInputFields,
      },
    ]);
    setColumnName('');
    setIsDropdown(false);
    setDropdownValues([]);
    setDropdownInputFields([]); // Reset input fields after adding the column
  };

  return (
    <div className="inventory-container">
      <h2>Add Column</h2>
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
          <label>Is Dropdown?</label>
          <select
            value={isDropdown}
            onChange={(e) => setIsDropdown(e.target.value === 'true')}
            className="input-field"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
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
        <button onClick={handleAddColumn} className="add-column-btn">
          Add Column
        </button>
      </div>

      <h3>Columns List</h3>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Column ID</th>
            <th>Column Name</th>
            <th>Is Dropdown</th>
            <th>Serial No</th>
            <th>Dropdown Values</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column) => (
            <tr key={column.id}>
              <td>{column.id}</td>
              <td>{column.columnName}</td>
              <td>{column.isDropdown ? 'Yes' : 'No'}</td>
              <td>{column.serialNo}</td>
              <td>{column.dropdownValues.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
