import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-blue-900 text-white px-4 sm:px-6 lg:px-8 py-4 shadow-xl sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          <Link to="/" className="hover:text-blue-300 transition-colors duration-300">
            Shraddha's Portfolio
          </Link>
        </h1>

        {/* Desktop Menu - Centered Links */}
        <div className="hidden md:flex flex-1 items-center gap-8 text-lg font-medium">
          <div className="flex flex-1 justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative hover:text-blue-300 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons on Right */}
          <div className="flex items-center gap-5  ml-auto">
            <a
              href="https://github.com/sharddha12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-1xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shraddhasapkota/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 text-1xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl ml-auto focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center gap-4 py-6 text-lg font-medium bg-blue-800 transition-all duration-300 ease-in-out mt-2`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-blue-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Social Icons in Mobile Menu */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
