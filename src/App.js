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
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'contact':
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
