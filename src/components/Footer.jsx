import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-inner'>
				<div className='footer-left'>
					<a href='#about'>About</a>
					<a href='#skills'>Skills</a>
					<a href='#project'>Projects</a>
					<a href='#contact'>Contact</a>
				</div>
				<div className='footer-center'>
					<h6>© Copyright Jefri Agistar</h6>
				</div>
				<div className='footer-right'>
					<a href='https://github.com/0jefri' target='_blank'>
						<GitHub className='lin' />
					</a>
					<a href='https://www.linkedin.com/in/jefri-agistar-222a12279/' target='_blank'>
						<LinkedInIcon className='lin' />
					</a>
					<a href='instagram.com' target='_blank'>
						<InstagramIcon className='insta' />
					</a>
					<a href='facebook.com' target='_blank'>
						<FacebookIcon className='fb' />
					</a>
					{/* <FacebookIcon href='facebook.com' className='fb' />
					<InstagramIcon className='insta' href='instagram.com' /> */}
					{/* <TwitterIcon className='twit' /> */}
					{/* <LinkedInIcon href='https://www.linkedin.com/in/jefri-agistar-222a12279/' className='lin' /> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
