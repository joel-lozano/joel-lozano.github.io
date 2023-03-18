import './ProjectIcon.css';

export default function ProjectIcon(props: any) {
    return (
        <a
            href={props.link}
            rel='noopener noreferrer'
            target='_blank'
            className='project-icon'
        >
            <div>
                {props.name}
            </div>
        </a>
    );
}