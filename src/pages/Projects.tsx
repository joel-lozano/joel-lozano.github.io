import './Projects.css';
import ProjectIcon from '../components/ProjectIcon';

export default function Projects() {
    return (
        <div className='projects-container'>
            <h2>Fullstack</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Message Board'
                        image='/webpages/message-board.png'
                        link='https://jlz-message-board.azurewebsites.net'
                    />
                </li>
                <li>
                    <ProjectIcon
                        name='Article Generator'
                        image='/webpages/article-generator.png'
                        link='https://jlz-message-board.azurewebsites.net'
                    />
                </li>
            </ul>
            <h2>Frontend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='To Do List'
                        image='/webpages/todo-list.png'
                        link='https://joel-lozano.github.io/todo-list'
                    />
                </li>
                <li>
                    <ProjectIcon
                        name='Snake Game'
                        image='/webpages/snake.png'
                        link='https://joel-lozano.github.io/snake-game'
                    />
                </li>
                <li>
                    <ProjectIcon
                        name='Portfolio Site'
                        image='/webpages/portfolio.png'
                        link='https://joel-lozano.github.io'
                    />
                </li>
            </ul>
            <h2>Backend</h2>
            <ul className='projects-list'>
                <li>
                    <ProjectIcon
                        name='Message Board Server'
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