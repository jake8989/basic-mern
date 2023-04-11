import React from 'react';
import { useState, useEffect } from 'react';
const signup = () => {
	let [name, setName] = React.useState('');
	let [email, setEmail] = React.useState('');
	let [password, setPassword] = React.useState('');
	let [cpassword, setcPassword] = React.useState('');

	const onNameChange = (e) => {
		setName(e.target.value);
	};
	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const onSubHand = (e) => {
		e.preventDefault();
		console.log(name, email, password);
		fetch('http://localhost:8000/api/users', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => {
				console.log(name, email, password);
				alert('user created succesfully');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const { name, email, password } = formData;
	return (
		<div>
			<h1>register here</h1>
			<form action="" method="POST">
				<div>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={name}
						onChange={onNameChange}
					/>
					<input
						type="text"
						name="email"
						placeholder="email"
						value={email}
						onChange={onEmailChange}
					/>
					<input
						type="text"
						name="password"
						placeholder="password"
						value={password}
						onChange={onPasswordChange}
					/>
					<input
						type="text"
						name="cpassword"
						placeholder="confirm password"
						value={cpassword}
					/>
				</div>
				<button type="submit" onClick={onSubHand}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default signup;
