import React from 'react';

function Nav({ setCurrentSection }) {
  return (
    <div>
      <a href="#about" onClick={() => setCurrentSection('about')}>About</a>
      <a href="#portfolio" onClick={() => setCurrentSection('portfolio')}>Portfolio</a>
      <a href="#resume" onClick={() => setCurrentSection('resume')}>Resume</a>
      <a href="#contact" onClick={() => setCurrentSection('contact')}>Contact</a>
    </div>
  )
}

export default Nav;