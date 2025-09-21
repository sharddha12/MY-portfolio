import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">Shraddha Sapkota</h3>
          <p className="text-sm text-gray-400">© {currentYear} All rights reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
          <a
            href="https://github.com/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sharddha12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shrddhasapkota409@gmail.com"
            aria-label="Email"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
