import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavSlider from './NavSlider';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/img/motocross.png'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className='w-full fixed z-50 bg-white'>
        <nav className="relative container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to='/' className='flex gap-3'>
            <img src={Logo} alt="logo" className='h-9'/>
            <div  className='font-bold text-2xl' onClick={() => setNavMobile(false)}>Fasten</div>
          </Link>

          <div className="hidden space-x-10 md:flex font-bold text-[17px]">
            <Link to='/host-bike' className="p-4 hover:text-zinc-600 duration-200 cursor-pointer">
              Host your ride
            </Link>
            <Link to='/about' className="p-4 hover:text-zinc-600 duration-200 cursor-pointer">
              About
            </Link>
            <Link to="/contact" className="p-4 hover:text-zinc-600 duration-200 cursor-pointer">
              Contact
            </Link>
          </div>
          <button
            id="menu-btn"
            className={`block btn btn-square pl-2.5 md:hidden focus:outline-none`}
            onClick={() => setNavMobile(!navMobile)}
          >
            {!navMobile ? <MenuAlt3Icon className='h-7'/> : <XIcon className='h-7'/> }
          </button> 

          <div
            className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
              isActive
                ? 'top-[80px] lg:top-[110px]'
                : 'top-[68px] lg:top-[150px]'
            } fixed left-0 z-10 w-full h-full bg-white transition-all duration-300`}
          >
            <NavSlider setNavMobile={setNavMobile}/>
          </div>
        </div>    
        </nav>
    </div>
  )
}

export default Navbar