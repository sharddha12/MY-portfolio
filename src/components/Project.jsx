import React from "react";

const projects = [
  {
    title: "Kunduleschool website",
    description: "kunduleschool website built using React and Tailwind CSS and backend using Node.js.",
    image: "/public/kundule.png",
    
    githubLink: "https://github.com/yourusername/portfolio",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Library Management System",
    description: "CRUD app using Node.js, Express, MongoDB, and EJS.",
    image: "/public/Librarymanagement.png",
    
    githubLink: "https://github.com/yourusername/library-management",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Movie App",
    description: "React app to display movies with search and filters.",
    image: "/public/movie.png",
    

    githubLink: "https://github.com/yourusername/movie-app",
    tech: ["React", "CSS", "API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-18 bg-gray-900 text-white pt-500">
  
  <div className="max-w-7xl mx-auto px-9">
  <h2 className="text-6xl font-bold mb-12 text-center">My Projects</h2>

  <div className="grid gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:scale-105 transform transition duration-300 min-h-[420px]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-7">
          <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
          <p className="text-base text-gray-300 mb-">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-yellow-500 text-black px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
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
