'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars} from 'react-icons/fa'; // Import icons for menu

export default function MobileBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the burger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the custom dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='sm:hidden'>
      {/* Button to toggle the burger menu */}
      <button onClick={toggleMenu} className="text-2xl p-2">
       <FaBars /> {/* Toggle between icons */}
      </button>

      {/* Menu items when the menu is open */}
      {isOpen && (
        <div className="text-lg absolute top-16  right-5 w-[200px] p-4 bg-black text-white rounded-lg shadow-lg flex flex-col space-y-4">
          {/* Custom dropdown inside the menu */}
          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="w-full py-2 text-white flex justify-between items-center"
            >
             Furniture
              <span>{isDropdownOpen ? '▲' : '▼'}</span> {/* Arrow icon */}
            </button>

            {/* Dropdown menu items */}
            {isDropdownOpen && (
              <div className="  mt-2  pl-4">
                <Link className="w-full text-left p-2 block" href="#">
                  Furniture
                </Link>
                <Link className="w-full text-left p-2  block" href="#">
                  Furniture
                </Link>
                <Link className="w-full text-left p-2 block" href="#">
                  Furniture
                </Link>
              </div>
            )}
          </div>

          {/* Other links in the menu */}
          <Link href="#" className="w-full  py-2 ">
            Shop
          </Link>
          <Link href="#" className="w-full  py-2">
            About Us
          </Link>
          <Link href="#" className="w-full  py-2 ">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
