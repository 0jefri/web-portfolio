import React from 'react';

const Layout = (props) => {
	return (
		<section className='w-full min-h-screen px-8 py-10 lg:py-28 bg-blue-gray-400'>
			<div className='w-full mx-auto'>{props.children}</div>
		</section>
	);
};

export default Layout;
