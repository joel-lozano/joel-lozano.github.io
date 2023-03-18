import './Projects.css';
import ProjectIcon from '../components/ProjectIcon';

export default function Projects() {
    return (
        <div className='grid'>
            <h2>Frontend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Notes App'
                        link='https://joel-lozano.github.io/notes-app'
                    />
                </li>
                <li>
                    <ProjectIcon
                        name='To Do List'
                        link='https://joel-lozano.github.io/todo-list'
                    />
                </li>
                <li>
                    <ProjectIcon
                        name='Snake Game'
                        link='https://joel-lozano.github.io/snake-game'
                    />
                </li>
            </ul>
            <h2>Backend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Notes API'
                        link='https://github.com/joel-lozano/notes-app/tree/main/server'
                    />
                </li>
            </ul>
            <h2>Other Projects</h2>
            <ul className='projects-list'>
                <li>
                    {/* TODO: Populate */}
                </li>
            </ul>
        </div>
    )
}