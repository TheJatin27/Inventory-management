import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ({ isOpen, toggleSideNav }) => {
  const handleLinkClick = () => {
    if (isOpen) {
      toggleSideNav(); // Close the side nav when a link is clicked
    }
  };

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <div className="brand">
        <h2>My Brand</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="nav-link" onClick={handleLinkClick}>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/invoice" className="nav-link" onClick={handleLinkClick}>
            Invoice
          </Link>
        </li>
        <li>
          <Link to="/accounting" className="nav-link" onClick={handleLinkClick}>
            Accounting
          </Link>
        </li>
        <li>
          <Link to="/users" className="nav-link" onClick={handleLinkClick}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/ExpensePanel" className="nav-link" onClick={handleLinkClick}>
            Expense Panel
          </Link>
          </li>
      </ul>
    </div>
  );
};

export default SideNav;
