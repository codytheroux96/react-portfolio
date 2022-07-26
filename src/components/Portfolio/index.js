import React from 'react';
import PantryPrepper from '../../assets/images/Pantry-Prepper.png';
import TeamGenerator from '../../assets/images/Team-Generator.png';
import BookNook from '../../assets/images/BookNook.png';


function Portfolio() {
	return (
		<section>
			<div className="center" id="portfolio">
				<h1 className="header">My Work</h1>
			</div>

			<div class="img-card">
				<h2>BookNook</h2>
				<p>A database application that tracks and updates a digital library for users. Implemented with tools such as Nodejs, express, sequelize, dotenv, and axios.</p>
					<img src={BookNook} alt="Picture of BookNook" />
				<a href="https://dry-bastion-57106.herokuapp.com/login">
					This is a link to the live site for this application
				</a>
				<a href ="https://github.com/codytheroux96/book-nook">This is a link to the repo for this application</a>
			</div>

			<div class="img-card">
				<h2>Team Generator</h2>
				<p>This is a Node.js command line application that takes in information about employees on a software engineering team given by the user and generates an HTML webpage that displays summaries for each employee on dynamically generated cards.</p>
					<img src={TeamGenerator} alt="Picture of Team Generator" />
				<a href="https://github.com/codytheroux96/team-generator">
				This is a link to the repo for this application
				</a>
			</div>

			<div class="img-card">
				<h2>Pantry Prepper</h2>
				<p>Page that leverages sever-side APIs to display ingredient recipes and prices</p>
					<img src={PantryPrepper} alt="Picture of Pantry Prepper" />
				<a href="https://kleylakb89.github.io/pantry-prepper/">
					This is a link to the live site for this application
				</a>
				<a href ="https://github.com/codytheroux96/pantry-prepper">This is a link to the repo for this application</a>
			</div>
		</section>
	);
}

export default Portfolio;