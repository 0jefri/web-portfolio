import './style.css';
// import Header from './Header';
import Halfintro from './components/HalfIntro';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Skill from './components/Skill';
import Header from './components/Header';

export default function App() {
	return (
		<div className='App'>
			<NavBar />
			<Header />
			{/* <Halfintro /> */}
			<About />
			<Skill />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}
