import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('UserName:', email);
        console.log('Password:', password);

        // Redirect to home page upon successful sign-in
        // Replace '/home' with the appropriate path to your home page
        // This assumes you have set up your routes properly using React Router
        // Also ensure you have proper routing setup in your application
        // For example, you can use useHistory() hook instead if you are using functional components with hooks.
        window.location.href = "/Home"; 
    };

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">UserName</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Use Link component to navigate to home page */}
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign In</button>
                        <Link to="/register" className="text-blue-500 font-semibold hover:underline">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
