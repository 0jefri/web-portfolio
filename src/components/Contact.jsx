import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
// import SimpleMap from './SimpleMap';

const Contact = () => {
	return (
		<>
			<div className='main-c' id='contact'>
				<span></span>
				<h1>Contact Me</h1>
				<div className='contact'>
					<div className='contact-main'>
						<div className='contact-main-inner'>
							<LocationOnIcon className='ico' />
							<div className='me'>
								<h4>FIND ME</h4>
								<h3>Jl.Gandaria kobet. Sukatani. Rajeg. Tangerang. Banten.</h3>
							</div>
						</div>
						<div className='contact-main-inner'>
							<MailIcon className='ico' />
							<div className='me'>
								<h4>Email</h4>
								<h3>Jefri4876@gmail.com</h3>
							</div>
						</div>
						<div className='contact-main-inner'>
							<CallIcon className='ico' />
							<div className='me'>
								<h4>Whatsapp</h4>
								<h3>082288007705</h3>
							</div>
						</div>
					</div>
					{/* <div className='contact-side'>
						<SimpleMap className='maps' />
					</div> */}
				</div>
			</div>
		</>
	);
};
export default Contact;
