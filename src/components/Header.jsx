import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
	return (
		<>
			<div className='heading'>
				<p>Hi.</p>
				<h1>
					My name is Jefri Agistar.
					<br /> Web Developer.
				</h1>
				<a href='#about' className='btn-about'>
					About me <ArrowForwardIcon className='forward' />
				</a>
			</div>
		</>
	);
};

export default Header;
