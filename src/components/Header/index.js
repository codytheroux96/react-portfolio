import React from 'react';
import Nav from '../Nav';

function Header(props) {
	const { currentSection, setCurrentSection } = props;

	return (
		<header>
			<div>
				<h2>Welcome To Cody Theroux's React Portfolio!</h2>
			</div>
			<div>
				<Nav
					currentSection={currentSection}
					setCurrentSection={setCurrentSection}
				></Nav>
			</div>
		</header>
	);
}

export default Header;