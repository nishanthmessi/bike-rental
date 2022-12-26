import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const [bikename, setBikename] = useState()
  const [prodYear, setProdYear] = useState()
  const [distance, setDistance] = useState()
  const [bikecc, setBikecc] = useState()
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [description, setDescription] = useState()
  const [imgUrl, setImgUrl] = useState()
  const [hostname, setHostname] = useState()
  const [cost, setCost] = useState()
  // Toaster
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const bikeData = {
      bikename: bikename,
      productionYear: prodYear,
      drivenKms: distance,
      bikecc: bikecc,
      latitude: latitude,
      longitude: longitude,
      description: description,
      imageUrl: imgUrl,
      username: hostname,
      price: cost
    }

    await axios.post('/bike/create', bikeData).then(() => {
      setSuccess('Your ride been hosted successfully')
      setTimeout(() => {
        setSuccess('')
        navigate('/')
      }, 3000)
    }).catch(() => {
      setError("Something went wrong")
      setError(() => {
        setError("")
      }, 5000)
    })
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-6 pb-6'>
      <h1 className="text-2xl font-medium mb-14 ">Host your ride</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Bike Name*</label>
            <input 
              type="text" 
              placeholder="eg: Ducati Panigale" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={bikename}
              onChange={(e) => setBikename(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Manufacture Year*</label>
            <input 
              type="text" 
              placeholder="eg: 2020" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={prodYear}
              onChange={(e) => setProdYear(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Drove distance* (in kms)</label>
            <input 
              type="text" 
              placeholder="eg: 100" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Bike CC*</label>
            <input 
              type="text"
              placeholder="eg: 500cc" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={bikecc}
              onChange={(e) => setBikecc(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Latitude*</label>
            <input 
              type="text" 
              placeholder="eg: 46°37'26.9" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Longitude*</label>
            <input 
              type="text" 
              placeholder="eg: 8°02'29.0" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Description*</label>
            <textarea 
              type="text" 
              placeholder="eg: anything" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Image URL*</label>
            <textarea 
              type="text" 
              placeholder="eg: https:/image.com" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Host Name*</label>
            <input 
              type="text" 
              placeholder="eg: john doe" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={hostname}
              onChange={(e) => setHostname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-6 items-start mb-8">
            <label className="text-lg font-medium">Cost* (per day)</label>
            <input 
              type="text" 
              placeholder="eg: 100" 
              className="border-2 rounded-xl py-2 px-2 w-80 border-zinc-600"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          {error && <span className="bg-red-700 text-white p-2 rounded-md text-center">{error}</span>}
          {success && <span className="bg-green-700 text-white p-2 rounded-md text-center">{success}</span>}

          <button className="w-full sm:w-60  py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white mt-6" type="submit">Host Ride</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Form