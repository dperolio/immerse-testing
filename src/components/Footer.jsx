import React from 'react';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<p className='footer-copyright'>
				<small>
					© {year} Immerse The Nations
				</small>
			</p>
		</footer>
	);
}
