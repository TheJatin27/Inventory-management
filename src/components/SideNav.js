  import React from 'react';
  import { Link } from 'react-router-dom';
  import './SideNav.css';

  const SideNav = ({ isOpen, toggleSideNav }) => {
    return (
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <h2>My Brand</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Dashboard</Link></li>
          <li><Link to="/inventory" className="nav-link">Inventory</Link></li>
          <li><Link to="/invoice" className="nav-link">Invoice</Link></li>
          <li><Link to="/accounting" className="nav-link">Accounting</Link></li>
          <li><Link to="/users" className="nav-link">Users</Link></li>
        </ul>
      </div>
    );
  };

  export default SideNav;
