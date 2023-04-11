import React from 'react';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

// import Link from 'next/link';
// import Link from 'next/link';
// import { Link } from 'react-router-dom';
// import Router from 'next/router';
import { useRouter } from 'next/router';
const Nav = () => {
	const router = useRouter();
	return (
		<header style={{ display: 'flex', width: '100vw' }}>
			<div>GoalSetterApp</div>
			<div style={{ display: 'flex', width: '100vw' }}>
				<ul style={{ display: 'flex', width: '100vw' }}>
					<li style={{ margin: '2rem' }}>
						<p
							onClick={() => {
								router.push('/login');
							}}
						>
							<FaSignInAlt /> Login
						</p>
					</li>
					<li style={{ margin: '2rem' }}>
						<p
							onClick={() => {
								router.push('/signup');
							}}
						>
							<FaUser /> register
						</p>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
