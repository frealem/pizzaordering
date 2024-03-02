import React, { useState } from 'react';
import logo from '../Images/logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='bg-[#ffc43b] min-h-full px-20 py-8'>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-12 h-12 flex items-center justify-left'>
          <img src={logo} alt="pizza" className='w-auto h-auto' />
        </div>
        <div className='flex justify-center'>
          <ul className="flex flex-row justify-between items-center space-x-4 list-none">
            <li className=''>
              <Link to="/" className={`text-black font-bold hover:text-dark-blue ${activeLink === '/' && 'text-dark-blue'}`} onClick={() => handleSetActiveLink('/')}>Home</Link>
            </li>
            <li className=''>
              <Link to="/menu" className={`text-black font-bold hover:text-dark-blue ${activeLink === '/menu' && 'text-dark-blue'}`} onClick={() => handleSetActiveLink('/menu')}>Menu</Link>
            </li>
            <li className=''>
              <Link to="/login" className={`text-black font-bold hover:text-dark-blue ${activeLink === '/login' && 'text-dark-blue'}`} onClick={() => handleSetActiveLink('/login')}>Login</Link>
            </li>
            <li className=''>
              <Link to="/register" className={`text-black font-bold hover:text-dark-blue ${activeLink === '/register' && 'text-dark-blue'}`} onClick={() => handleSetActiveLink('/register')}>Register</Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-right space-x-4'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
