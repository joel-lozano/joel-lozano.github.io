import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const navlinkBg = '#888';

    return (
        <nav className='nav'>
            <NavLink to='/' className='site-title'>Joel Lozano</NavLink>
            <ul>
                <li>
                    <NavLink
                        to='/projects'
                        className='navlink'
                        style={({ isActive }) => ({
                            background: isActive ? navlinkBg : undefined
                        })}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className='navlink'
                        style={({ isActive }) => ({
                            background: isActive ? navlinkBg : undefined
                        })}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}