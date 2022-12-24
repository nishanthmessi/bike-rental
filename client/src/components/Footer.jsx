import React from 'react'

const Footer = () => {
  return (
    
    <footer class="container mx-auto  border-t-2">
      <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div className='md:px-20'>
          <h2 class="mb-6 text-lg font-bold text-gray-800 uppercase">Company</h2>
          <ul class="text-gray-800 text-md md:text-lg">
            <li class="mb-4">
              <button class="hover:underline">About</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Careers</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Brand Center</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Blog</button>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-lg font-bold text-gray-800 uppercase">Help center</h2>
          <ul class="text-gray-800 text-md md:text-lg">
            <li class="mb-4">
              <button class="hover:underline">Discord Server</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Twitter</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Facebook</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Contact Us</button>
            </li>
          </ul>
        </div>
        <div className='md:px-20'>
          <h2 class="mb-6 text-lg font-bold text-gray-800 uppercase">Legal</h2>
          <ul class="text-gray-800 text-md md:text-lg">
            <li class="mb-4">
              <button class="hover:underline">Privacy Policy</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Licensing</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Terms & Conditions</button>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-lg font-bold text-gray-800 uppercase">Download</h2>
          <ul class="text-gray-800 text-md md:text-lg">
            <li class="mb-4">
              <button class="hover:underline">iOS</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Android</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">Windows</button>
            </li>
            <li class="mb-4">
              <button class="hover:underline">MacOS</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t-2 py-8'>
        <div className='flex gap-4 text-sm px-10 md:px-0 md:text-lg justify-center'>
          <p>© 2022 Speedup,Inc.</p>
          <p className="cursor-pointer hover:underline">Privacy</p>
          <p className="cursor-pointer hover:underline">Terms</p>
          <p className="cursor-pointer hover:underline">Company details</p>
          <p className="cursor-pointer hover:underline">Destinations</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer