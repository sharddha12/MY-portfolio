import React from 'react';
import { Link } from 'react-router-dom';
import { Code, User } from 'lucide-react';
import Skills from './Skills';
import About from './About';
import Projects from './Project';

function Home() {
  return (
    <section
      className="min-h-screen bg-[#121224] text-white py-20 px-6 lg:px-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        {/* Content */}
        <div className="home-content w-full md:w-3/5 space-y-10 mt-12 md:mt-0 animate-slide-in-left">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 font-semibold tracking-wide flex items-center gap-3 animate-pulse-slow">
            <User className="w-8 h-8 text-orange-400 animate-spin-slow" /> Hey, I'm Shraddha!
          </h3>
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl animate-fade-up">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Full-Stack Developer</span>
            <br />
            <span className="text-2xl sm:text-4xl lg:text-4xl text-transparent bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text">
              "Crafting Code, Shaping the Web"
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-1xl font-medium text-gray-200 leading-relaxed italic">
            I design and develop elegant, user-centric websites using HTML, CSS, JavaScript, and React. 
            With a strong focus on clean code and smooth user interactions, I also build fast, secure, and scalable backend APIs using Node.js and MongoDB — transforming ideas into powerful digital experiences.
          </p>

          <div className="mt-12 flex gap-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Me</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>

 <a
  href="shrddhacv.pdf"
  download="shrddhacv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-orange-400 text-white font-semibold rounded-full shadow-lg hover:bg-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
>
  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white transition-colors duration-300" />
  <span className="text-sm sm:text-base font-semibold">Download CV</span>
</a>


          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-slide-in-right">
          <div className="relative w-80 h-80 sm:w-[30rem] sm:h-[30rem] lg:w-[34rem] lg:h-[34rem] group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/30 via-blue-500/30 to-pink-500/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500 z-10"></div>
            <div className="absolute inset-2 rounded-full bg-gray-900/50 backdrop-blur-sm shadow-inner"></div>
            <img
              src="src/assets/img.jpg"
              alt="Shraddha, Frontend Developer"
              className="relative rounded-full w-full h-full object-cover shadow-3xl z-20 transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/500x500?text=Shraddha')}
            />
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange-400/50 animate-spin-slow z-0"></div>
          </div>
        </div>
      </div>
    <About/>
<Projects/>
<Skills/>
      {/* Custom CSS for Animations */}
      <style>
        {`
          @keyframes slideInLeft { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes slideInRight { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes pulseSlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
          @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-slide-in-left { animation: slideInLeft 1s ease-out; }
          .animate-slide-in-right { animation: slideInRight 1s ease-out; }
          .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spinSlow 20s linear infinite; }
        `}
      </style>
    </section>
  );
}

export default Home;
