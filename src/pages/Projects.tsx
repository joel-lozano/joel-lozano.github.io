import './Projects.css';
import ProjectIcon from '../components/ProjectIcon';

export default function Projects() {
    return (
        <div className='projects-container'>
            <h2>Frontend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Message Board'
                        link='https://joel-lozano.github.io/message-board'
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
                <li>
                    <ProjectIcon
                        name='Portfolio Site'
                        link='https://joel-lozano.github.io'
                    />
                </li>
            </ul>
            <h2>Backend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Posts API'
                        link='https://github.com/joel-lozano/notes-app/tree/main/server'
                    />
                </li>
            </ul>
            <h2>Other Projects</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Web Scraper'
                        link='https://gist.github.com/joel-lozano/9f6558f5675701e7890d960271d1ee22'
                    />
                </li>
            </ul>
        </div>
    )
}