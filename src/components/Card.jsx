import React from 'react';

const Card = (props) => {
	return (
		<div>
			<div className='card'>
				<img src={props.img} className='card-img-top' alt='' />
				<div className='card-body'>
					<h5 className='card-title'>{props.title}</h5>
					<p className='card-text'>{props.text}</p>
					<a href={props.href} target='_blank' className='btn btn-primary'>
						View on Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
