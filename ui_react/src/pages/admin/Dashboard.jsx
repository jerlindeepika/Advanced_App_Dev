import { useState, } from 'react';
import Userlist from './Userlist';
import PaymentHistory from './Paymenthistory';
import PostJob from './Postjob';

function App() {
  const [active, setActive] = useState('user');

  const select = (x) => {
    setActive(x);
    console.log(x); 
  };
  
  return (
    <div id="app" className="md:flex antialiased">
      {/* Sidebar */}
      <aside className="w-full md:h-screen md:w-64 bg-gray-900 md:flex md:flex-col">
        <header className="border-b border-solid border-gray-800 flex-grow">
          <h1 className="py-6 px-4 text-gray-100 text-base font-medium">Admin</h1>
        </header>
        <nav className="overflow-y-auto h-full flex-grow">
          <header>
            <span className="text-xs text-gray-500 block py-6 px-6">MENU</span>
          </header>
          <ul className="font-medium px-4 text-left">
            <li className="text-gray-100">
              <button onClick={() => select('user')} className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">Users</button>
              <button onClick={() => select('payment')} className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">Payments</button>
              <button onClick={() => select('post')} className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">Post New Job</button>

            </li>
          </ul>
        </nav>
        <section id="user" className="p-4 border-t border-solid border-gray-800">
          <div className="flex">
            <img src="http://preview.janlosert.com/static/media/a07.f7e8bebd.jpg" className="rounded-full h-10" alt="" />
            <div className="flex flex-col p-2">
              <span className="text-white pb-1">Kara Johnson</span>
              <span className="text-xs text-gray-500">HR Specialist</span>
            </div>
          </div>
        </section>
        <footer className="p-4 border-t border-solid border-gray-800">
          <h4 className="pb-2 text-gray-100 text-sm">© JobHire 2024</h4>
          <p className="text-gray-600 text-xs leading-normal">
          Our platform features a vast array of job listings from top companies across various industries.</p>
        </footer>
      </aside>
      {/* Main content */}
      <main className="bg-gray-100 h-screen w-full overflow-y-auto">
       

        {active === 'new' && (
          <section id="new">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">New</h2>
            </header>
          </section>
        )}

        {active === 'user' && (
          <section id="user">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">New</h2>
            </header>
            <Userlist />
          </section>
        )}
      
        {active === 'payment' && (
          <section id="payment">
            <header className="border-b border-solid border-gray-300 bg-white">
              <h2 className="p-6">New</h2>
            </header>
            <PaymentHistory/>
          </section>
        )}

        {active === 'post' && (
          <section id="post">
            <header className="border-b border-solid border-gray-300 bg-white">
            </header>
            <PostJob/>
          </section>
        )}
        
        
      </main>
    </div>
  );
}

export default App;