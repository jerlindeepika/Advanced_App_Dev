import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function MyProfile({ accountType }) {
  const [email, setEmail] = useState('kara@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');

  const handleSaveEmail = () => {
    setEmail(editedEmail);
    setIsEditingEmail(false);
  };

  const handleSavePhone = () => {
    setPhone(editedPhone);
    setIsEditingPhone(false);
  };

  return (
    <div id="my-profile" className="bg-gray-100 h-screen w-full overflow-y-auto">
      <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
        <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
          My Profile
        </header>
        <section className="p-4">
          <div className="flex items-center mb-4">
          <img 
          src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg" 
          className="rounded-full h-16 w-16 mr-4 object-cover" 
          alt="Profile" 
                />
            <div>
              <h2 className="text-xl font-medium">Kara Johnson</h2>
              <p className="text-gray-500">HR Specialist</p>
            </div>
          </div>
          <div className="border-b border-solid border-gray-300 pb-4">
            <h3 className="text-lg font-medium mb-2">Contact Information</h3>
            {isEditingEmail ? (
              <>
                <input
                  type="text"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                <button onClick={handleSaveEmail} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
              </>
            ) : (
              <>
                <p className="text-gray-500">Email: {email} <button onClick={() => setIsEditingEmail(true)} className="text-blue-500 hover:underline">Edit</button></p>
              </>
            )}
            {isEditingPhone ? (
              <>
                <input
                  type="text"
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                <button onClick={handleSavePhone} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
              </>
            ) : (
              <>
                <p className="text-gray-500">Phone: {phone} <button onClick={() => setIsEditingPhone(true)} className="text-blue-500 hover:underline">Edit</button></p>
              </>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Account Type</h3>
            <p className="text-gray-500">
              {accountType === 'premium' ? (
                <>
                  <span className="text-green-500">Premium Account</span>
                  <span> - Special features:</span>
                  <ul className="list-disc list-inside text-gray-500">
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>Exclusive content</li>
                  </ul>
                </>
              ) : (
                <>
                  Normal Account - <Link to="/pricing" className="text-blue-500 hover:underline">Upgrade to Premium</Link> for additional features.
                </>
              )}
            </p>
          </div>
          {/* Additional Data */}
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Additional Information</h3>
            <p className="text-gray-500">Location: New York, USA</p>
            <p className="text-gray-500">Joined: January 1, 2022</p>
            {/* Add more additional information as needed */}
          </div>
        </section>
      </section>
    </div>
  );
}

export default MyProfile;
