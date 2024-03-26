import  { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
const Home = lazy (()=> import('./pages/shared/Home'));
const Feature = lazy (() => import('./pages/shared/Feature'));
import WebLayout from './layouts/Weblayouts';
import Loader from './public/Loader';
import Error from './pages/shared/Error';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Form from './pages/shared/Form';
import Login2 from './pages/auth/Login2';
import Faq from './pages/shared/Faq';
import Postjob from './pages/admin/Postjob';
import Dashboard from './pages/admin/Dashboard';
import Build from './build/Build';
import Privacy from './pages/shared/Privacy';
import TermsPage from './pages/shared/Terms';
import AboutUs from './pages/shared/About';
import PricingPanel from './pages/shared/Pricing';
import UserDash from './pages/user/Userdash';
import Card from './build/Card';
import Homes from './pages/shared/Homes';

const AppRoutes = () => {
  return (
   <BrowserRouter>
    <Suspense fallback={<Loader />}>

    <Routes>
      <Route element={<WebLayout />}>
        <Route exact path='/' element={<Home />} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/Loader' element={<Loader />} />
        <Route path='/Homes' element={<Homes />} />
      <Route path='/Pricing' element={<PricingPanel/>}/>
      </Route>

      <Route>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      </Route>

      <Route>
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/Postjob' element={<Postjob />} />
      <Route path='/Faq' element={<Faq />} />
      <Route path='/Login2' element={<Login2/>}/>
      <Route path='/Build' element={<Build/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Terms' element={<TermsPage/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Userdash' element={<UserDash/>}/>
      <Route path='/Card' element={<Card/>}/>

      </Route>

      <Route path='*' element={<Error />} />
    </Routes>

    </Suspense> 
   </BrowserRouter>
  );
};

export default AppRoutes;

