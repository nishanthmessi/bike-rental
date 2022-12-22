import { useState, useEffect, useContext } from "react"
import { BikeContext } from "../Context/BikeContext"
import axios from "axios"
import Loading from '../components/Loading'

const BikeDetails = () => {
  const [bikeDetails, setBikeDetails] = useState()
  const { bikeid } = useContext(BikeContext)

  useEffect(() => {
    const getBike = async () => {
      const res = await axios.get(`/bike/${bikeid}`)
      setBikeDetails(res.data.data)
    }
    getBike()
  }, [])

  console.log(bikeDetails)

  return (
    <div className='pt-24'>
    {!bikeDetails ? <Loading /> : 
    
    <div className="flex flex-col">
      <p>{bikeDetails.bikename}</p>
      <p>{bikeDetails.description}</p>
      <p>{bikeDetails.bikecc}</p>
      <p>{bikeDetails.price}</p>
    </div>
  }
  </div>
  )
}

export default BikeDetails