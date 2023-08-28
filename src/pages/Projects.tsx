import ProjectDisplay from '../components/ProjectDisplay';
import './Projects.css';

export default function Projects() {
    return (
        <ul className='projects-container'>
            <ProjectDisplay
                name='Article Generator'
                image='/webpages/article-generator.png'
                link='https://jlz-article-generator.azurewebsites.net'
                headline='OpenAI API-connected article generator with read-aloud'
                tags={['OpenAI API', 'ChatGPT', 'Dall-E', 'Microsoft Speech Service']}
            />
            <ProjectDisplay
                name='Message Board'
                image='/webpages/message-board.png'
                link='https://jlz-message-board.azurewebsites.net'
                headline='First fullstack web app'
                tags={['TypeScript', 'Node.js', 'React.js', 'Express.js', 'MongoDB']}
                features={[
                    'Create, delete, and update posts',
                    'Supports user authentication',
                    'Currently adding customizable profile pictures'
                ]}
            />
            <ProjectDisplay
                name='To-Do List'
                image='/webpages/todo-list.png'
                link='https://joel-lozano.github.io/todo-list'
                headline='First React app'
                tags={['React.js', 'JavaScript', 'HTML', 'CSS']}
                features={[
                    'Sort tasks by priority'
                ]}
            />
            <ProjectDisplay
                name='Snake Game'
                image='/webpages/snake.png'
                link='https://joel-lozano.github.io/snake-game'
                headline='First frontend web development project'
                tags={['JavaScript', 'HTML', 'CSS']}
            />
            <ProjectDisplay
                name='Web Scraper'
                image='/icons/Github.png'
                link='https://github.com/joel-lozano/web-scraper'
                headline='Custom search automation and webpage scraping'
                tags={['Python', 'Bing Web Search API', 'Regular Expressions']}
            />
        </ul>
    );
}