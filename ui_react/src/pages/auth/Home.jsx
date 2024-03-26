import React, { useState } from 'react';


const HomePage = () => {
    // Assuming the number of free jobs is fetched from an API or stored in state
    const [freeJobsCount, setFreeJobsCount] = useState(10); // Example value, replace with actual data


    

    return (
        <div className="bg-gray-100 min-h-screen flex justify-start items-start p-6">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md py-3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Postings List</h2>

                {/* Free Category Button */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4">
                    Free Category
                </button>

                {/* Premium Category Button */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                    Premium Category
                </button>

                {/* Individual Job Postings */}
                <div className="job-postings">
                    {/* Individual Job Posting 1 */}
                    <div className="job-posting mb-6">
                        <h3 className="text-lg font-semibold mb-2">Job Title: Marketing Manager</h3>
                        <p><strong>Job ID:</strong>1</p>
                        <p><strong>Department:</strong> Marketing</p>
                        <p><strong>Location:</strong> Chennai</p>
                        <p><strong>Responsibility:</strong> Analyze information to identify new markets</p>
                        <p><strong>Qualification:</strong> 2 years experience in the marketing field</p>
                        <p><strong>Category:</strong> Free</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Apply
                            </button>
                        </div>
                    </div>



                     {/* Free Category Button */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 mr-4">
                    Free Category
                </button>

                {/* Premium Category Button */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                    Premium Category
                </button>

                    {/* Individual Job Posting 2 */}
                    <div className="job-posting mb-6">
                        <h3 className="text-lg font-semibold mb-2">Job Title: Software Engineer</h3>
                        <p><strong>Job ID:</strong>2</p>
                        <p><strong>Department:</strong> IT</p>
                        <p><strong>Location:</strong> Mumbai</p>
                        <p><strong>Responsibility:</strong> Team Lead</p>
                        <p><strong>Qualification:</strong> 3 years experience</p>
                        <p><strong>Category:</strong> Free</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Apply
                            </button>
                        </div>
                    </div>
                    {/* Add more job postings as needed */}
                </div>
                {/* End of Job Postings */}

                {/* Add additional content as needed */}

            </div>
        </div>
    );
};

export default HomePage;
