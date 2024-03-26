// src/JobCard.js

import React from "react";
import PropTypes from "prop-types";

const JobCard = ({ job, onClick, logoUrl }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 cursor-pointer relative" onClick={onClick}>
      <div className="flex items-center mb-4">
        <img src={logoUrl} alt="Company Logo" className="w-8 h-8 mr-2" />
        <div>
          <h2 className="text-xl font-bold mb-1">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{job.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Apply Now
          </button>
        </div>
        <div className="text-gray-600 text-sm">
          {job.type} - {job.level}
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // Full-time, Part-time, etc.
    level: PropTypes.string.isRequired, // Senior, Junior, etc.
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export default JobCard;
