import React, { useState } from 'react';

const HomePage = () => {
    // Assuming the number of free jobs is fetched from an API or stored in state
    const [freeJobsCount, setFreeJobsCount] = useState(10); // Example value, replace with actual data

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6"></h2>
                <p className="mb-4"></p>
                <p className="mb-4"> {freeJobsCount}</p>
                {/* Add additional content as needed */}
            </div>
        </div>
    );
};

export default HomePage;
