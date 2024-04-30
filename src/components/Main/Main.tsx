import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import '../Main/Main.scss';

export default function Main() {
	return (
		<main className='main-container'>
			<AboutMe />
			<Skills />
			<Projects />
		</main>
	);
}
