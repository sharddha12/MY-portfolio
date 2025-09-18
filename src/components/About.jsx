import React from "react";

const About = () => {
  return (
    <section
      className="w-full md:w-full min-h-screen bg-[#121224] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-20"
      id="about"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        
        {/* 1. Left Column - Photo */}
        <div className="flex justify-center md:justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[3/4] overflow-hidden rounded-3xl shadow-xl mx-auto transition-transform duration-500 hover:scale-105 group">
  <img
    src="src/assets/shrddha.jpg"
    alt="Shraddha Sapkota"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-full backdrop-blur-md bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Shraddha Sapkota
  </div>
</div>



        </div>

        {/* 2. Middle Column - About Us */}
        <div className="text-white px-6 md:px-10 lg:px-12 py-10 space-y-8 transform transition-all duration-500 hover:-translate-y-3 border-none outline-none">
  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-500 dark:from-pink-300 dark:to-green-300 tracking-tighter leading-none text-center">
    About Us
  </h2>
  <div className="p-10 space-y-6 border-none outline-none bg-[#121224] rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-normal tracking-normal text-white max-w-3xl text-center">
      Hello! I’m <span className="text-white font-semibold">Shraddha Sapkota</span>, a dedicated MERN Stack Developer passionate about crafting innovative, user-centric web applications. My focus is on transforming creative ideas into reality using clean, scalable code, ensuring a balance of aesthetics and performance. Currently, I’m advancing my expertise in <span className="font-semibold text-white">backend development</span>, always eager to embrace cutting-edge technologies and tackle new challenges.
    </p>
    <div className="flex justify-center">
      <button className="bg-green-500 text-white font-semibold px-9 py-6 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;