import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { categories, projects, sortProjects, type Category } from '../data/projects';

export default function Projects() {
    const [filter, setFilter] = useState<Category | 'All'>('All');

    const sorted = sortProjects(projects);
    const featured = filter === 'All' ? sorted.find((p) => p.featured) : undefined;
    const shown = sorted.filter((p) => p !== featured && (filter === 'All' || p.category === filter));
    const counts = (c: Category) => projects.filter((p) => p.category === c).length;

    return (
        <section className='slide projects-page' aria-labelledby='projects-title'>
            <div className='slide-inner'>
                <div className='projects-head'>
                    <h1 id='projects-title'>Projects</h1>
                    <div className='filters' role='group' aria-label='Filter by category'>
                        {(['All', ...categories] as const).map((c) => {
                            const n = c === 'All' ? projects.length : counts(c);
                            if (n === 0) return null;
                            return (
                                <button
                                    key={c}
                                    type='button'
                                    className='filter'
                                    aria-pressed={filter === c}
                                    onClick={() => setFilter(c)}
                                >
                                    {c}<span className='filter-n'>{n}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {featured && <ProjectCard project={featured} wide />}

                <div className='card-grid'>
                    {shown.map((p) => <ProjectCard key={p.slug} project={p} />)}
                </div>
            </div>
        </section>
    );
}
