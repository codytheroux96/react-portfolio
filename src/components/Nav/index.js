import React from 'react';

// function Nav (props) {
// 	const { currentSection, setCurrentSection } = props;

// 	return (
// 		<nav>
// 			<ul className='flex-row mobile-view'>
// 				<li className={currentSection === 'about' ? 'mx-2 navActive' : 'mx-2'}>
// 					<span onClick={() => setCurrentSection('about')}>About Me</span>
// 				</li>
// 				<li className={currentSection === 'portfolio' ? 'mx-2 navActive' : 'mx-2'}>
// 					<span onClick={() => setCurrentSection('portfolio')}>My Portfolio</span>
// 				</li>
// 				<li className={currentSection === 'resume' ? 'mx-2 navActive' : 'mx-2'}>
// 					<span onClick={() => setCurrentSection('resume')}>My Resume</span>
// 				</li>
// 				<li className={currentSection === 'contact' ? 'mx-2 navActive' : 'mx-2'}>
// 					<span onClick={() => setCurrentSection('contact')}>Contact Me</span>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }
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