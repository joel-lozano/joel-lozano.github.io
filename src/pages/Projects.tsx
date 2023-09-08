import ProjectDisplay from '../components/ProjectDisplay';
import './Projects.css';

export default function Projects() {
    return (
        <ul className='projects-container'>
            <ProjectDisplay
                name='Article Generator'
                image='/webpages/article-generator.png'
                link='https://jlz-article-generator.azurewebsites.net'
                headline='Generate articles and read aloud'
                tags={['OpenAI API', 'ChatGPT', 'Dall-E', 'Microsoft Speech Service']}
            />
            <ProjectDisplay
                name='Message Board'
                image='/webpages/message-board.png'
                link='https://jlz-message-board.vercel.app'
                headline='First fullstack web app'
                tags={['TypeScript', 'Next.js', 'React.js', 'OAuth', 'Prisma']}
                features={[
                    'Share, delete, and update posts',
                    'Supports user authentication with GitHub',
                    'Currently adding more OAuth providers'
                ]}
            />
            <ProjectDisplay
                name='To Do List'
                image='/webpages/todo-list.png'
                link='https://joel-lozano.github.io/todo-list'
                headline='First React app'
                tags={['React.js', 'JavaScript', 'HTML', 'CSS']}
                features={[
                    'Create and delete tasks',
                    'Mark tasks completed and adjust priorities',
                    'Organize tasks by priority, completion, order added'
                ]}
            />
            <ProjectDisplay
                name='Snake Game'
                image='/webpages/snake.png'
                link='https://joel-lozano.github.io/snake-game'
                headline='First frontend web development project'
                tags={['JavaScript', 'HTML', 'CSS']}
                features={[
                    'Supports pausing',
                ]}
            />
            <ProjectDisplay
                name='Web Scraper'
                image='/icons/Github.png'
                link='https://github.com/joel-lozano/web-scraper'
                headline='Custom search automation and webpage scraping'
                tags={['Python', 'Bing Web Search API', 'Regular Expressions', 'sqlite3']}
                features={[
                    'Searches on Bing for user-provided key terms and website template domains (Wix, Wordpress)',
                    'Scrapes resulting webpages for company names, phone numbers, & email addresses',
                    'Uses a blacklist to skip known-to-be-unhelpful sites',
                    'Checks if phone numbers exist in database to avoid providing repeat results',
                    'Sends formatted results over email'
                ]}
            />
        </ul>
    );
}