import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      
        {/* Send Me Email Button */}
{/* Email Contact Section */}
<div className="mt-16 text-center space-y-4">
  <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-gray -800 dark:text-gray-100">
    Want to Connect with Me?
  </h3>
  <p className="text-white dark:text-gray -600 dark:text-gray-300 max-w-xl mx-auto text-base md:text-lg">
    I’m always open to discussing new projects, collaborations, or just chatting about tech and ideas. Feel free to send me an email!
  </p>

  <div className="flex justify-center">
    <a
      href="mailto:Sharadasapkota409@gmail.com"
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12H8m0 0l4-4m-4 4l4 4"
        />
      </svg>
      Send Me Email
    </a>
  </div>
</div>



        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-2xl">
          <a
            href="https://github.com/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="sharadasapkota409@example.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
      
    </section>
  );
};

export default Contact;
