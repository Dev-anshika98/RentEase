
import React from 'react';
import Cart from '../assets/cart2.png';
import Profile from '../assets/profile.png';
import Logo from '../assets/logo1.jpg';

const Navbar = () => {
  return (
    <nav className="bg-[#56B0CA] text-white py-3">
      <div className="container m-auto flex  justify-between items-center  mt-0 mb-0">
         <a href="/" className=""><img className=' h-14 w-36' src={Logo} alt="Logo" /></a>
        {/* Left section */}
        <div className="space-x-6"> 
       
          <a href="/" className="text-lg font-semibold text-black hover:underline ">Home</a>
          <div className="relative inline-block group">
            <span className="cursor-pointer text-lg font-semibold text-black hover:underline">Categories</span>
            <div className="absolute left-0 hidden mt-2 space-y-2 group-hover:block bg-white text-black p-2 shadow-md">
              {/* List of categories */}
              <a href="/category/electronics" className="block">Electronics</a>
              <a href="/category/clothing" className="block">Clothing</a>
              {/* Add more categories */}
            </div>
          </div>
          <a href="/contact" className="text-lg font-semibold text-black hover:underline">Contact</a>
          <a href="/about" className="text-lg font-semibold text-black hover:underline">About</a>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-8">
          <div className="relative">
            <input type="text" placeholder="Search products" className="px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
              </svg>
            </button>
          </div>
        
          <a href="/cart" className="text-lg font-semibold"><img classname="w-4 h-4" src={Cart} alt="cart" /></a>
          <a href="/profile" className="text-lg font-semibold"><img classname="w-4 h-4 mr-3" src={Profile} alt="profile" /></a>
       
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
