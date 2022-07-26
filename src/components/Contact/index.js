import React, { useState } from "react";
import { validateEmail } from '../../utils/helper';


function Contact() {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;
	function handleChange(e) {
		if (e.target.name === 'email') {
			const isVaild = validateEmail(e.target.value);
			if (!isVaild) {
				setErrorMessage('please enter a valid email address');
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value })
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<section className="container">
			<h2 className="top-title">Contact Form</h2>
			<hr />
			<from class="justify-content-center">
				<div class="mt-5">
					<label>Name:</label>
					<input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
				</div>
				<div class="mt-5">
					<label>Email:</label>
					<input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
				</div>
				<div class="mt-5">
					<label>Message:</label>
					<input class="form-control" type="message" name="message" defaultValue={message} onBlur={handleChange} />
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<div class="mt-5 mb-5">
					<button data-testid='button' class="btn btn-primary" type="submit" onSubmit={handleSubmit}>Submit</button>
				</div>


			</from>
		</section>
	);
}

export default Contact;