import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='inner-about'>
				<img src='../src/assets/Profile.jpeg' alt='dp' />
			</div>
			<div className='inner-about2'>
				<span className='brdr'></span>
				<h1>About me</h1>
				<p>Hi, Saya adalah lulusan SMAN 1 TAPUNG HULU di kota Pekanbaru.Riau pada tahun 2014.</p>
				<span className='para'>
					Saya pernah berkuliah di universitas islam riau (UIR) namun tidak selesai hanya sampai
					semester 4, saya sangat menyukai dunia programmer karena saya yakin ada peluang berkarir
					meskipun hanya sebagai lulusan SMA, awalnya saya mempelajari coding secara otodidak dan
					berkelanjutan mengikuti beberapa webinar dan bootcamp.
				</span>
				<a href='#exp'>
					{' '}
					Read more <ArrowForwardIcon className='forward' />
				</a>
			</div>
		</div>
	);
};
export default About;
