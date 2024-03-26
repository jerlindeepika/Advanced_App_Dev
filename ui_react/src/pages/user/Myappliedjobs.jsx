import React from 'react';

function MyJobAppliedList() {
  const jobApplications = [
    { company: 'Company A', position: 'Software Engineer', status: 'Pending' },
    { company: 'Company B', position: 'Data Analyst', status: 'Rejected' },
    { company: 'Company C', position: 'Marketing Manager', status: 'Accepted' },
    { company: 'Company D', position: 'Product Designer', status: 'Pending' },
    { company: 'Company E', position: 'Financial Analyst', status: 'Accepted' },
    { company: 'Company F', position: 'HR Specialist', status: 'Rejected' },
    { company: 'Company G', position: 'Sales Executive', status: 'Accepted' },
    // Add more job applications here
  ];

  return (
    <div id="job-applied-list" className="bg-gray-100 h-screen w-full overflow-y-auto">
      <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
        <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
          My Job Applications
        </header>
        <section className="overflow-x-auto w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 py-4 border-b border-solid border-gray-300 text-left">Company</th>
                <th className="p-2 py-4 border-b border-solid border-gray-300 text-left">Position</th>
                <th className="p-2 py-4 border-b border-solid border-gray-300 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobApplications.map((application, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="p-2 py-4 border-b border-solid border-gray-300">{application.company}</td>
                  <td className="p-2 py-4 border-b border-solid border-gray-300">{application.position}</td>
                  <td className="p-2 py-4 border-b border-solid border-gray-300">{application.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
}

export default MyJobAppliedList;
