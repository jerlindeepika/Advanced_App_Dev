// JobApplications.js
import  { useState } from 'react';

const JobApplications = ({ userId, applications }) => {
  // State to manage the status of each job application
  const [statuses, setStatuses] = useState(applications.map(application => application.status));

  // Function to handle status change
  const handleStatusChange = (index, event) => {
    const newStatuses = [...statuses];
    newStatuses[index] = event.target.value;
    setStatuses(newStatuses);
  };

  return (
    <div className="mt-4 bg-white border border-gray-300 border-solid rounded shadow">
      <h3 className="p-4 text-lg font-medium">Job Applications</h3>
      <ul>
        {applications.map((application, index) => (
          <li key={application.id} className="p-4 border-b border-solid border-gray-300">
            <div>
              <span className="text-black">Job Title: {application.jobTitle}</span>
            </div>
            <div>
              <select
                className="text-gray-500"
                value={statuses[index]}
                onChange={(event) => handleStatusChange(index, event)}
              >
                <option value="Rejected">Rejected</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Selected">Selected</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplications;
