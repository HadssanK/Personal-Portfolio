// Navbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.png"; // Ensure the path is correct

const Navbar = ({ handleMenuItemClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Event listener for scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-transparent text-white fixed left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "shadow-lg py-5 top-0 rounded-sm bg-gradient-to-r from-teal-400 to-gray-800"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer flex items-center space-x-2">
          <img src={Logo} alt="My Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Navbar Links (Hidden on mobile by default) */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            onClick={() => handleMenuItemClick("home")}
            className="text-lg cursor-pointer px-4 py-2 rounded-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleMenuItemClick("about")}
            className="text-lg cursor-pointer px-4 py-2 rounded-lg"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => handleMenuItemClick("skills")}
            className="text-lg cursor-pointer px-4 py-2 rounded-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleMenuItemClick("projects")}
            className="text-lg cursor-pointer px-4 py-2 rounded-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleMenuItemClick("contact")}
            className="text-lg cursor-pointer px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links (Visible when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4 flex flex-col items-center">
          <a
            href="#home"
            onClick={() => handleMenuItemClick("home")}
            className="text-lg cursor-pointer w-full py-3 text-center rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleMenuItemClick("about")}
            className="text-lg cursor-pointer w-full py-3 text-center rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => handleMenuItemClick("skills")}
            className="text-lg cursor-pointer w-full py-3 text-center rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleMenuItemClick("projects")}
            className="text-lg cursor-pointer w-full py-3 text-center rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleMenuItemClick("contact")}
            className="text-lg cursor-pointer w-full py-3 text-center rounded-lg hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
