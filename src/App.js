import About from './components/About/About';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav.jsx';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/Scroll';
import Skills from './components/Skills/Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from './routes.js';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<ScrollToTop />
				<Nav />
				<Routes>
					<Route path={PATH.home} element={<Intro />} />
					<Route path={PATH.projects} element={<Projects />} />
					<Route path={PATH.about} element={<About />} />
					<Route path={PATH.skills} element={<Skills />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
