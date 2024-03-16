import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register'
import HomePage from './pages/auth/Home';
import WebLayout from './layouts/Weblayout';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<WebLayout/>}>
        <Route path='/Home' element={<HomePage/>} />
      </Route>
      <Route>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
