import type { Project } from '../data/projects';

const linkLabels: Record<keyof Project['links'], string> = {
    demo: 'Live demo',
    code: 'Code',
    writeup: 'Write-up',
};

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
    const links = (Object.keys(linkLabels) as (keyof Project['links'])[]).filter((k) => project.links[k]);

    return (
        <article className={'card' + (wide ? ' card-wide' : '')} data-category={project.category}>
            <div className='card-cover'>
                {project.cover ? (
                    <img src={project.cover} alt={`Screenshot of ${project.title}`} loading='lazy' />
                ) : (
                    <div className='cover-type' aria-hidden='true'>
                        <span>{project.title}</span>
                    </div>
                )}
            </div>
            <div className='card-body'>
                <div className='card-top'>
                    <span className='card-cat'>{project.category}</span>
                    {project.inProgress && <span className='badge'>In progress</span>}
                    {project.year && <span className='card-year'>{project.year}</span>}
                </div>
                <h3>{project.title}</h3>
                <p className='card-tagline'>{project.tagline}</p>
                <ul className='chips chips-sm' aria-label='Built with'>
                    {project.stack.map((s) => <li key={s} className='chip'>{s}</li>)}
                </ul>
                {links.length > 0 && (
                    <p className='card-links'>
                        {links.map((k) => (
                            <a key={k} href={project.links[k]} target='_blank' rel='noopener noreferrer'>{linkLabels[k]}</a>
                        ))}
                    </p>
                )}
            </div>
        </article>
    );
}
