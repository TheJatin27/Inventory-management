import React, { useState, useRef, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ReportPage.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Register components globally
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ReportPage = () => {
  const [filterType, setFilterType] = useState("productId");
  const [filterValue, setFilterValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const inventoryChartRef = useRef(null);
  const salesChartRef = useRef(null);
  const profitLossChartRef = useRef(null);

  // Dummy data for demonstration
  const inventoryData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        data: [300, 200, 150],
        backgroundColor: ["#1E88E5", "#43A047", "#FB8C00"],
        hoverBackgroundColor: ["#1565C0", "#2E7D32", "#EF6C00"],
      },
    ],
  };

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [500, 700, 800, 600, 900],
        backgroundColor: "#1E88E5",
        borderColor: "#1565C0",
        borderWidth: 1,
      },
    ],
  };

  const profitLossData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Profit/Loss",
        data: [200, -100, 300, -50, 400],
        backgroundColor: ["#43A047", "#E53935", "#43A047", "#E53935", "#43A047"],
        borderColor: ["#2E7D32", "#D32F2F", "#2E7D32", "#D32F2F", "#2E7D32"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    // Clean up chart instances when component unmounts
    return () => {
      if (inventoryChartRef.current) inventoryChartRef.current.destroy();
      if (salesChartRef.current) salesChartRef.current.destroy();
      if (profitLossChartRef.current) profitLossChartRef.current.destroy();
    };
  }, []);

  return (
    <div className="report-page-container">
      <h1 className="page-title">Reports</h1>

      {/* Filters Section */}
      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="filterType">Filter By:</label>
          <select
            id="filterType"
            value={filterType}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="productId">Product ID</option>
            <option value="productName">Product Name</option>
            <option value="location">Location</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="filterValue">Enter Filter Value:</label>
          <input
            type="text"
            id="filterValue"
            value={filterValue}
            onChange={handleFilterValueChange}
            className="filter-input"
            placeholder="Enter value"
          />
        </div>

        <div className="filter-group">
          <label>Date Range:</label>
          <div className="date-range">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="date-picker"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End Date"
              className="date-picker"
            />
          </div>
        </div>
      </div>

      {/* Graphical Reports Section */}
      <div className="charts-container">
        <div className="chart-section">
          <h2>Inventory Distribution</h2>
          <div className="chart-container">
            <Pie ref={inventoryChartRef} data={inventoryData} options={options} />
          </div>
        </div>

        <div className="chart-section">
          <h2>Sales Overview</h2>
          <div className="chart-container">
            <Bar ref={salesChartRef} data={salesData} options={options} />
          </div>
        </div>

        <div className="chart-section">
          <h2>Profit/Loss Analysis</h2>
          <div className="chart-container">
            <Bar ref={profitLossChartRef} data={profitLossData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
