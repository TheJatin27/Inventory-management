import React from 'react';

// Dummy data for users
const users = [
  { serialNo: 1, userId: 'U1001', userName: 'John Doe', email: 'john@example.com' },
  { serialNo: 2, userId: 'U1002', userName: 'Jane Smith', email: 'jane@example.com' },
  { serialNo: 3, userId: 'U1003', userName: 'Alice Johnson', email: 'alice@example.com' },
  { serialNo: 4, userId: 'U1004', userName: 'Bob Brown', email: 'bob@example.com' },
  { serialNo: 5, userId: 'U1005', userName: 'Charlie Davis', email: 'charlie@example.com' },
];

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Dashboard</h2>
      <div style={statsContainerStyle}>
        {/* Total Admins Card */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Total Admins</h3>
          <p style={cardValueStyle}>12</p>
        </div>

        {/* Total Users Card */}
        <div style={cardStyle}>
          <h3 style={cardTitleStyle}>Total Users</h3>
          <p style={cardValueStyle}>50</p>
        </div>
      </div>

      {/* Users Table */}
      <div style={tableContainerStyle}>
        <h3 style={tableTitleStyle}>Users Information</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.serialNo}>
                <td>{user.serialNo}</td>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles for the Dashboard
const dashboardStyle = {
  padding: '20px',
  background: 'linear-gradient(135deg, #E1E9F2, #F5F9FF)', // Soft gradient background for modern look
  minHeight: '100vh',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#1F5061',
  marginBottom: '20px',
};

const statsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '40px',
};

const cardStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  width: '45%',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const cardTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1F5061',
};

const cardValueStyle = {
  fontSize: '36px',
  fontWeight: '600',
  color: '#FF5733', // Vibrant accent color for emphasis
};

const tableContainerStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const tableTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1F5061',
  marginBottom: '20px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const tableHeadStyle = {
  backgroundColor: '#1F5061',
  color: 'white',
  textAlign: 'left',
  padding: '10px 15px',
};

const tableBodyStyle = {
  textAlign: 'left',
  padding: '10px 15px',
  borderBottom: '1px solid #ddd',
};

// Hover effect for cards
const hoverCardStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
};

export default Dashboard;
