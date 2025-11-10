import React, { useState } from "react";
export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  return (
  <header className="navbar">
    <div className="nav-inner">
      <a className="logo" href="#home">&lt;DEBA&gt;</a>
      <nav className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Primary">
        <a aria-label="home" href="#home" onClick={()=> setIsOpen(!isOpen)} >Home</a>
        <a aria-label="about" href="#about" onClick={()=> setIsOpen(!isOpen)} >About</a>
        <a aria-label="tech stack" href="#tech" onClick={()=> setIsOpen(!isOpen)} >Skills</a>
        <a aria-label="projects" href="#projects" onClick={()=> setIsOpen(!isOpen)} >Projects</a>
        <a aria-label="achievements" href="#achievements" onClick={()=> setIsOpen(!isOpen)} >Achievements</a>
        <a aria-label="contact" href="#contact" onClick={()=> setIsOpen(!isOpen)} >Contact</a>
        <a aria-label="resume" href={import.meta.env.BASE_URL + "deba-resume.pdf"} target="_blank" onClick={()=> setIsOpen(!isOpen)} >Resume</a>
      </nav>
      <div className="cta">
        <button aria-label="nav-links-bar" className="menu-toggle" onClick={()=> setIsOpen(!isOpen)}><i className="fa-solid fa-bars"></i></button>
        <a className="hire" href="#footer" aria-label="Here me button">Hire Me</a>
      </div>
    </div>
    <div className="nav-gold-line">
      <div className="gold-runner"></div>
    </div>
  </header>
  );
}
