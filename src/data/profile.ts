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

// Spoken languages, shown in a muted line under the role.
export const languages = ['English', 'Español', '日本語'];

// Stack cards, laid out two per row. Add a skill to `items` or a whole group here; the grid reflows.
// `icon` picks one of the outline icons in components/Icons.tsx.
export const stack: { group: string; icon: 'code' | 'layout' | 'server' | 'cloud'; items: string[] }[] = [
    { group: 'Languages', icon: 'code', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'SQL', 'Bash', 'Dart'] },
    { group: 'Frontend', icon: 'layout', items: ['React', 'Next.js', 'React Native', 'Flutter', 'HTML', 'CSS', 'Figma'] },
    { group: 'Backend', icon: 'server', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { group: 'Cloud & ops', icon: 'cloud', items: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Git', 'SSO', 'Jira'] },
];

export const experience: { dates: string; title: string; org: string; tags: string[] }[] = [
    { dates: 'Jun 2024 – Present', title: 'Full-Stack Software Engineer', org: 'ClinChoice', tags: ['React', 'Python', 'Azure', 'SSO', 'AI/ML'] },
    { dates: 'Dec 2023 – Jun 2024', title: 'Innovation Technology Intern', org: 'ClinChoice', tags: ['ML data annotation', 'Agile', 'Regulatory document management'] },
    { dates: 'Summer 2023', title: 'AI/ML Intern', org: 'VG Systems', tags: ['OpenAI', 'DALL·E', 'Azure Speech'] },
    { dates: '2022', title: 'B.A. Computer Science', org: 'Columbia University', tags: ['CS + Environmental Science', 'Study abroad, Kyoto'] },
];

export const aboutTags = ['NYC native', 'Bass guitar', 'FL Studio digital music production', 'Hiking', 'NYCFooty weekly soccer', 'Rock climbing', 'Mountain biking', 'Run club'];
