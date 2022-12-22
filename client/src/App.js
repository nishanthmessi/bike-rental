import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import BikeDetails from './components/BikeDetails';

import { BikeContext } from './Context/BikeContext'

function App() {
  axios.defaults.baseURL = 'http://localhost:5000/api/v1/'
  axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }

  const [bikeid, setBikeid] = useState('')

  return (
    <div>
      <BikeContext.Provider value={{bikeid, setBikeid}}>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/ride-details' element={<BikeDetails/>}/>
        </Routes>
      </BikeContext.Provider>
    </div>
  );
}

export default App;
