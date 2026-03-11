import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/MillionaireBoy.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  top-0 left-0 bg-white shadow-md   z-50 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8  py-[10px]  flex justify-between items-center whitespace-nowrap">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-11 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-12 lg:space-x-14 text-gray-700 text-base md:text-lg lg:text-xl font-[font1]">
          {["Projects", "Experience", "Skills", "About Me", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-[26px] max-[450px]:text-[30px] cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiOutlineX className="text-gray-600" />
          ) : (
            <HiOutlineMenu className="text-gray-600" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[100px] left-0 w-full h-[calc(110vh-80px)] bg-white z-50
        flex flex-col transition-all duration-800
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="space-y-8 text-2xl font-[font1] text-gray-600 text-center mt-[20%]">
          {["Projects", "Experience", "Skills", "About Me", "Contact"].map(
            (item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;