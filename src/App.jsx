import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import codingAnimation from "./assets/about.json"; // Ensure this file exists
import HassanCV from "./assets/Hassan.pdf"; // Path relative to your component
import ContactForm from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skill";
import Projects from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (id) => {
    setIsMenuOpen(false); // Close the mobile menu
    const element = document.getElementById(id); // Get the section by ID
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the section
      });
    }
  };

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowScrollTop(true);
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="">
        {/* Navbar */}
        <Navbar handleMenuItemClick={handleMenuItemClick} />
        <Home handleMenuItemClick={handleMenuItemClick} />
        <About />
        <Skills/>
      <Projects/>

      <ContactForm/>

        {/* Scroll-to-Top Arrow */}
        {showScrollTop && (
          <div
            className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:rotate-12"
            onClick={scrollToTop}
            title="Scroll to Top"
          >
            <svg
              className="w-6 h-6 transform transition-all duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V6m0 0l-5 5m5-5l5 5"></path>
            </svg>
          </div>
        )}

      <Footer/>
      </div>
    </>
  );
}

export default App;
