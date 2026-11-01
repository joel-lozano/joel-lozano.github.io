// All site content lives here, so updating the portfolio means editing this file only.

export const CLINCHOICE_END = 'Present';

export const profile = {
    name: 'Joel Lozano',
    role: 'Full-stack engineer',
    location: 'New York, NY',
    email: 'lozano.joel.a@gmail.com',
    github: 'https://github.com/joel-lozano',
    linkedin: 'https://www.linkedin.com/in/joelalozano/',
    resume: '/Lozano_Resume.pdf',
    availability: 'Open to full-stack and AI engineering roles',
};

export type Project = {
    name: string;
    summary: string;
    detail?: string;
    stack: string[];
    links: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
        name: 'Jamtrackd',
        summary: 'A social app for logging, rating and discussing music, along the lines of Letterboxd for albums.',
        stack: ['Dart', 'Flutter', 'Firebase'],
        // TODO(Joel): add the repo or app store link.
        links: [],
    },
    {
        name: 'Message board',
        summary: 'Full-stack message board where signed-in users create, edit and delete posts.',
        detail: 'Sign-in through GitHub OAuth; data modeled with Prisma.',
        stack: ['TypeScript', 'Next.js', 'React', 'Prisma', 'OAuth'],
        links: [{ label: 'Live site', href: 'https://jlz-message-board.vercel.app' }],
    },
    {
        name: 'Article generator',
        summary: 'Writes an article on any topic, illustrates it, and reads it aloud.',
        detail: 'Combines ChatGPT, DALL·E and Microsoft Speech Service in one app, deployed on Azure.',
        stack: ['OpenAI API', 'Azure', 'Microsoft Speech'],
        links: [{ label: 'Live site', href: 'https://jlz-article-generator.azurewebsites.net' }],
    },
    {
        name: 'Lead finder',
        summary: 'Searches the web for small businesses on Wix and WordPress and emails a list of their contact details.',
        detail: 'Scrapes names, phone numbers and emails, skips known dead-end sites, and de-duplicates against a SQLite database.',
        stack: ['Python', 'Bing Search API', 'SQLite'],
        links: [{ label: 'Code', href: 'https://github.com/joel-lozano/web-scraper' }],
    },
];

export type Role = {
    org: string;
    title: string;
    dates: string;
    points: string[];
};

export const experience: Role[] = [
    {
        org: 'ClinChoice',
        title: 'Full-stack software engineer',
        dates: `Jun 2024 – ${CLINCHOICE_END}`,
        points: [
            'Sole frontend developer across five AI applications for pharmaceutical and cosmetic R&D teams; owned UI, testing and deployment.',
            'Built backend API features and database operations for the same five projects in Python.',
            'Developed document-processing models from labeled clinical data, and automated evidence compilation, report generation and regulatory documentation.',
            'Integrated the company SSO portal end to end, from login flows in the UI to user management on the backend.',
            'Migrated CI/CD to Azure container deployment and fixed the reliability problems in the old pipeline.',
            'Mentored five interns in Git, React and Python, ran daily standups, demoed to the CEO and clients, and administered the team’s GitHub and Jira.',
        ],
    },
    {
        org: 'ClinChoice',
        title: 'Innovation technology intern',
        dates: 'Dec 2023 – Jun 2024',
        points: [
            'Cleaned, preprocessed and labeled data for AI/ML analysis.',
            'Owned documentation for audit readiness in a regulated healthcare environment: naming conventions, schemas, authoring and review.',
            'Led standups for a team of up to 11 and interviewed 15 candidates.',
        ],
    },
    {
        org: 'VG Systems',
        title: 'AI/ML intern',
        dates: 'Jun – Aug 2023',
        points: [
            'Designed, built and deployed an app combining ChatGPT, DALL·E and Microsoft Speech Service on my own.',
        ],
    },
];

export const skills: { group: string; items: string[] }[] = [
    { group: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'React Native', 'HTML & CSS', 'Figma'] },
    { group: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs'] },
    { group: 'Data', items: ['PostgreSQL', 'SQL', 'MongoDB'] },
    { group: 'AI', items: ['LLM integration', 'Document processing', 'Data labeling'] },
    { group: 'Infrastructure', items: ['Azure', 'Docker', 'CI/CD', 'Git', 'Bash'] },
];

// Fictional sample used in the hero. Not real study data.
export type Segment = { text: string; field?: string };

export const sampleDoc: Segment[] = [
    { text: 'Study ' },
    { text: 'CS-2041', field: 'study_id' },
    { text: ' evaluated a fragrance-free moisturizing cream in a ' },
    { text: '4-week', field: 'duration' },
    { text: ', ' },
    { text: 'single-center, open-label', field: 'design' },
    { text: ' study. ' },
    { text: 'Thirty-two healthy adults', field: 'subjects' },
    { text: ' with self-reported dry skin applied the product twice daily. ' },
    { text: 'Skin hydration, measured by corneometer', field: 'endpoint' },
    { text: ', ' },
    { text: 'increased 27% from baseline at Week 4 (p < 0.001)', field: 'result' },
    { text: '. ' },
    { text: 'No product-related adverse events', field: 'safety' },
    { text: ' were reported.' },
];

export const extracted: { field: string; value: string }[] = [
    { field: 'study_id', value: 'CS-2041' },
    { field: 'design', value: 'Single-center, open-label' },
    { field: 'duration', value: '4 weeks' },
    { field: 'subjects', value: '32 healthy adults' },
    { field: 'endpoint', value: 'Skin hydration (corneometer)' },
    { field: 'result', value: '+27% vs. baseline, p < 0.001' },
    { field: 'safety', value: 'No product-related AEs' },
];
