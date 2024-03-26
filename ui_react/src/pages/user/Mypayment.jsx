import React from 'react';

function PaymentHistory() {
  // Define payment data
  const payments = [
    { job: 'Adobe', paymentDate: '2024-03-18', amount: '$35,210.66' },
    { job: 'Bank of America', paymentDate: '2024-03-20', amount: '$11,456.84' },
    { job: 'Lamborghini Automobili', paymentDate: '2024-03-22', amount: '$35,210.66' },
    { job: 'Google London', paymentDate: '2024-03-25', amount: '$9,586.11' },
    // Add more payment entries as needed
  ];

  return (
    <section id="payment-history">
      <header className="border-b border-solid border-gray-300 bg-white">
        <h2 className="p-6">Payment History</h2>
      </header>
      <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
        <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
          Payment History Overview
        </header>
        <section className="overflow-x-auto w-full">
          <table className="w-full" border="0">
            <thead>
              <tr>
                <th className="p-8 py-4 border-b border-solid border-gray-300 text-left">Job</th>
                <th className="p-2 py-4 border-b border-solid border-gray-300 text-left">Payment Date</th>
                <th className="p-2 py-4 border-b border-solid border-gray-300 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td className="p-2 py-4 border-b border-solid border-gray-300 text-left">
                    <div className="pl-4 flex flex-wrap flex-row items-center">
                      <div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex flex-row justify-center items-center text-white">{payment.job.charAt(0)}</div>
                      <div className="text-gray-700">{payment.job}</div>
                    </div>
                  </td>
                  <td className="p-2 py-4 border-b border-solid border-gray-300 text-left">{payment.paymentDate}</td>
                  <td className="p-2 py-4 border-b border-solid border-gray-300 text-right text-gray-700">{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
}

export default PaymentHistory;
