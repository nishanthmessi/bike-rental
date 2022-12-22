import BikeCard from '../components/BikeCard'

const Hero = () => {
  return (
    <>
    <div className='bg-hero bg-cover bg-gray-400 bg-blend-multiply'>
      <div className='flex flex-col justify-center items-center gap-3 h-[60vh] text-white '> 
        <h1 className='font-bold text-6xl italic'>Ghost Riders</h1>
        <p className='text-xl font-medium'>Get your ride anywhere at anytime</p>
      </div>
    </div>
    <BikeCard/>
    </>
  )
}

export default Hero