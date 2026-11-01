import { aboutTags, experience, languages, profile, stack } from '../data/profile';
import photo from '../assets/profile.jpg';
import { GitHubIcon, LinkedInIcon, StackIcon } from '../components/Icons';

// Split tags into two rows of roughly equal text length, keeping their order, so the centered rows come out about the same width.
function splitByLength(tags: string[]): [string[], string[]] {
    const width = (t: string) => t.length + 4; // + chip padding and gap, in characters
    const total = tags.reduce((n, t) => n + width(t), 0);
    let run = 0;
    let cut = 0;
    while (cut < tags.length && Math.abs(total - 2 * (run + width(tags[cut]))) < Math.abs(total - 2 * run)) run += width(tags[cut++]);
    return [tags.slice(0, cut), tags.slice(cut)];
}

export default function Home() {
    return (
        <>
            <section className='slide hero'>
                <div className='slide-inner hero-grid'>
                    <div className='hero-text'>
                        <h1>{profile.name}</h1>
                        <p className='hero-role'>{profile.role}</p>
                        <p className='hero-langs'>{languages.join(' · ')}</p>
                        <div className='actions'>
                            <a className='btn btn-primary' href={profile.resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                            <a className='btn btn-icon' href={profile.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' title='LinkedIn'><LinkedInIcon /></a>
                            <a className='btn btn-icon' href={profile.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' title='GitHub'><GitHubIcon /></a>
                        </div>
                    </div>
                    <img className='hero-photo' src={photo} alt='Portrait of Joel Lozano' width={720} height={960} />
                </div>
            </section>

            <section className='slide slide-alt' aria-labelledby='stack'>
                <div className='slide-inner'>
                    <h2 id='stack'>Tech Stack</h2>
                    <div className='stack-grid'>
                        {stack.map((g) => (
                            <section key={g.group} className='stack-card' aria-labelledby={`stack-${g.icon}`}>
                                <h3 id={`stack-${g.icon}`}><StackIcon name={g.icon} />{g.group}</h3>
                                <ul className='stack-items'>
                                    {g.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </section>

            <section className='slide' aria-labelledby='experience'>
                <div className='slide-inner'>
                    <h2 id='experience'>Experience</h2>
                    <ol className='timeline'>
                        {experience.map((r) => (
                            <li key={r.title} className='role'>
                                <span className='role-dates'>{r.dates}</span>
                                <div className='role-main'>
                                    <h3>{r.title}</h3>
                                    <span className='role-org'>{r.org}</span>
                                </div>
                                <ul className='chips chips-sm role-tags'>
                                    {r.tags.map((t) => <li key={t} className='chip'>{t}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className='slide slide-alt' aria-labelledby='about'>
                <div className='slide-inner'>
                    <h2 id='about'>Off the Clock</h2>
                    <div className='about-rows'>
                        {splitByLength(aboutTags).map((row, i) => (
                            <ul key={i} className='chips chips-lg about-row'>
                                {row.map((t) => <li key={t} className='chip'>{t}</li>)}
                            </ul>
                        ))}
                    </div>
                </div>
            </section>

            <section className='slide slide-accent' aria-labelledby='contact'>
                <div className='slide-inner contact'>
                    <h2 id='contact'>Contact me</h2>
                    <a className='contact-email' href={`mailto:${profile.email}`}>{profile.email}</a>
                    <p className='contact-meta'>{profile.location}</p>
                </div>
            </section>
        </>
    );
}
