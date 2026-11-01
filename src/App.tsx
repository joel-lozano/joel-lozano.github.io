import ExtractionDemo from './ExtractionDemo';
import { CLINCHOICE_END, experience, profile, projects, skills } from './data';
import photo from './assets/profile.jpg';

export default function App() {
    return (
        <>
            <header className='hero wrap'>
                <div className='hero-text'>
                    <h1>{profile.name}</h1>
                    <p className='lede'>
                        I build AI applications that turn pharmaceutical and cosmetic R&D documents into
                        structured data and finished reports, from the React frontend to the Python API to
                        Azure deployment.
                    </p>
                    <p className='status'>
                        <span className='dot' aria-hidden='true' />
                        {profile.availability} · {profile.location}
                    </p>
                    <nav className='actions' aria-label='Contact'>
                        <a className='btn btn-primary' href={`mailto:${profile.email}`}>Email me</a>
                        <a className='btn' href={profile.resume} target='_blank' rel='noopener noreferrer'>Résumé (PDF)</a>
                        <a className='btn' href={profile.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                        <a className='btn' href={profile.github} target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </nav>
                </div>
                <ExtractionDemo />
            </header>

            <main>
                <section className='wrap section' aria-labelledby='work'>
                    <h2 id='work'>Selected work</h2>

                    <article className='case'>
                        <div className='case-head'>
                            <h3>AI tools for R&D and regulatory teams</h3>
                            <p className='meta'>ClinChoice · Jun 2024 – {CLINCHOICE_END} · five production applications</p>
                        </div>
                        <div className='case-body'>
                            <p>
                                ClinChoice runs clinical and consumer-product research for pharmaceutical and
                                cosmetic companies. Its R&D teams compile evidence from study documents into reports
                                and regulatory files. I was the only frontend developer on five applications that
                                automate that work, and I built backend features on all of them.
                            </p>
                            <ul className='facts'>
                                <li>
                                    <strong>Document processing.</strong> Developed document-processing models from
                                    labeled clinical data, and automated evidence compilation, report generation and
                                    regulatory documentation.
                                </li>
                                <li>
                                    <strong>Built for a regulated setting.</strong> Worked in a healthcare environment
                                    where documentation has to be audit-ready, and set up the naming conventions and
                                    schemas the team used.
                                </li>
                                <li>
                                    <strong>Shipping it.</strong> Integrated company SSO end to end and moved
                                    deployment to Azure containers, which fixed the old pipeline’s failures.
                                </li>
                                <li>
                                    <strong>Team.</strong> Mentored five interns, ran daily standups, and demoed
                                    releases to the CEO and clients.
                                </li>
                            </ul>
                            <p className='note'>
                                The code is private. I’m glad to walk through the architecture and the tradeoffs in
                                an interview.
                            </p>
                        </div>
                    </article>

                    <h3 className='sub'>Personal projects</h3>
                    <ul className='projects'>
                        {projects.map((p) => (
                            <li key={p.name} className='project'>
                                <div className='project-main'>
                                    <h4>{p.name}</h4>
                                    <p>{p.summary}</p>
                                    {p.detail && <p className='muted'>{p.detail}</p>}
                                </div>
                                <div className='project-side'>
                                    <ul className='stack' aria-label='Built with'>
                                        {p.stack.map((s) => <li key={s}>{s}</li>)}
                                    </ul>
                                    {p.links.length > 0 && (
                                        <p className='project-links'>
                                            {p.links.map((l) => (
                                                <a key={l.href} href={l.href} target='_blank' rel='noopener noreferrer'>
                                                    {l.label}
                                                </a>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='wrap section' aria-labelledby='experience'>
                    <h2 id='experience'>Experience</h2>
                    <ol className='timeline'>
                        {experience.map((r) => (
                            <li key={r.title} className='role'>
                                <p className='role-dates'>{r.dates}</p>
                                <div>
                                    <h3>{r.title}<span className='org'>, {r.org}</span></h3>
                                    <ul>
                                        {r.points.map((pt) => <li key={pt}>{pt}</li>)}
                                    </ul>
                                </div>
                            </li>
                        ))}
                        <li className='role'>
                            <p className='role-dates'>2022</p>
                            <div>
                                <h3>B.A., Computer Science and Environmental Science<span className='org'>, Columbia University</span></h3>
                                <ul>
                                    <li>Studied Japanese at Doshisha University in Kyoto through the Kyoto Consortium for Japanese Studies.</li>
                                </ul>
                            </div>
                        </li>
                    </ol>
                </section>

                <section className='wrap section' aria-labelledby='skills'>
                    <h2 id='skills'>Tools I use</h2>
                    <dl className='skills'>
                        {skills.map((g) => (
                            <div key={g.group} className='skill-group'>
                                <dt>{g.group}</dt>
                                <dd>{g.items.join(', ')}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className='muted cert'>Certified: Microsoft Azure AI Fundamentals (AI-900)</p>
                </section>

                <section className='wrap section' aria-labelledby='about'>
                    <h2 id='about'>About</h2>
                    <div className='about'>
                        <img className='portrait' src={photo} alt='Portrait of Joel Lozano' width={720} height={960} />
                        <div className='about-text'>
                            <p>
                                I was born and raised in New York City and studied computer science and
                                environmental science at Columbia. I speak English and Spanish natively and
                                Japanese at an advanced level.
                            </p>
                            <p>
                                Away from the keyboard I play bass, make music in FL Studio, play soccer, and
                                spend weekends hiking, running or biking. I watch a lot of foreign film.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className='wrap'>
                <div className='footer'>
                    <p className='footer-line'>The fastest way to reach me is email.</p>
                    <a className='footer-email' href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
            </footer>
        </>
    );
}
