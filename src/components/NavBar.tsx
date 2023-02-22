import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    const activeClassName = 'active';

    return (
        <nav className='nav'>
            <NavLink to='/' className='site-title'>Joel Lozano</NavLink>
            <ul>
                <li>
                    <NavLink
                        to='/projects'
                        className='navlink'
                        style={({ isActive }) => ({
                            background: isActive ? '#555' : undefined
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
                            background: isActive ? '#555' : undefined
                        })}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}