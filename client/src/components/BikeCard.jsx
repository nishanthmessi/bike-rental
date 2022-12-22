import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import { BikeContext } from "../Context/BikeContext"

const BikeCard = () => {
  const [bikesData, setBikesData] = useState([])
  const { setBikeid } = useContext(BikeContext)
 
  useEffect(() => {
    const getBikes = async () => {
      const res = await axios.get('/bikes')
      setBikesData(res.data.data)
    }
    getBikes()
  }, [])

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-8 py-12'>
        {bikesData.map((bike, i) => (
          <Link to='/ride-details' key={i} className='cursor-pointer mb-6' onClick={() => setBikeid(bike._id) }>
            <div className='h-96 w-96 md:h-[24rem] md:w-[22.5rem]'>
              <img src={bike.imageUrl} className='h-96 w-96 rounded-xl object-cover'/> 
            </div>
            <div className='flex justify-between items-center mt-3 text-xl'>
              <h3 className='font-bold'>{bike.bikename}</h3>
              <p className="font-medium">{bike.bikecc}</p>
            </div>
            <p className='text-lg font-bold'>Rs.{bike.price}<span className='font-normal'>/per day</span> </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BikeCard