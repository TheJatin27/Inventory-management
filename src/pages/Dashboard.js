import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <h3>Total Admins</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
      </div>

      <div className="user-table">
        <h3>User Information</h3>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
