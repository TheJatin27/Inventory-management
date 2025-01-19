import React, { useState } from 'react';
import './ViewInvoice.css';

const ViewInvoice = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: 'INV001',
      vendorName: 'Vendor A',
      receiveDate: '2025-01-10',
      paidDate: '2025-01-15',
      saleCash: 500.0,
      saleCredit: 200.0,
    },
    {
      id: 2,
      invoiceNumber: 'INV002',
      vendorName: 'Vendor B',
      receiveDate: '2025-01-12',
      paidDate: '2025-01-18',
      saleCash: 1000.0,
      saleCredit: 300.0,
    },
  ]);

  const handleUploadInvoice = (event, id) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Invoice ${id}: Uploaded file: ${file.name}`);
    }
  };

  return (
    <div className="view-invoice-container">
      <h2>View Invoices</h2>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Vendor Name</th>
            <th>Receive Date</th>
            <th>Paid Date</th>
            <th>Sale Cash</th>
            <th>Sale Credit</th>
            <th>View Invoice</th>
            <th>Upload Invoice</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.vendorName}</td>
              <td>{invoice.receiveDate}</td>
              <td>{invoice.paidDate}</td>
              <td>${invoice.saleCash.toFixed(2)}</td>
              <td>${invoice.saleCredit.toFixed(2)}</td>
              <td>
                <button
                  className="view-icon-btn"
                  onClick={() => alert(`Viewing invoice: ${invoice.invoiceNumber}`)}
                >
                  📄
                </button>
              </td>
              <td>
                <input
                  type="file"
                  accept=".pdf"
                  className="upload-input"
                  onChange={(e) => handleUploadInvoice(e, invoice.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInvoice;
