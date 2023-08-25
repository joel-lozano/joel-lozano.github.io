import './ProjectDisplay.css';

interface ProjectDisplayProps {
    name: string;
    image: string;
    link: string;
    headline: string;
    tags: string[];
    features: string[];
}

const ProjectDisplay = ({name, image, link, headline, tags, features}: ProjectDisplayProps) => {
    const arrayToList = (array: string[]) => {
        return array.map((value) => <li>{value}</li>)
    };

    return (
        <li className='project-display-container' key={name}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <article>
                <h1>{name}</h1>
                <h2>{headline}</h2>
                <a href={link}>Project Demo</a>
                <ul className='tags'>
                    {arrayToList(tags)}
                </ul>
                <ul className='features'>
                    {arrayToList(features)}
                </ul>
            </article>
        </li>
    );
}

export default ProjectDisplay;