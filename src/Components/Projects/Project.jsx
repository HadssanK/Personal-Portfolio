import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Contentgenrator from '../../assets/Contentgenrator.png'
import Innercompany from '../../assets/Innercompany.png'
import Hotal_M from '../../assets/Hotal_M.png'
import gemini from '../../assets/gemini.png'
import thumbnailDnlod from '../../assets/thumbnailDnlod.png'
import todo from '../../assets/todo.png'
import passgen from '../../assets/passgen.png'

export default function Projects() {
  const projects = [
    {
      title: "AI Content Generator",
      description: "Generate SEO optimized content automatically using Gemini API for blogs, websites, and more.",
      image: Contentgenrator,
      github: "#",
      demo: "https://lms-frontend-e0sw.onrender.com",
       tech: ["React", "Tailwind" , "gemini"],
    },
    {
      title: "RequestDesk",
      description: "A platform where employees can submit network issues, office problems, or any requests directly to the admin for quick resolution",
      image:Innercompany,
      github: "#",
      demo: "https://comptrack-frontend.onrender.com",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Hotal Management System",
      description: "Software to manage hotel bookings, guests, rooms, and billing efficiently.",
      image: Hotal_M,
      github: "#",
      demo: "#",
      tech: ["React", "redux", "Tailwind"],
    },
      {
      title: "gemini clone",
      description: "A React-based clone of Google Gemini AI, featuring real-time chat interface, API integration, and intelligent response generation using node js backends",
      image: gemini,
      github: "#",
      demo: "#",
      tech: ["React", "express", "Tailwind"],
    },
      {
      title: "Thumbnail Downloader",
      description: "A sleek and responsive React.js app that fetches and downloads video thumbnails using public APIs. Just paste a YouTube URL and get high-quality thumbnails in seconds — fast, clean, and user-friendly!",
      image: thumbnailDnlod,
      github: "#",
      demo: "#",
      tech: ["React","Tailwind"],
    },
      {
      title: "Redux-powered TODO App",
      description: "A fast, user-friendly TODO app built with React, Redux Toolkit, and styled with Tailwind CSS for smooth task management.",
      image: todo,
      github: "#",
      demo: "#",
      tech: ["React"," Redux Toolkit","Tailwind"],
    },
      {
      title: "Password generator",
      description: "A simple and secure React app that generates strong, customizable passwords instantly to keep your accounts safe.",
      image: passgen,
      github: "#",
      demo: "#",
      tech: ["React"," Redux Toolkit","Tailwind"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <h1 className="text-4xl text-white font-bold text-center mb-10">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 w-full max-w-sm mx-auto 
            hover:scale-105 hover:border-indigo-400 hover:shadow-indigo-500/40"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-white mb-2">{proj.title}</h2>
              <p className="text-gray-300 mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="bg-white/20 text-white px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
              
                <a href={proj.demo} target="_blank" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
