import { useState, useEffect } from 'react';
import MyProfile from './Myprofile';
import MyPay from './Mypayment';
import MyJobAppliedList from './Myappliedjobs';

function App() {
  const [active, setActive] = useState(localStorage.getItem('activeTab') || 'profile');

  useEffect(() => {
    localStorage.setItem('activeTab', active);
  }, [active]);

  const select = (x) => {
    setActive(x);
    console.log(x); 
  };

  return (
    <div id="profile" className="md:flex antialiased">
      {/* Sidebar */}
      <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
        <header className="border-b border-solid border-gray-800 flex-grow">
          <h1 className="py-6 px-4 text-gray-100 text-base font-medium">User</h1>
        </header>
        <nav className="overflow-y-auto h-full flex-grow">
          <header>
            <span className="text-xs text-gray-500 block py-6 px-6">MENU</span>
          </header>
          <ul className="font-medium px-4 text-left">
            <li className="text-gray-100">
              <button onClick={() => select('profile')} className={`rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left ${active === 'profile' ? 'bg-blue-600' : ''}`}>Profile</button>
              <button onClick={() => select('pay')} className={`rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left ${active === 'pay' ? 'bg-blue-600' : ''}`}>Pay history</button>
              <button onClick={() => select('myjobs')} className={`rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left ${active === 'myjobs' ? 'bg-blue-600' : ''}`}>Jobs</button>
              <button onClick={() => select('logout')} className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full text-red-500">Logout</button>
            </li>
          </ul>
        </nav>
        <section id="profile" className="p-4 border-t border-solid border-gray-800">
          <div className="flex">
            <img src="http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg" className="rounded-full h-10" alt="" />
            <div className="flex flex-col p-2">
              <span className="text-white pb-1">Kara Johnson</span>
              <span className="text-xs text-gray-500">HR Specialist</span>
            </div>
          </div>
        </section>
        <footer className="p-4 border-t border-solid border-gray-800">
          <h4 className="pb-2 text-gray-100 text-sm">© Good Job 2018</h4>
          <p className="text-gray-600 text-xs leading-normal">
          Making informed decisions about your career is crucial. Thats why we provide detailed company profiles and reviews.
          </p>
        </footer>
      </aside>
      {/* Main content */}
      <main className="bg-gray-100 h-screen w-full overflow-y-auto">
        {active === 'profile' && (
          <section id="profile">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">Profile</h2>
            </header>
            <MyProfile />
          </section>
        )}

        {active === 'pay' && (
          <section id="pay">
            <header className="border-b border-solid border-gray-300 bg-white">
            </header>
            <MyPay />
          </section>
        )}

        {active === 'myjobs' && (
          <section id="myjobs">
            <header className="border-b border-solid border-gray-300 bg-white">
            </header>
            <MyJobAppliedList />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
