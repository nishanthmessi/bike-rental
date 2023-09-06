import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import BikeDetails from './pages/BikeDetails'
import Form from './pages/Form'

import { BikeContext } from './Context/BikeContext'

function App() {
  axios.defaults.baseURL = 'https://itchy-dog-polo-shirt.cyclic.app/api/v1'
  axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  const [bikeid, setBikeid] = useState('')

  return (
    <div>
      <BikeContext.Provider value={{ bikeid, setBikeid }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/ride-details' element={<BikeDetails />} />
          <Route path='/host-bike' element={<Form />} />
        </Routes>
      </BikeContext.Provider>
    </div>
  )
}

export default App
