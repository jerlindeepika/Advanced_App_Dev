import  { useState } from "react";
import jobsData from "./JobData";
import JobCard from "./JobCard";
import PaymentDetailsCard from './Payment'; // Create PaymentDetailsCard component

const JobListingPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false); // State to control visibility of payment details card

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowPaymentDetails(false); // Hide payment details card when selecting a new job
  };

  const handleApplyNowClick = () => {
    setShowPaymentDetails(true); // Show payment details card when "Apply Now" button is clicked
  };

  return (
    <div className="container mx-auto py-8 pl-4 pr-8 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
        <div className="grid gap-6 lg:grid-cols-3 w-full max-w-screen-lg">
          {jobsData.map((job, index) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => handleJobClick(job)}
              logoUrl={`/company-logo-${index}.png`}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/4">
        {selectedJob && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-gray-600 mb-2">{selectedJob.company}</p>
            <p className="text-gray-800 mb-2">{selectedJob.description}</p>
            <div className="flex items-center">
              <button
                onClick={handleApplyNowClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Apply Now
              </button>
              <span className="text-gray-600 text-sm">
                {selectedJob.type} - {selectedJob.level}
              </span>
            </div>
          </div>
        )}
      </div>
      {showPaymentDetails && selectedJob && (
        <PaymentDetailsCard job={selectedJob} onClose={() => setShowPaymentDetails(false)} />
      )}
    </div>
  );
};

export default JobListingPage;
