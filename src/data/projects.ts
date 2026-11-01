import articleGenerator from '../assets/projects/article-generator.jpg';
import messageBoard from '../assets/projects/message-board.jpg';

export type Category = 'AI' | 'Full-stack' | 'Mobile' | 'Automation';
export type Project = {
    slug: string;
    title: string;
    /** Ten words or fewer. */
    tagline: string;
    category: Category;
    /** Shows an "In progress" badge on the card. */
    inProgress?: boolean;
    year?: number;
    /** Keywords shown as chips. Put the most impressive first. */
    stack: string[];
    /** Import an image from src/assets/projects. Without one, the card draws a typographic cover. */
    cover?: string;
    /** One featured project gets the wide card at the top of the Projects tab. */
    featured?: boolean;
    links: { demo?: string; code?: string; writeup?: string };
};

/*
 * Adding a project: copy this block into the list below.
 *
 * {
 *     slug: 'trial-extractor',
 *     title: 'Trial Extractor',
 *     tagline: 'Pulls structured data from clinical trial records',
 *     category: 'AI',
 *     inProgress: true,
 *     year: 2026,
 *     stack: ['Claude API', 'Python', 'FastAPI', 'React'],
 *     featured: true,
 *     links: { demo: 'https://…', code: 'https://github.com/joel-lozano/…' },
 * },
 */
export const projects: Project[] = [
    {
        slug: 'article-generator',
        title: 'Article Generator',
        tagline: 'Type a topic, get an illustrated article read aloud',
        category: 'AI',
        year: 2023,
        stack: ['OpenAI API', 'DALL·E', 'Azure Speech', 'Azure'],
        cover: articleGenerator,
        links: { demo: 'https://jlz-article-generator.azurewebsites.net' },
    },
    {
        slug: 'message-board',
        title: 'Message Board',
        tagline: 'Full-stack posting app with GitHub sign-in',
        category: 'Full-stack',
        year: 2023,
        stack: ['TypeScript', 'Next.js', 'Prisma', 'OAuth'],
        cover: messageBoard,
        links: { demo: 'https://jlz-message-board.vercel.app' },
    },
    {
        slug: 'jamtrackd',
        title: 'Jamtrackd',
        tagline: 'Letterboxd for music: log, rate and discuss albums',
        category: 'Mobile',
        stack: ['Flutter', 'Dart', 'Firebase'],
        links: {},
    },
    {
        slug: 'lead-finder',
        title: 'Lead Finder',
        tagline: 'Finds small-business contacts and emails you the list',
        category: 'Automation',
        stack: ['Python', 'Bing Search API', 'SQLite'],
        links: { code: 'https://github.com/joel-lozano/web-scraper' },
    },
];

export const categories: Category[] = ['AI', 'Full-stack', 'Mobile', 'Automation'];

/** Featured first, then newest, then undated. */
export function sortProjects(list: Project[]): Project[] {
    return [...list].sort((a, b) => {
        if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
        return (b.year ?? 0) - (a.year ?? 0);
    });
}
