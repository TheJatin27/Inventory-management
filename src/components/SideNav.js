import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faFileInvoice, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '60px', // Adjusted to avoid overlap with top nav
        left: 0,
        width: '250px',
        height: '100%',
        background: 'linear-gradient(135deg, #1F3A6D, #1F5061)', // Contrasting dark blue gradient
        color: 'white',
        paddingTop: '30px',
        paddingLeft: '15px',
        boxSizing: 'border-box',
        zIndex: 999, // Ensure sidebar stays on top
        boxShadow: '4px 0 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for 3D effect
        borderRadius: '0 10px 10px 0', // Rounded corners for a smoother look
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/dashboard" style={linkStyle}>
            <FontAwesomeIcon icon={faTachometerAlt} style={iconStyle} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inventory" style={linkStyle}>
            <FontAwesomeIcon icon={faBox} style={iconStyle} />
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/invoice" style={linkStyle}>
            <FontAwesomeIcon icon={faFileInvoice} style={iconStyle} />
            Invoice
          </Link>
        </li>
        <li>
          <Link to="/accounting" style={linkStyle}>
            <FontAwesomeIcon icon={faMoneyBillWave} style={iconStyle} />
            Accounting
          </Link>
        </li>
        <li>
          <Link to="/users" style={linkStyle}>
            <FontAwesomeIcon icon={faUsers} style={iconStyle} />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Styling for links
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  margin: '5px 0',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover effect
  backgroundColor: 'transparent',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '18px',
  transition: 'transform 0.3s ease',
};

// Hover effect for links
const hoverStyle = {
  backgroundColor: '#16a085', // Vibrant teal background on hover
  transform: 'scale(1.05)', // Slight zoom effect
};

// Active link styling
const activeStyle = {
  backgroundColor: '#FF5733', // Bright contrasting color for active link (Orange/Coral)
  transform: 'scale(1.1)', // Slight zoom for active state
};

export default SideNav;
