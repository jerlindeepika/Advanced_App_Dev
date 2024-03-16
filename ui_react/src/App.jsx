import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
