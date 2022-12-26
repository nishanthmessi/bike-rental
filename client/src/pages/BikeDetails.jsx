import { useState, useEffect, useContext } from "react"
import { BikeContext } from "../Context/BikeContext"
import axios from "axios"
import Loading from '../components/Loading'
import Spinner from "../components/Spinner"
import MapGeo from "../components/MapGeo"
import Policy from "../components/Policy"
import Footer from "../components/Footer"

const BikeDetails = () => {
  const [bikeDetails, setBikeDetails] = useState()
  const [hostName, setHostName] = useState()

  const { bikeid } = useContext(BikeContext)

  useEffect(() => {
    const getBike = async () => {
      const res = await axios.get(`/bike/${bikeid}`)
      setBikeDetails(res.data.data)
      setHostName(res.data.data.username)
    }
    getBike()
  }, [bikeid])

  return (
    <div className='pt-14 sm:pt-24'>
    {
      !bikeDetails ? 
        <Spinner />  
      : 
      <div className="container mx-auto"> 
        <div className="bg-white overflow-hidden relative lg:flex lg:items-center">
          <div className="flex items-center gap-8 p-8 lg:pl-20">
            <img src={bikeDetails.imageUrl} className="w-[1200px] h-[500px] rounded-lg object-cover" alt="Tree"/>
          </div>
          <div className="w-full py-12 px-6 lg:py-16 lg:pr-16 z-20">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">
                {bikeDetails.bikename}
              </span>
            </h2>
            <p className="text-lg mt-4 font-medium text-gray-500">
              {bikeDetails.description}
            </p>
            <p className="text-xl font-semibold mt-5">Hosted by {bikeDetails.username}</p>
            <div className="py-6">
              <p className="text-xl mt-2 font-medium text-gray-600">Manufactured in <span className="font-bold text-gray-800">{bikeDetails.productionYear}</span></p>
              <p className="text-xl font-medium mt-6 text-gray-600">Total CC: <span className="font-bold text-gray-800">{bikeDetails.bikecc}</span></p>
              <p className="text-xl font-medium mt-6 text-gray-600">Total kilometer Driven: <span className="font-bold text-gray-800">{bikeDetails.drivenKms}kms</span></p>
              <p className="text-xl font-bold mt-6">₹{bikeDetails.price}<span className="font-normal">/day</span></p>
            </div>

            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-0 sm:mt-6 inline-flex rounded-md shadow w-full sm:w-36">
                <button type="button" className="py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:scale-110 rounded-lg ">
                  Book Ride
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Component */}
        <div className="flex flex-col justify-center items-center mt-10 overflow-hidden">
          <div className="overflow-hidden">
            <h1 className="text-2xl font-medium mb-6 text-center">Where you can find your ride</h1>
            <MapGeo bikeDetails={bikeDetails}/>
          </div>
          <p className="text-center text-lg font-medium py-4">Note: Exact location will be provided after booking</p>
        </div>

        <Policy hostname={hostName}/>
        <Footer/>
      </div>     
    } 
    </div>
  )
}

export default BikeDetails