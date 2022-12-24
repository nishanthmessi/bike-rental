import damageIcon from '../windscreen.png'
import returnIcon from '../undo.png'
import licenseIcon from '../license.png'

const Policy = ({ hostname }) => {
  return (
    <div className='container mx-auto px-4 md:px-20'>
    <div className="bg-white overflow-hidden relative lg:flex lg:gap-12">
      {/* section left */}
      <div className="max-w-3xl py-12 px-6 lg:py-16 z-20">
        <div className=''>
          <h2 className="text-2xl font-medium text-black">
            <span className="block">
              RideCare
            </span>
          </h2>
          <p className="text-lg mt-4 font-normal text-gray-500">
          Our aim is to provide the best and safe ride to our customers. To improve safety and reduce road crash casualties, people need to come together as changemakers, now more than ever before. We must all strive to do our part to ensure that we receive what we deserve - safer roads and safer communities, once and for all.
          </p>
        </div>
        <div className='pt-10'>
          <h1 className='text-xl font-medium mb-3'>Hosted by {hostname}</h1>
          <p className='text-gray-500 text-lg'>As a part of our community, <span className='underline'>{hostname}</span> is a verified host and have a good customer feedback so far. Enjoy your ride!</p>
        </div>
      </div>
      {/* Section right */}
      <div className="max-w-4xl py-4 px-6 lg:py-16 z-20">
        <h2 className="text-2xl font-medium text-black">
          <span className="block">
            Things to know
          </span>
        </h2>
        <div className='flex items-center gap-8'>
          <img src={damageIcon} alt="" className='h-10 w-10 mt-3'/>
          <div>
            <h1 className="text-lg mt-4 font-medium text-gray-500">
              No damages
            </h1>
            <p className='text-md md:text-lg'>Avoid damages, else you must pay for it.</p>
          </div>
        </div>

        <div className='flex items-center gap-6 mt-3'>
          <img src={licenseIcon} alt="" className='h-12 w-12 -mt-4'/>
          <div>
            <h1 className="text-lg mt-4 font-medium text-gray-500">
              License & Proof
            </h1>
            <p className='text-md md:text-lg'>License is mandatory. Your proof's must be legit and originals must be submitted if needed.</p>
          </div>
        </div>

        <div className='flex items-center gap-8 mt-3'>
          <img src={returnIcon} alt="" className='h-10 w-10 mt-3'/>
          <div>
            <h1 className="text-lg mt-4 font-medium text-gray-500">
              Return on time
            </h1>
            <p className='text-md md:text-lg'>Please return the bike at right time and location.</p>
          </div>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Policy