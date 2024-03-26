// PaymentHistory.js
import { useState } from 'react';

const PaymentHistory = () => {
  // Sample payment history data
  const paymentHistory = [
    { id: 1, userId: 1, jobId: 101, amount: 100, date: '2024-03-15', transactionPlatform: 'Net Banking' },
    { id: 2, userId: 2, jobId: 102, amount: 150, date: '2024-03-16', transactionPlatform: 'Paytm' },
    { id: 3, userId: 3, jobId: 103, amount: 200, date: '2024-03-17', transactionPlatform: 'UPI' },
  ];

  // Sample job data
  const jobData = {
    101: { id: 101, name: 'Software Engineer' },
    102: { id: 102, name: 'Data Analyst' },
    103: { id: 103, name: 'Marketing Specialist' },
  };

  const [selectedUserId, setSelectedUserId] = useState(null);

  const showUserPaymentHistory = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <section id="payment-history" className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
      <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
        Payment History
      </header>
      <ul>
        {paymentHistory.map(payment => (
          <li key={payment.id} className="p-4 border-b border-solid border-gray-300" onClick={() => showUserPaymentHistory(payment.userId)}>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="flex flex-col">
                  <div>
                    <span className="text-black pb-1">Payment ID: {payment.id}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <span>User ID: {payment.userId}</span>
                    <span className="ml-2">Amount: ${payment.amount}</span>
                    <span className="ml-2">Job: {jobData[payment.jobId].name}</span>
                    <span className="ml-2">Platform: {payment.transactionPlatform}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-500">Date: {payment.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedUserId && (
        <div id="user-payment-history-section">
          {/* Render additional payment details for the selected user if needed */}
          {/* You can add more details here or navigate to another page */}
        </div>
      )}
    </section>
  );
};

export default PaymentHistory;
