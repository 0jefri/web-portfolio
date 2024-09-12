import React from 'react';

const Experience = () => {
	return (
		<div className='exp' id='exp'>
			<div className='exp-img'>
				<span></span>
				<h1>My Experience</h1>
				<img
					src='https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_1280.jpg'
					width='70%'
					height='70%'
					alt='coding'
				/>
			</div>
			<div className='exp-side'>
				<div className='exp-side-inner'>
					<h2>2022 </h2>
					<div className='con'>
						<h2>Intensive Pairing at Refactory:</h2>
						<p>1. Melakukan slicing UI pada project Nusantara Technologi.</p>
						<p>2. Membuat unit testing pada project Nusantara Technologi.</p>
						<p>3. Melakukan integrasi pada project Nusantara Technologi.</p>
						<p>4. Melakukan slicing UI pada project MNC atau aladin mall.</p>
						<p>5. Membuat unit testing pada project Bio Farma Medivers</p>
					</div>
				</div>
				<div className='exp-side-inner'>
					<h2>2023 </h2>
					<div className='con'>
						<h2>Enigmacamp Bootcamp</h2>
						<p>
							Belajar bahasa pemrogramman Golang dari dasar hingga project akhir dimana kita akan
							membuat sebuat API atau endpoint.
						</p>
					</div>
				</div>
				{/* <div className='exp-side-inner'>
					<h2>2020</h2>
					<div className='con'>
						<h2>Freelance Developer</h2>
						<p>Working as a freelance developer since 2019, which helped me to gain experience.</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};
export default Experience;
