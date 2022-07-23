import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
//import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
//import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
		<div>
			<div className='Header'>
				<Header currentSection={currentSection} setcurrentSection={setCurrentSection}></Header>
			</div>
			<div>
				<main>{renderSection()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);

}

export default App;
