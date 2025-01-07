import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Tom Brown', email: 'tom@example.com' },
    { id: 4, name: 'Mary Johnson', email: 'mary@example.com' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Admins</h3>
          <p>50</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>200</p>
        </div>
      </div>

      <div className="dashboard-table">
        <h2>User Information</h2>
        {/* Regular Table for Larger Screens */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.id}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Responsive Card Layout for Smaller Screens */}
        <div className="responsive-cards">
          {userData.map((user, index) => (
            <div key={user.id} className="responsive-card">
              <p>
                <strong>Serial No.:</strong> {index + 1}
              </p>
              <p>
                <strong>User Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>User ID:</strong> {user.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
