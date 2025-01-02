import React, { useState } from 'react';
import './TopNav.css';

const TopNav = ({ toggleSideNav }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleSideNav();  // Sync side nav with top navbar
  };

  return (
    <div className="top-nav">
      <button className="hamburger" onClick={toggleNav}>
        ☰
      </button>
      <div className="brand">
        <h2>My Brand</h2>
      </div>
      <div className="profile">
        <button className="profile-btn">Logout</button>
      </div>
    </div>
  );
};

export default TopNav;
