import React from "react";

const SkillBox = ({ title, skills }) => (
  <div className="bg-[#1e1e2f] rounded-lg p-6 shadow-md w-full max-w-2xl mx-auto">
    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-5 text-white">{title}</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 justify-items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-[#2b2b3c] hover:bg-[#3c3c4e] px-4 py-3 rounded-md transition-all duration-300 text-white text-sm"
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-14 h-14 sm:w-16 sm:h-16 mb-2 object-contain"
          />
          <span className="text-center text-xs sm:text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontend = [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "SASS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  ];

  const backend = [
    { name: "Node JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ];

  const languages = [
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ];

  const tools = [
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <section className="bg-[#121224] text-white py-20 px-6 space-y-14" id="skills">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">Skills</h2>
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        <SkillBox title="Frontend" skills={frontend} />
        <SkillBox title="Backend" skills={backend} />
        <SkillBox title="Languages" skills={languages} />
        <SkillBox title="Tools" skills={tools} />
      </div>
    </section>
  );
};

export default Skills;  