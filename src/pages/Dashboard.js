import React from 'react';
import './Dashboard.css'; // Ensure this is linked

const Dashboard = () => {
  const adminData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const userData = [
    { id: 1, name: 'User One', email: 'user1@example.com' },
    { id: 2, name: 'User Two', email: 'user2@example.com' },
    { id: 3, name: 'User Three', email: 'user3@example.com' },
    { id: 4, name: 'User Four', email: 'user4@example.com' },
  ];

  return (
    <div className="dashboard-container">
      <div className="cards-container">
        <div className="card">
          <h3>Total Admins</h3>
          <p>{adminData.length}</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{userData.length}</p>
        </div>
      </div>
      
      <div className="table-container">
        <h3>User Information</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
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
