import React from "react";

import kundule from "../assets/kundule.jpg";
import library from "../assets/Library.jpg";
import hillside from "../assets/HillSide.jpg";
import pihuluxe from "../assets/pihuluxe.jpg";

const projects = [
  {
    title: "Kunduleschool Website",
    description:
      "School website built using React and Tailwind CSS with backend in Node.js.",
    image: kundule,
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/sharddha12/MY-portfolio",
  },

  {
    title: "Library Management System",
    description:
      "CRUD app using Node.js, Express, MongoDB and EJS templating engine.",
    image: library,
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/sharddha12/library_management_system",
  },

  {
  title: "Hillside Website",
  description:
    "Academic journal website with clean layout, article sections, and responsive design.",
  image: hillside,
  tech: ["React", "Tailwind CSS", "JavaScript"],
  github: "#",
}
  , 

 {
  title: "Pihuluxe Website",
  description:
    "Cosmetic e-commerce website with product listings, cart features, and modern UI.",
  image: pihuluxe,
  tech: ["React", "Tailwind CSS", "JavaScript"],
  github: "#",
}

];

function Projects() {
  return (
    <section className="py-16 px-6 lg:px-14 bg-[#0f1120]" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        My Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#16182c] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-white">
                {proj.title}
              </h3>

              <p className="text-gray-300 text-sm">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
