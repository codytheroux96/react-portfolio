import React from 'react';

function Nav (props) {
	const { currentSection, setCurrentSection } = props;

	return (
		<nav>
			<ul className='flex-row mobile-view'>
				<li className={currentSection === 'About' ? 'mx-2 navActive' : 'mx-2'}>
					<span onClick={() => setCurrentSection('About')}>About Me</span>
				</li>
				<li className={currentSection === 'Portfolio' ? 'mx-2 navActive' : 'mx-2'}>
					<span onClick={() => setCurrentSection('Portfolio')}>Portfolio</span>
				</li>
				<li className={currentSection === 'Resume' ? 'mx-2 navActive' : 'mx-2'}>
					<span onClick={() => setCurrentSection('Resume')}>Resume</span>
				</li>
				<li className={currentSection === 'Contact' ? 'mx-2 navActive' : 'mx-2'}>
					<span onClick={() => setCurrentSection('Contact')}>Contact</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;