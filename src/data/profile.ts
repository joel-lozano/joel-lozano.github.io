// Everything shown on the Home tab. Keep captions to a few words: the keywords do the talking.

export const profile = {
    name: 'Joel Lozano',
    role: 'Full-stack engineer building AI tools for pharma R&D',
    location: 'New York, NY',
    email: 'lozano.joel.a@gmail.com',
    github: 'https://github.com/joel-lozano',
    linkedin: 'https://www.linkedin.com/in/joelalozano/',
    resume: '/Lozano_Resume.pdf',
};

// Big keywords under the name. Each chip is filled with its language's color, softened to sit with the site's greens; `ink` is the text color on top.
export const heroKeywords: { name: string; color: string; ink: string }[] = [
    { name: 'TypeScript', color: '#3d72b8', ink: '#ffffff' },
    { name: 'React', color: '#4cbfd6', ink: '#06252d' },
    { name: 'Python', color: '#ecd04e', ink: '#2a2100' },
    { name: 'Java', color: '#e07a35', ink: '#251000' },
    { name: 'C', color: '#8fa3bf', ink: '#111a26' },
];

// Spoken languages, shown in a muted line under the role.
export const languages = ['English', 'Español', '日本語'];

// Stack groups. `core: true` makes a keyword stand out.
export const stack: { group: string; items: { name: string; core?: boolean }[] }[] = [
    {
        group: 'Frontend',
        items: [{ name: 'TypeScript', core: true }, { name: 'React', core: true }, { name: 'Next.js' }, { name: 'React Native' }, { name: 'Figma' }],
    },
    {
        group: 'Backend',
        items: [{ name: 'Python', core: true }, { name: 'FastAPI' }, { name: 'Node.js' }, { name: 'PostgreSQL' }, { name: 'MongoDB' }],
    },
    {
        group: 'Cloud & ops',
        items: [{ name: 'Azure', core: true }, { name: 'AWS' }, { name: 'CI/CD' }, { name: 'Docker' }, { name: 'SSO' }, { name: 'Git' }],
    },
];

export const experience: { dates: string; title: string; org: string; tags: string[] }[] = [
    { dates: 'Jun 2024 – Present', title: 'Full-Stack Software Engineer', org: 'ClinChoice', tags: ['React', 'Python', 'Azure', 'SSO', 'AI/ML'] },
    { dates: 'Dec 2023 – Jun 2024', title: 'Innovation Technology Intern', org: 'ClinChoice', tags: ['ML data annotation', 'Agile', 'Regulatory document management'] },
    { dates: 'Summer 2023', title: 'AI/ML Intern', org: 'VG Systems', tags: ['OpenAI', 'DALL·E', 'Azure Speech'] },
    { dates: '2022', title: 'B.A. Computer Science', org: 'Columbia University', tags: ['CS + Environmental Science', 'Study abroad, Kyoto'] },
];

export const aboutTags = ['NYC native', 'Bass guitar', 'FL Studio', 'NYCFooty Weekly Soccer', 'Hiking', 'Rock climbing', 'Run Club'];
