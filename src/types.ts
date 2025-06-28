export interface NavLink {
    id: string;
    title: string;
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
    courses?: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    points: string[];
}

export interface Project {
    title: string;
    description: string;
    detailedDescription: string;
    learnings: string[];
    repoUrl: string;
    imageSeed: string;
    tags: string[];
}

export interface Skill {
    category: string;
    list: string[];
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface CodeSnippet {
    language: 'Python' | 'TypeScript';
    title: string;
    code: string;
}

export interface LearningItem {
    title: string;
    description: string;
}
