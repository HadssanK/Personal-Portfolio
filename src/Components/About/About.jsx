// About.jsx
import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/about.json"; // Ensure the path to the animation file is correct

const About = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-indigo-200 to-yellow-100"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side: Lottie Animation */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Lottie
              animationData={codingAnimation}
              loop={true}
              className="w-full max-w-[400px] mx-auto"
            />
          </div>

          {/* Right Side: Description */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-4">
              I’m Hassan, a Full Stack Web Developer who enjoys creating great
              websites and apps. I focus on building websites that are easy to
              use and work well on all devices.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              I know a lot about web technologies and turn ideas into websites
              that look good and perform well. I make sure every project is not
              just attractive, but also fast and easy to scale.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              I believe in always learning and keeping up with new trends to
              get the best results. Working with clients and understanding their
              needs is important to me in creating the right solutions.
            </p>
            <p className="text-lg text-gray-600">
              From planning to designing and coding to launching, I take care
              of every part of the project. Whether it's a small website or a
              big application, I am focused on delivering high-quality work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
