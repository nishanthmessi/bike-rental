import BikeCard from '../components/BikeCard'

const Hero = () => {
  return (
    <>
    <div className='bg-hero bg-cover bg-gray-400 bg-blend-multiply'>
      <div className='flex flex-col justify-center items-center gap-3 h-[60vh] text-white '> 
        <h1 className='font-bold text-6xl italic'>We Ride till we die</h1>
        <p className='text-2xl font-medium mb-8'>Get your ride anywhere at anytime</p>
        <p className='font-mono font-bold'>Great Service. Trusted by 1000+</p>
      </div>
    </div>
    <BikeCard/>
    </>
  )
}

export default Hero