import { useState, useEffect } from 'react';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css'; 
import './Postjob.css';

function JobBoard() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    applyLink: '',
    jobType: 'Full-time',
    location: '',
    isRemote: false,
    description: '',
    company: '',
    companyWebsite: '',
    companyLogo: null
  });

  useEffect(() => {
    const simpleMde = new SimpleMDE({
      element: document.getElementById("description")
    });

    simpleMde.codemirror.on("change", () => {
      setFormData({ ...formData, description: simpleMde.value() });
    });

    return () => {
      simpleMde.toTextArea();
    };
  }, []); 

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === 'checkbox' ? checked : files ? files[0] : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-400">
      <header className="header">
        <div className="notifications">
          <div className="bg-green-400 text-white px-6 py-2">
            <p>Signed in successfully.</p>
          </div>
        </div>
        <nav className="flex items-center justify-between flex-wrap px-6" style={{ height: '65px' }}>
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-semibold text-xl tracking-tight">Job Board</span>
          </div>
          <div className="flex items-center h-full">
            <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full mr-3">
              Post Job
            </a>
            <div className="dropdown relative flex items-center h-full hover:bg-gray-500 px-2 transition">
              <button className="inline-flex items-center h-full">
                <span className="mr-1">Account</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
              <ul className="dropdown-menu absolute bg-white shadow hidden w-32">
                <li><a href="#" className="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Tina</a></li>
                <li><a href="#" className="py-1 px-4 block hover:bg-gray-200 whitespace-no-wrap">Log out</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="main bg-white px-6 md:px-16 py-6">
        <div className="w-full max-w-xl mx-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl mb-2">Post new job</h1>
            <div className="job-info border-b-2 py-2 mb-5">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="job-title">Title</label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" id="job-title" name="jobTitle" placeholder="Frontend Developer" autoFocus onChange={handleChange} value={formData.jobTitle} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2" htmlFor="apply-link">Link to apply</label>
                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" id="apply-link" name="applyLink" placeholder="https://www.djangoproject.com/apply" onChange={handleChange} value={formData.applyLink} />
              </div>
              <div className="md:flex md:justify-between">
                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                  <label className="block text-gray-700 text-sm mb-2" htmlFor="job-type">Job Type</label>
                  <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="jobType" onChange={handleChange} value={formData.jobType}>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div className="w-full md:w-8/12 mb-4 md:mb-0">
                  <label htmlFor="location" className="block text-gray-700 text-sm mb-2">Location</label>
                  <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Schwerin" onChange={handleChange} value={formData.location} />
                  <div>
                    <label className="text-gray-600 flex items-center" htmlFor="remote">
                      <input className="mr-2 leading-tight" type="checkbox" id="remote" name="isRemote" onChange={handleChange} checked={formData.isRemote} />
                      <span className="text-sm">Work can be done remotely</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700 text-sm mb-2">Description</label>
                <textarea id="description" className="description" onChange={handleChange} value={formData.description}></textarea>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label htmlFor="company" className="block text-gray-700 text-sm mb-2">Company</label>
                  <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="Company" onChange={handleChange} value={formData.company} />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label htmlFor="companyWebsite" className="block text-gray-700 text-sm mb-2">Company Website</label>
                  <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="companyWebsite" name="companyWebsite" placeholder="https://www.djangoproject.com/" onChange={handleChange} value={formData.companyWebsite} />
                </div>
              </div>
              <div className="mb-4 md:mb-0">
                <label htmlFor="company-logo" className="block text-gray-700 text-sm mb-2">Logo Image</label>
                <input type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="companyLogo" onChange={handleChange} />
              </div>
            </div>
            <div className="payment mb-6">
              <h4 className="mb-2">Payment</h4>
              <p className="bg-gray-200 py-3 text-center text-sm">
                <span><i className="far fa-credit-card"></i></span>
                All jobs cost <strong>€300</strong> for 30 days.
              </p>
            </div>
            <div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
            </div>
          </form>
        </div>
      </main>
      <footer className="footer py-4">
        <p className="text-center text-gray-600 text-xs">
          &copy;2020 Coded by Bledi Dalipaj
        </p>
      </footer>
    </div>
  );
}

export default JobBoard;

 