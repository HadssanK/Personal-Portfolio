import React from "react";

const Projects = () => {
  // Projects data directly inside the component
  const projects = [
    {
      title: "Recipe Finder",
      description:
        "A recipe finder application built with React, allowing users to search and discover various recipes with detailed ingredients and instructions.",
      image: "https://via.placeholder.com/400x250.png", // Replace with actual image
      githubLink: "https://github.com/HadssanK/recipFinder.git"
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app built with React and OpenWeatherMap API, providing users with accurate weather data based on their location.",
      image: "https://via.placeholder.com/400x250.png", // Replace with actual image
      githubLink: "https://github.com/YourGitHub/weather-app"
    },
    {
      title: "Task Manager",
      description:
        "A task management app with features like to-do lists, task categorization, and deadlines, built with JavaScript and local storage.",
      image: "https://via.placeholder.com/400x250.png", // Replace with actual image
      githubLink: "https://github.com/YourGitHub/task-manager"
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using HTML, CSS, and JavaScript to showcase my web development projects and skills.",
      image: "https://via.placeholder.com/400x250.png", // Replace with actual image
      githubLink: "https://github.com/YourGitHub/portfolio"
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
            className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
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
