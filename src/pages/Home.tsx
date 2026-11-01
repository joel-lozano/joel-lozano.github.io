import { aboutTags, experience, heroKeywords, highlights, profile, stack } from '../data/profile';
import photo from '../assets/profile.jpg';

export default function Home() {
    return (
        <>
            <section className='slide hero'>
                <div className='slide-inner hero-grid'>
                    <div className='hero-text'>
                        <p className='status'><span className='dot' aria-hidden='true' />{profile.openTo}</p>
                        <h1>{profile.name}</h1>
                        <p className='hero-role'>{profile.role}</p>
                        <ul className='chips chips-xl' aria-label='Core skills'>
                            {heroKeywords.map((k) => <li key={k} className='chip'>{k}</li>)}
                        </ul>
                        <div className='actions'>
                            <a className='btn btn-primary' href='#projects'>See projects</a>
                            <a className='btn' href={profile.resume} target='_blank' rel='noopener noreferrer'>Résumé</a>
                            <a className='btn' href={profile.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            <a className='btn' href={profile.github} target='_blank' rel='noopener noreferrer'>GitHub</a>
                        </div>
                    </div>
                    <img className='hero-photo' src={photo} alt='Portrait of Joel Lozano' width={720} height={960} />
                </div>
            </section>

            <section className='slide slide-dark' aria-labelledby='shipped'>
                <div className='slide-inner'>
                    <h2 id='shipped'>What I’ve shipped</h2>
                    <p className='slide-sub'>ClinChoice · AI for pharma & cosmetic R&D</p>
                    <ul className='tiles'>
                        {highlights.map((h) => (
                            <li key={h.caption} className='tile'>
                                <span className='tile-big'>{h.big}</span>
                                <span className='tile-cap'>{h.caption}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='slide' aria-labelledby='stack'>
                <div className='slide-inner'>
                    <h2 id='stack'>Stack</h2>
                    <div className='stack-grid'>
                        {stack.map((g) => (
                            <div key={g.group} className='stack-group'>
                                <h3>{g.group}</h3>
                                <ul className='chips chips-lg'>
                                    {g.items.map((i) => (
                                        <li key={i.name} className={'chip' + (i.core ? ' chip-core' : '')}>{i.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='slide slide-alt' aria-labelledby='experience'>
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

            <section className='slide' aria-labelledby='about'>
                <div className='slide-inner'>
                    <h2 id='about'>Off the clock</h2>
                    <ul className='chips chips-lg'>
                        {aboutTags.map((t) => <li key={t} className='chip'>{t}</li>)}
                    </ul>
                </div>
            </section>

            <section className='slide slide-accent' aria-labelledby='contact'>
                <div className='slide-inner contact'>
                    <h2 id='contact'>Let’s talk.</h2>
                    <a className='contact-email' href={`mailto:${profile.email}`}>{profile.email}</a>
                    <p className='contact-meta'>{profile.location}</p>
                </div>
            </section>
        </>
    );
}
