// UserList.js
import { useState } from 'react';
import JobApplications from './Jobapplications'; 

const users = [
    { 
      id: 1, 
      name: 'Kara Johnson', 
      role: 'HR Specialist', 
      premium: true, 
      contactNumber: '123-456-7890', 
      email: 'kara@example.com', 
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIMA5q-wOA7Xegu1rx-BSdG5tmNLYIuCNvjMJ1JFHAc13zxlj2Fb0mB6MA7vGWAXrWZA&usqp=CAU',
      applications: [
        { id: 1, jobTitle: 'Software Engineer', status: 'Selected' },
        { id: 2, jobTitle: 'Data Analyst', status: 'Rejected' }
      ],
      paymentHistory: [
        { date: '2023-01-15', amount: 100 },
        { date: '2023-02-15', amount: 150 },
        { date: '2023-03-15', amount: 200 },
        // Add more payment history data as needed
      ]
    },
    { 
      id: 2, 
      name: 'John Doe', 
      role: 'Manager', 
      premium: false, 
      contactNumber: '987-654-3210', 
      email: 'john@example.com', 
      profilePic: 'https://cdn.pixabay.com/photo/2022/05/17/15/41/silhouette-7203023_640.jpg',
      applications: [
        { id: 3, jobTitle: 'Sales Manager', status: 'Shortlisted' }
      ],
      paymentHistory: [
        { date: '2023-02-20', amount: 120 },
        { date: '2023-03-20', amount: 180 },
        // Add more payment history data as needed
      ]
    },
    { 
        id: 2, 
        name: 'John Doe', 
        role: 'Manager', 
        premium: false, 
        contactNumber: '987-654-3210', 
        email: 'john@example.com', 
        profilePic: 'https://cdn.pixabay.com/photo/2022/05/17/15/41/silhouette-7203023_640.jpg',
        applications: [
          { id: 3, jobTitle: 'Sales Manager', status: 'Shortlisted' }
        ],
        paymentHistory: [
          { date: '2023-02-20', amount: 120 },
          { date: '2023-03-20', amount: 180 },
          // Add more payment history data as needed
        ]
      },
      { 
        id: 2, 
        name: 'John Doe', 
        role: 'Manager', 
        premium: false, 
        contactNumber: '987-654-3210', 
        email: 'john@example.com', 
        profilePic: 'https://cdn.pixabay.com/photo/2022/05/17/15/41/silhouette-7203023_640.jpg',
        applications: [
          { id: 3, jobTitle: 'Sales Manager', status: 'Shortlisted' }
        ],
        paymentHistory: [
          { date: '2023-02-20', amount: 120 },
          { date: '2023-03-20', amount: 180 },
          // Add more payment history data as needed
        ]
      },
    {
      id: 3,
      name: 'Alice Smith',
      role: 'Developer',
      premium: false,
      contactNumber: '555-123-4567',
      email: 'alice@example.com',
      profilePic: 'https://example.com/alice.jpg',
      applications: [],
      paymentHistory: [
        { date: '2023-03-01', amount: 80 },
        { date: '2023-04-01', amount: 100 },
        // Add more payment history data as needed
      ]
    },
    // Add more users with payment history similarly
    // ...
  ];
  

const UserList = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const deleteUser = (userId, event) => {
    // Prevent the event from propagating further
    event.stopPropagation();
    // Implement delete functionality here
    console.log(`Deleting user with ID: ${userId}`);
  };

  const showJobApplications = (userId) => {
    setSelectedUserId(userId);
    // Scroll to the Job Applications section
    const jobApplicationsSection = document.getElementById('job-applications-section');
    jobApplicationsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="user-list" className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
      <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
        All Users
      </header>
      <ul>
        {users.map(user => (
          <li key={user.id} className="p-4 border-b border-solid border-gray-300" onClick={() => showJobApplications(user.id)}>
            <div className="flex justify-between items-center">
              <div className="flex">
                <img src={user.profilePic} className="rounded-full h-10 w-10 mr-4 object-cover object-center" alt="" />
                <div className="flex flex-col">
                  <div>
                    <span className="text-black pb-1">{user.name}</span>
                    <span className="text-xs text-gray-500 ml-2">({user.role})</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <span>Contact: {user.contactNumber}</span>
                    <span className="ml-2">Email: {user.email}</span>
                  </div>
                </div>
              </div>
              <div>
                {user.premium ? (
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mr-2">Premium</span>
                ) : (
                  <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded-full mr-2">Normal</span>
                )}
                {user.applications && user.applications.length > 0 ? (
                  // If user has applied for jobs, display the job application status
                  <span className="text-xs">{user.applications.length} jobs applied</span>
                ) : (
                  // If user has not applied for any jobs, display "No jobs applied"
                  <span className="text-xs">No jobs applied</span>
                )}
                <button onClick={(event) => deleteUser(user.id, event)} className="text-red-500 ml-2">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedUserId && (
        <div id="job-applications-section">
          <JobApplications userId={selectedUserId} applications={users.find(user => user.id === selectedUserId).applications} />
          
        </div>
      )}
    </section>
  );
};

export default UserList;
