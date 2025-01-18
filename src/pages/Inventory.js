import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
  const [columnName, setColumnName] = useState('');
  const [dataType, setDataType] = useState('string');
  const [dropdownValues, setDropdownValues] = useState([]);
  const [columns, setColumns] = useState([]);
  const [inputFields, setInputFields] = useState([]); // Shared for Dropdown and Radio values
  const navigate = useNavigate();

  const handleAddInputField = () => {
    setInputFields([...inputFields, '']);
  };

  const handleInputValueChange = (index, value) => {
    const newValues = [...inputFields];
    newValues[index] = value;
    setInputFields(newValues);
  };

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        columnName,
        dataType,
        isDropdown: dataType === 'dropdown',
        isRadio: dataType === 'radio',
        serialNo: columns.length + 1,
        values: dataType === 'dropdown' || dataType === 'radio' ? inputFields : [],
      },
    ]);
    setColumnName('');
    setDataType('string');
    setInputFields([]); // Reset input fields
  };

  const handleRedirect = () => {
    navigate('/AddInventoryData');
  };

  return (
    <div className="inventory-container">
      {/* Add Data Button */}
      <div className="top-actions">
        <button onClick={handleRedirect} className="add-data-btn">
          Add Data
        </button>
      </div>

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
          <label>Data Type:</label>
          <select
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="input-field"
          >
            <option value="string">String</option>
            <option value="int">Integer</option>
            <option value="boolean">Boolean</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="dropdown">Dropdown</option>
          </select>
        </div>

        {(dataType === 'dropdown' || dataType === 'radio') && (
          <div className="input-values-container">
            <h3>{dataType === 'dropdown' ? 'Dropdown Values:' : 'Radio Values:'}</h3>
            {inputFields.map((value, index) => (
              <div key={index} className="input-group">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputValueChange(index, e.target.value)}
                  className="input-field dropdown-input"
                  placeholder={`Value ${index + 1}`}
                />
              </div>
            ))}
            <button onClick={handleAddInputField} className="add-input-btn">
              Add Value
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
            <th>Data Type</th>
            <th>Is Dropdown</th>
            <th>Is Radio</th>
            <th>Serial No</th>
            <th>Values</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column) => (
            <tr key={column.id}>
              <td>{column.id}</td>
              <td>{column.columnName}</td>
              <td>{column.dataType}</td>
              <td>{column.isDropdown ? 'Yes' : 'No'}</td>
              <td>{column.isRadio ? 'Yes' : 'No'}</td>
              <td>{column.serialNo}</td>
              <td>{column.values.join(', ')}</td>
              <td>
                <button onClick={handleRedirect} className="redirect-btn">
                  Add Inventory Data
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
