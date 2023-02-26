import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    );
}

export default App;
