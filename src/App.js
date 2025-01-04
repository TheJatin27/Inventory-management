import React, { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Inventory from './pages/Inventory'; // Import Inventory page
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <Router>
      <div className={`app-container ${isSideNavOpen ? 'side-nav-open' : ''}`}>
        {/* Top Navbar */}
        <TopNav toggleSideNav={toggleSideNav} />

        {/* Sidebar */}
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />

        {/* Main Content */}
        <div className={`main-content ${isSideNavOpen ? 'main-content-expanded' : ''}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} /> {/* Inventory Page Route */}
            <Route path="/users" element={<Users />} />

            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
