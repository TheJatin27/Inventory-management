import React, { useState } from 'react';
import './Users.css';

const Users = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState({
    admin: [],
    simple: [],
  });

  const handleAddUser = () => {
    const newUser = {
      id: users.admin.length + users.simple.length + 1,
      name: userName,
      email: email,
      password: password,
      isAdmin,
    };
    if (isAdmin) {
      setUsers({ ...users, admin: [...users.admin, newUser] });
    } else {
      setUsers({ ...users, simple: [...users.simple, newUser] });
    }
    // Clear input fields after adding user
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="users-container">
      <h2>Add User</h2>
      <div className="form-container">
        <div className="form-group">
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input-field"
            placeholder="Enter user name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value === 'true')}
            className="input-field"
          >
            <option value="false">Simple User</option>
            <option value="true">Admin</option>
          </select>
        </div>
        <button onClick={handleAddUser} className="add-user-btn">
          Add User
        </button>
      </div>

      {users.admin.length > 0 && (
        <div>
          <h3>Admin Users</h3>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.admin.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>Admin</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="responsive-cards">
            {users.admin.map((user) => (
              <div className="responsive-card" key={user.id}>
                <h4>Admin User</h4>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {users.simple.length > 0 && (
        <div>
          <h3>Simple Users</h3>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.simple.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>Simple User</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="responsive-cards">
            {users.simple.map((user) => (
              <div className="responsive-card" key={user.id}>
                <h4>Simple User</h4>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
