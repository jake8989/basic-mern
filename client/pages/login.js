import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useRouter } from 'next/router';
const signup = () => {
	const router = useRouter();

	useEffect(() => {
		const star = localStorage.getItem('user');
		if (star) {
			router.push('/dashboard');
		}
	});

	let [email, setEmail] = React.useState('');
	let [password, setPassword] = React.useState('');

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const onSubHand = (e) => {
		e.preventDefault();
		console.log(email, password);
		fetch('http://localhost:8000/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => {
				console.log(email, password);
				alert('logged in succesfully');
				if (email && password)
					localStorage.setItem('user', JSON.stringify({ email, password }));
				if (email && password) router.push('/dashboard');
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
				</div>
				<button type="submit" onClick={onSubHand}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default signup;
