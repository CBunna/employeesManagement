import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { EmployeeProvider } from './context/employeeContext';

function App() {


  return (

      <div className='mx-2'>
       <Router>
        <EmployeeProvider>
             <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>} />
        </Routes>
        </EmployeeProvider>
     
       </Router>
    </div>


  )
}

export default App
