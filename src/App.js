import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Invoice from './pages/Invoice';
import Accounting from './pages/Accounting';
import Users from './pages/Users';
import TopNav from './components/TopNav';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Top Navigation Bar */}
        <TopNav />

        <div style={{ display: 'flex', marginTop: '60px' }}>
          {/* Side Navigation Bar */}
          <SideNav />
          
          <div
            style={{
              marginLeft: '250px',
              padding: '20px',
              flex: 1,
              transition: 'margin-left 0.3s',
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/accounting" element={<Accounting />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
