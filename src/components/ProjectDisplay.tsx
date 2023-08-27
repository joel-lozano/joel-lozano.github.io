import './ProjectDisplay.css';

interface ProjectDisplayProps {
    name: string;
    image: string;
    link: string;
    headline: string;
    tags: string[];
    features?: string[];
}

const ProjectDisplay = ({name, image, link, headline, tags, features}: ProjectDisplayProps) => {
    const generateListItems = (array: string[] | undefined) => {
        return array ? array.map((value) => <li key={value}>{value}</li>) : null;
    };

    return (
        <a href={link} className='link-container' target='_blank' rel='noopener noreferrer'>
            <li key={name}>
                <div className='project-display-container'>
                    <img className='project-img' src={image} alt={name} />
                    <article>
                        <h1 id='project-name' className='header-text'>{name}</h1>
                        <ul className='tags'>
                            {generateListItems(tags)}
                        </ul>
                        <div>
                            <h2 id='headline' className='header-text'>{headline}</h2>
                            <ul className='features'>
                                {generateListItems(features)}
                            </ul>
                        </div>
                    </article>
                </div>
            </li>
        </a>
    );
}

export default ProjectDisplay;