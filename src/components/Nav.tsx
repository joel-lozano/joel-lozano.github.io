import { profile } from '../data/profile';

export type Tab = 'home' | 'projects';

export default function Nav({ tab }: { tab: Tab }) {
    return (
        <header className='nav'>
            <div className='nav-inner'>
                <a className='nav-name' href='#home'>JL</a>
                <nav className='tabs' aria-label='Pages'>
                    <a href='#home' className='tab' aria-current={tab === 'home' ? 'page' : undefined}>Home</a>
                    <a href='#projects' className='tab' aria-current={tab === 'projects' ? 'page' : undefined}>Projects</a>
                </nav>
                <a className='nav-resume' href={profile.resume} target='_blank' rel='noopener noreferrer'>Resume</a>
            </div>
        </header>
    );
}
