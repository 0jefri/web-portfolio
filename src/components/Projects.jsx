import React from 'react';
import Card from './Card';
const Projects = () => {
	return (
		<div className='projects' id='project'>
			<span></span>
			<h1>Projects</h1>
			<div className='projects-inner'>
				<Card
					img='https://jbr.id/wp-content/uploads/Takehiro-Kanegi-1-1.png'
					title='Library Novel API'
					text='Membuat API atau endpoint sebuah library untuk novel agar dapat menambah, mengupdate, menampilkan dan menghapus novel'
					href='https://github.com/0jefri/go-api-novel'
				/>
				<Card
					img='https://img.freepik.com/free-vector/happy-birthday-lettering-with-golden-letters_52683-35047.jpg'
					title='Birthday App'
					text='Sebuah website ucapan selamat ulang tahun disertai dengan beberapa animasi.'
					href='https://github.com/0jefri/ultah-anisa'
				/>
				<Card
					img='https://www.jagoanhosting.com/blog/wp-content/uploads/2023/07/isi-Website-Portofolio.png'
					title='Web Portfolio'
					text='Sebuah website yang digunakan untuk portfolio agar user dapat lebih mudah memperkenalkan diri menggunakan web.'
					href='https://github.com/0jefri/web-portfolio'
				/>
				<Card
					img='https://millennia-solusi.id/wp-content/uploads/2022/09/golang-1.png'
					title='CRUD Golang Sederhana'
					text='Sample untuk CRUD sederhana user menggunakan bahasa pemrograman Golang.'
					href='https://github.com/0jefri/crud-golang-sederhana'
				/>
			</div>
		</div>
	);
};
export default Projects;
