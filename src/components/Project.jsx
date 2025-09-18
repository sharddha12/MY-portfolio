import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React and Tailwind CSS.",
    image: "/images/portfolio.png",
    liveLink: "https://yourportfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Library Management System",
    description: "CRUD app using Node.js, Express, MongoDB, and EJS.",
    image: "/images/library.png",
    liveLink: "#",
    githubLink: "https://github.com/yourusername/library-management",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Movie App",
    description: "React app to display movies with search and filters.",
    image: "/images/movieapp.png",
    liveLink: "#",
    githubLink: "https://github.com/yourusername/movie-app",
    tech: ["React", "CSS", "API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-500 text-black px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
