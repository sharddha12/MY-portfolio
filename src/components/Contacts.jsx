import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#0a0f1e] to-[#1f2a4d] text-white"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          I’m always open to discussing new projects, collaborations, or just chatting about tech and ideas. Feel free to send me an email!
        </p>

        {/* Email Button */}
        <a
          href="mailto:Sharadasapkota409@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 font-semibold text-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaEnvelope className="text-white text-xl" />
          Send Me Email
        </a>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-2xl">
          <a
            href="https://github.com/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:Sharadasapkota409@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
