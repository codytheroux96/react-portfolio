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
				<a href="">
					<img src={BookNook} alt="Picture of BookNook" />
					<p>BookNook</p>
				</a>
			</div>

			<div class="img-card">
				<a href="">
					<img src={TeamGenerator} alt="Picture of Team Generator" />
					<p>Team Generator</p>
				</a>
			</div>

			<div class="img-card">
				<a href="">
					<img src={PantryPrepper} alt="Picture of Pantry Prepper" />
					<p>Pantry Prepper</p>
				</a>
			</div>
		</section>
	);
}

export default Portfolio;