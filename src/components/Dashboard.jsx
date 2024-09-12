import React from 'react';
// import { Button, Typography } from '@material-tailwind/react';

import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';

export function Dashboard() {
	return (
		<Card className='w-full max-w-[48rem] flex-row'>
			{/* <CardHeader shadow={false} floated={false} className='m-0 w-2/5 shrink-0 rounded-r-none'>
				<img
					src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
					alt='card-image'
					className='h-full w-full object-cover'
				/>
			</CardHeader> */}
			<CardBody>
				{/* <Typography variant='h6' color='gray' className='mb-4 uppercase'>
					startups
				</Typography> */}
				<Typography variant='h4' color='blue-gray' className='mb-2'>
					Hallo...
				</Typography>
				<Typography color='gray' className='mb-8 font-normal'>
					Perkenalkan saya Jefri Agistar Putra, saya lulusan SMAN 1 TAPUNG HULU di Pekanbaru.Riau
					pada tahun 2014. Saya pernah berkuliah di universitas islam riau (UIR) namun tidak
					selesai, hanya sampai semester 4 karena tidak memiliki biaya untuk melanjutkan kuliah.
					Oleh karena itu saya bertekat belajar coding secara otodidak karena saya melihat peluang
					meskipun saya hanya lulusan SMA.
				</Typography>
				{/* <a href='#' className='inline-block'>
					<Button variant='text' className='flex items-center gap-2'>
						Learn More
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
							className='h-4 w-4'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
							/>
						</svg>
					</Button>
				</a> */}
			</CardBody>
		</Card>
	);
}

// export function Dashboard() {
// 	return (
// 		<section className='m-20'>
// 			<div className='p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right'>
// 				{/* <Typography variant='small' color='blue-gray' className='font-bold mb-2'>
// 					Upcoming Events
// 				</Typography> */}
// 				<Typography variant='h3' color='black'>
// 					Hallo...
// 				</Typography>
// 				<Typography className='mt-2 mb-6 !text-base font-normal text-black'>
// 					Perkenalkan saya Jefri Agistar Putra, saya lulusan SMAN 1 TAPUNG HULU di Pekanbaru.Riau
// 					pada tahun 2014. Saya pernah berkuliah di universitas islam riau (UIR) namun tidak
// 					selesai, hanya sampai semester 4 karena tidak memiliki biaya untuk melanjutkan kuliah.
// 					Oleh karena itu saya bertekat belajar coding secara otodidak karena saya melihat peluang
// 					meskipun saya hanya lulusan SMA.
// 				</Typography>
// 				{/* <Button variant='outlined' className='flex-shrink-0'>
// 					join now
// 				</Button> */}
// 			</div>
// 		</section>
// 	);
// }
// export default WidgetsExample7;
