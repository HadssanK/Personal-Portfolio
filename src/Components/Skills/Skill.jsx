import React from "react";

const Skills = () => {
  // Skills data directly inside the component
  const skills = [
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5.png"
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript.png"
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
      name: "PHP",
      icon: "https://img.icons8.com/color/48/000000/php.png"
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql.png"
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/48/000000/react-native.png"
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
      name: "Express",
      icon: "https://img.icons8.com/color/48/000000/express.png"
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png"
    }
  ];

  return (
    <section
      className="py-16 bg-gradient-to-r from-indigo-200 to-yellow-100"
      id="skills"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Map through the skills data and display them */}
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4"
            />
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
