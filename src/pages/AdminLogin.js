import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded admin credentials (for demo purposes)
    const adminCredentials = {
      email: 'admin@example.com',
      password: 'admin123',
    };

    if (email === adminCredentials.email && password === adminCredentials.password) {
      setError('');
      onLogin(); // Notify the parent component of successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="Enter admin email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="Enter admin password"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
