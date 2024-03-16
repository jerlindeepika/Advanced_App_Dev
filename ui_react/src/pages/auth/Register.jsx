import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-up logic here
        console.log('Username:', name);
        console.log('Password:', password);
        console.log('confirm password:',password);
        console.log('Email:', email);
        console.log('Role:',role);
        
    };

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> UserName</label>
                        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />

                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">confirm Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />

                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email </label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role </label>
                        <input type="role" id="role" name="role" value={role} onChange={handleRoleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>



                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                </form>
                <div className="mt-6">
                    <p className="text-gray-600">Already have an account? <a href="/" className="text-blue-500 font-bold hover:underline">Sign In</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
