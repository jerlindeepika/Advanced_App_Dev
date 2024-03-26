// TermsPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Terms and Conditions</h1>
      <div className="prose prose-lg">
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="font-bold">1. Introduction</h2>
          <p>
            These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at website.com.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="font-bold">2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="font-bold">3. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-8">
            <li>Publishing any Website material in any other media.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
            <li>Publicly performing and/or showing any Website material.</li>
            {/* Add more restrictions as needed */}
          </ul>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h2 className="font-bold">4. Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this Website.
          </p>
        </div>
        {/* Add more sections and content as needed */}
      </div>
      <div className="text-center">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsPage;
