import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#1F3A6D', // Same color as sidebar
        color: 'white',
        position:'fixed',
        width:'97%',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>BrandName</div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '10px', fontSize: '20px' }} />
        <span style={{ marginRight: '20px' }}>Profile</span>
        <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '20px', cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default TopNav;
