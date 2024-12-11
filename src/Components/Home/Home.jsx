// Home.jsx
import React from "react";

const Home = ({ handleMenuItemClick }) => {
  return (
    <section
      className="flex flex-col justify-center items-center text-center py-32 bg-gradient-to-r from-teal-500 to-gray-800"
      id="home"
    >
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 mb-6 leading-tight">
        Hello, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Hassan
        </span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        A Full Stack Web Developer focused on creating user-friendly,
        high-performance websites and applications
      </p>
      <button
        onClick={() => handleMenuItemClick("about")}
        className="bg-gradient-to-br from-blue-600 via-teal-500 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      >
        Learn More About Me
      </button>
    </section>
  );
};

export default Home;
