const PaymentDetailsCard = ({ job, onClose }) => {
    // Assume payment details are fetched from somewhere
    const paymentDetails = {
      amount: 1000, // Example amount
      paymentMethod: "Credit Card", // Example payment method
      deadline: "2024-04-01", // Example payment deadline
    };
  
    const handleJoin = () => {
      // Navigate to the card page when Join button is clicked
      window.location.href = '/card';
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg p-6">
          <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h2 className="text-xl font-bold mb-2">{job.title} Payment Details</h2>
          <p className="text-gray-600 mb-2">Amount: ${paymentDetails.amount}</p>
          <p className="text-gray-600 mb-2">Payment Method: {paymentDetails.paymentMethod}</p>
          <p className="text-gray-600 mb-2">Deadline: {paymentDetails.deadline}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleJoin} // Call handleJoin function when Join button is clicked
          >
            Join
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default PaymentDetailsCard;
  