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


// Here we destructure our props into their own distinct variables
function App() {
  const [section, setCurrentSection] = useState('about');

  let CurrentSection;

  if (section === 'about') CurrentSection = About;
  if (section === 'portfolio') CurrentSection = Portfolio;
  if (section === 'contact') CurrentSection = Contact;
  if (section === 'resume') CurrentSection = Resume;

  // If we are loggedIn render one set of elements, and if not we render another
  return (
		<div>
			<div className='header'>
				<Header currentSection={CurrentSection} setCurrentSection={setCurrentSection}></Header>
			</div>
			<div>
				<main><CurrentSection/></main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
