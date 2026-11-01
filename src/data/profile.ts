// Everything shown on the Home tab. Keep captions to a few words: the keywords do the talking.

export const profile = {
    name: 'Joel Lozano',
    role: 'Full-stack engineer building AI tools for pharma R&D',
    location: 'New York, NY',
    email: 'lozano.joel.a@gmail.com',
    github: 'https://github.com/joel-lozano',
    linkedin: 'https://www.linkedin.com/in/joelalozano/',
    resume: '/Lozano_Resume.pdf',
    openTo: 'Open to full-stack & AI engineering roles',
};

// Big keywords under the name.
export const heroKeywords = ['TypeScript', 'React', 'Python', 'Azure', 'LLMs'];

// "What I've shipped" tiles: a big keyword plus a caption of five words or fewer.
export const highlights: { big: string; caption: string }[] = [
    { big: '5', caption: 'AI apps in production' },
    { big: 'Solo', caption: 'frontend dev on all five' },
    { big: 'AI/ML', caption: 'clinical document processing' },
    { big: 'SSO', caption: 'integrated end to end' },
    { big: 'CI/CD', caption: 'migrated to Azure containers' },
    { big: '5', caption: 'interns mentored' },
];

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
        group: 'AI',
        items: [{ name: 'AI-assisted coding', core: true }, { name: 'LLM integration' }, { name: 'Document processing' }, { name: 'Data labeling' }],
    },
    {
        group: 'Cloud & ops',
        items: [{ name: 'Azure', core: true }, { name: 'CI/CD' }, { name: 'Docker' }, { name: 'SSO' }, { name: 'Git' }],
    },
];

export const experience: { dates: string; title: string; org: string; tags: string[] }[] = [
    { dates: 'Jun 2024 – Present', title: 'Full-stack software engineer', org: 'ClinChoice', tags: ['React', 'Python', 'Azure', 'SSO', 'AI/ML'] },
    { dates: 'Dec 2023 – Jun 2024', title: 'Innovation technology intern', org: 'ClinChoice', tags: ['Data labeling', 'Agile', 'Audit-ready docs'] },
    { dates: 'Summer 2023', title: 'AI/ML intern', org: 'VG Systems', tags: ['OpenAI', 'DALL·E', 'Azure Speech'] },
    { dates: '2022', title: 'B.A. Computer Science', org: 'Columbia University', tags: ['CS + Environmental Science', 'Study abroad, Kyoto'] },
];

export const aboutTags = ['NYC native', 'English', 'Español', '日本語', 'Bass guitar', 'FL Studio', 'Soccer', 'Hiking'];
