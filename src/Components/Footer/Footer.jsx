import React from 'react';
import HassanCV from '../../assets/newCv.pdf'; // Import the CV file if needed

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p className="mb-4">Connect with me on</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/HadssanK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-khan-a47b67251/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-4">&copy; 2024 Hassan. All rights reserved.</p>

      {/* Right Side: Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href={HassanCV} // Corrected path to your PDF file in the public directory
          download="Hassan_CV.pdf" // Optional: sets the default filename when downloading
          className="bg-gradient-to-r from-slate-500 to-stone-700 text-white px-6 py-2 rounded-xl text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          Download CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
