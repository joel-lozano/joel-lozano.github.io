import { useEffect, useState } from 'react';
import Nav, { type Tab } from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Tabs are plain hashes (#home, #projects) so links work on GitHub Pages without a router.
const readTab = (): Tab => (window.location.hash === '#projects' ? 'projects' : 'home');

export default function App() {
    const [tab, setTab] = useState<Tab>(readTab);

    useEffect(() => {
        const onHash = () => {
            setTab(readTab());
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    useEffect(() => {
        document.title = tab === 'projects' ? 'Projects · Joel Lozano' : 'Joel Lozano · Full-stack engineer';
    }, [tab]);

    return (
        <>
            <Nav tab={tab} />
            <main>{tab === 'projects' ? <Projects /> : <Home />}</main>
        </>
    );
}
