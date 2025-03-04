import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const handleScroll = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="flex justify-center md:justify-between items-center py-4 px-1 lg:px-10 bg-black text-white fixed top-0 w-[97%] lg:w-full z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-center size-4 lg:size-12">
        <img src={Logo} alt="Logo" className="w-full" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-0 lg:space-x-8 text-xs lg:text-lg">
        {menuItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleScroll(item)}
              className="relative px-1 lg:px-5 py-1 lg:py-2 transition duration-300"
            >
              {active === item && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className={active === item ? "text-black" : "text-white hover:text-gray-400"}>
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Hire Me Button */}
      <button
        className="border text-white border-white px-2 lg:px-6 py-1 lg:py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out text-xs lg:text-lg"
      >
        HIRE ME
      </button>
    </nav>
  );
};

export default Navbar;
