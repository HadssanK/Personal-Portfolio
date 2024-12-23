import React from "react";
import todo from "../../assets/todo.png"
import tumb from "../../assets/tumb.png"
import Passgen from "../../assets/passgen.png"
import gemini from "../../assets/gemini.png"
import Hotal from "../../assets/Hotal_M.png"
const Projects = () => {
  // Projects data directly inside the component
  const projects = [
    {
      title: "Todo with LocalStorage",
      description:
        "A recipe finder application built with React, allowing users to search and discover various recipes with detailed ingredients and instructions.",
      image: todo, // Replace with actual image
     
    },
    {
      title: "Thumbnail downloader",
      description:
      "This is a sleek tool for downloading YouTube thumbnails quickly and easily",
        image: tumb, // Replace with actual image

    },
    {
      title: "Password Generator",
      description:
      "A React-based tool to generate secure and customizable passwords",
      image: Passgen, // Replace with actual image
      githubLink: "https://github.com/HadssanK/Password-Generator.git"
    },
    {
      title: "Gemini Clone",
      description:  "A React-based clone of the Gemini app, replicating its core features and user interface for practice and learning purposes.",
      image: gemini, // Replace with actual image
      githubLink: "https://github.com/YourGitHub/portfolio"
    },
    {
      title: "Hotal Management System",
      description: "Developed a React.js-based admin dashboard for managing hotel operations efficiently",
      image: Hotal, // Replace with actual image
      githubLink: "https://hadssank.github.io/Mangement-system/"
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="projects">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
  {/* Map through the projects and display them */}
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col"
    >
      {/* Project Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover" // Set fixed height for image
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p> {/* Allow content to grow and avoid card shrinkage */}
      <div className="flex justify-between items-center">
        <a
          href={project.githubLink}
          className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-6 py-2 rounded-lg hover:bg-gradient-to-l hover:from-teal-500 hover:to-teal-700 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      {/* Gradient Line Below Project */}
      <div className="w-full h-1 mt-6 bg-gradient-to-r from-teal-500 to-gray-800"></div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Projects;
