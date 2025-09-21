import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "../assets/profile.jpg";

const timeline = [
  {
    icon: GraduationCap,
    title: "BIM, Tribhuvan University",
    date: "2019 - 2024",
    desc: "Completed Bachelor's in Information Management from Balkumari College.",
  },
  {
    icon: Briefcase,
    title: "Frontend Intern - Aakar Academy",
    date: "2023",
    desc: "Worked on building UI components using React and Tailwind CSS.",
  },
  {
    icon: Briefcase,
    title: "Full Stack Intern - SquareLabs",
    date: "2025",
    desc: "Focused on building APIs using Node.js and MongoDB.",
  },
  {
    icon: Briefcase,
    title: "Graphic Designer - Digital yeti",
    date: "2024",
    desc: "Worked on designing UI components using Figma.",
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#121224]  text-white px-4 py-20" id="about">
  {/* 🟣 Main Section Heading */}
  <h2 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-600 text-center mb-24">
    About Me
  </h2>

  {/* 3-Column Grid */}
  <div className="w-full px-8 md:px-10 lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
    
    {/* 🟣 Left Column - Photo */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <img
        src={profileImage}
        alt="Shraddha Sapkota"
        className="w-full h-full object-cover transition-transform duration-500"
      />
    </motion.div>

    {/* 🟣 Middle Column - About Box (without heading) */}
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl min-h-[650px] h-full flex flex-col justify-between"
>
  {/* Location */}
  <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
    <MapPin className="w-4 h-4" />
    <span>Chitwan, Nepal</span>
  </div>

  {/* About Content */}
  <div className="space-y-7 text-[23px] leading-relaxed text-gray-300">
  <p className="mt-0">
    I'm{" "}
    <span className="text-purple-400 font-bold text-2xl tracking-wide">
      Shraddha Sapkota
    </span>
    , a dedicated MERN Stack Developer passionate about building full-stack web applications. I blend creativity with clean code, aiming to create beautiful and functional interfaces that enhance user experiences.
  </p>

  <p>
    With a solid foundation in{" "}
    <span className="text-cyan-300 font-medium">HTML</span>,{" "}
    <span className="text-cyan-300 font-medium">CSS</span>,{" "}
    <span className="text-cyan-300 font-medium">JavaScript</span>, and{" "}
    <span className="text-cyan-300 font-medium">React</span>, I specialize in crafting dynamic user interfaces that are both modern and responsive.
  </p>

  <p>
    I'm currently exploring{" "}
    <span className="text-pink-400 font-medium">cloud computing</span> and{" "}
    <span className="text-purple-300 font-medium">AI integration</span> to further expand my development skills and keep up with emerging tech trends.
  </p>
</div>


  {/* Buttons */}
  <div className="flex gap-4 pt-6 flex-wrap">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition"
    >
      <Download className="w-5 h-5" />
      Download CV
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition"
    >
      <Mail className="w-5 h-5" />
      Contact Me
    </motion.button>
  </div>
</motion.div>

    {/* 🟣 Right Column - Timeline */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      {/* Timeline Heading - Clean One Line */}
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-6">
        Education and Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative before:absolute before:left-3 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-purple-500 to-cyan-500 space-y-10 pl-4">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline Dot with Icon */}
            <div className="absolute left-[-1px] top-1">
              <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Timeline Content */}
            <h4 className="text-2xl font-semibold text-purple-300 mb-1">{item.title}</h4>
            <span className="text-base text-gray-400 block mb-2">{item.date}</span>
            <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
  );
};  

export default About