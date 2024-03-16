import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">My Job Portal</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/home" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/jobs" className="hover:text-gray-300">Jobs</Link>
                        </li>
                        <li>
                            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
