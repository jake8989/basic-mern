import React from 'react';
import { useRouter } from 'next/router';
const index = () => {
	const router = useRouter();
	return (
		<div>
			<h1>dashboard</h1>
			<a
				onClick={() => {
					router.push('/');
					localStorage.removeItem('user');
				}}
			>
				Logout
			</a>
		</div>
	);
};

export default index;
