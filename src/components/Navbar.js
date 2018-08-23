import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="#skills" className="link">Skills</a> 
        <a href="#projects" className="link">Projects</a>
        <a href={require("../cv/resume.pdf")} className="link" download>Resume</a>
        <a href="#contact" className="link">Contact!</a>
      </div>
    </div>
  );
};

export default Navbar;
