import ProjectDisplay from '../components/ProjectDisplay';
import './Projects.css';

export default function Projects() {
    return (
        <ul className='projects-container'>
            <ProjectDisplay
                name='Message Board'
                image='/webpages/message-board.png'
                link='https://jlz-message-board.azurewebsites.net'
                headline='First fullstack web app'
                tags={['TypeScript', 'Node.js', 'React.js', 'Express.js', 'MongoDB']}
                features={[
                    'Create, delete, and update posts',
                    'Supports user authentication',
                    'Currently adding profile pictures'
                ]}
            />
            <ProjectDisplay
                name='Article Generator'
                image='/webpages/article-generator.png'
                link='https://jlz-article-generator.azurewebsites.net'
                headline='OpenAI API-connected article generator with read-aloud functionality'
                tags={['OpenAI API', 'ChatGPT', 'Dall-E', 'Microsoft Speech Service']}
                features={[]}
            />
        </ul>
    );
}