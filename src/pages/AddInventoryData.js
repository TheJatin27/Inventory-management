import React, { useState } from 'react';
import './AddInventoryData.css';

const AddInventoryData = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productColor, setProductColor] = useState('');
  const [dayStartInventory, setDayStartInventory] = useState(0);
  const [addInventory, setAddInventory] = useState(0);
  const [usedInventory, setUsedInventory] = useState(0);
  const [defectiveInventory, setDefectiveInventory] = useState(0);
  const [location, setLocation] = useState('');
  const [returnTo, setReturnTo] = useState('');
  const [preOrder, setPreOrder] = useState('');

  const totalInventory = parseInt(dayStartInventory) + parseInt(addInventory);
  const remainingInventory = totalInventory - (parseInt(usedInventory) + parseInt(defectiveInventory));

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      productId,
      productName,
      productColor,
      dayStartInventory,
      addInventory,
      usedInventory,
      defectiveInventory,
      totalInventory,
      remainingInventory,
      location,
      returnTo,
      preOrder,
    };
    console.log('Submitted Data:', data);
    alert('Inventory data has been successfully added!');
    // Reset form fields
    setProductId('');
    setProductName('');
    setProductColor('');
    setDayStartInventory(0);
    setAddInventory(0);
    setUsedInventory(0);
    setDefectiveInventory(0);
    setLocation('');
    setReturnTo('');
    setPreOrder('');
  };

  return (
    <div className="add-inventory-container">
      <h2>Add Inventory Data</h2>
      <form onSubmit={handleSubmit} className="inventory-form">
        <div className="form-group">
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Product Color:</label>
          <input
            type="text"
            value={productColor}
            onChange={(e) => setProductColor(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Day Start Inventory:</label>
          <input
            type="number"
            value={dayStartInventory}
            onChange={(e) => setDayStartInventory(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Add Inventory:</label>
          <input
            type="number"
            value={addInventory}
            onChange={(e) => setAddInventory(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Used Inventory:</label>
          <input
            type="number"
            value={usedInventory}
            onChange={(e) => setUsedInventory(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Defective Inventory:</label>
          <input
            type="number"
            value={defectiveInventory}
            onChange={(e) => setDefectiveInventory(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Remaining Inventory:</label>
          <input
            type="number"
            value={remainingInventory}
            readOnly
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Return To:</label>
          <select
            value={returnTo}
            onChange={(e) => setReturnTo(e.target.value)}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="Supplier A">Supplier A</option>
            <option value="Supplier B">Supplier B</option>
            <option value="Warehouse">Warehouse</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pre Order:</label>
          <select
            value={preOrder}
            onChange={(e) => setPreOrder(e.target.value)}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInventoryData;
