import './ProjectIcon.css';

export default function ProjectIcon(props: any) {
    const divStyle =
        props.image ?
        {backgroundImage: `url(${props.image}`} :
        undefined

    return (
        <a
            href={props.link}
            rel='noopener noreferrer'
            target='_blank'
            className='project-icon'
        >
            <div style={divStyle}>
                {props.name}
            </div>
        </a>
    );
}