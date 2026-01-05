import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Project.jsx";

import Contacts from "./components/Contacts.jsx";
import InternshipExperience from "./components/internship.jsx";






// import "./App.css"; // ✅ Correct way to import CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/internship" element={<InternshipExperience />} />
      </Routes>



<Contacts />


      <Footer /> {/* This will be shown on all pages */}
    </>
  );
}

export default App;
