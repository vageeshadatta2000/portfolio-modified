import { NavLink, Education, Experience, Project, Skill, CodeSnippet, LearningItem } from './types';

export const NAV_LINKS: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
];

export const PROFILE = `AI/ML Engineer specializing in Agentic AI Evaluation, LLM Systems, and Distributed AI Infrastructure. Currently working on cutting-edge AI agent evaluation frameworks and responsible AI governance.`;

export const TYPING_TEXTS = [
    "AI/ML Engineer",
    "Agentic AI Researcher",
    "LLM Systems Engineer",
    "Full-Stack Developer",
    "AI Evaluation Specialist"
];

export const ABOUT = `I am passionate about building and evaluating intelligent AI systems that solve real-world problems. My experience spans designing distributed evaluation frameworks for agentic AI models, developing AI-driven automation pipelines, and building interactive dashboards for ML insights.

Currently working as an AI Fellow at Handshake, where I conduct machine learning code reviews of AI agents and contribute to responsible AI governance frameworks. Previously at HUD, I designed evaluation frameworks parallelizing rollouts and vLLM inference across H100 GPU clusters, improving evaluation throughput by 15%.

My expertise includes PyTorch, TensorFlow, LangChain, LangGraph, and cloud deployment with Docker and Kubernetes. I enjoy working across the stack—from optimizing model inference with vLLM to crafting interactive React dashboards—because it allows me to turn complex AI research into usable, impactful products.`;

export const EDUCATION: Education[] = [
    {
        institution: 'The University of Texas at Dallas',
        degree: 'Master of Science in Computer Science',
        period: 'Aug 2022 – May 2025',
        gpa: '',
        courses: 'Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Statistics in AI and ML, Web Programming Languages'
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: 'AI Fellow',
        company: 'Handshake',
        period: 'Oct 2025 - Present',
        points: [
            'Applied prompt engineering, conducted 1K+ machine learning code reviews of coding AI agents to detect rogue behaviors and integrate corrected experimentation, improving model compliance accuracy by 2%.',
            'Enhancing the scientific integrity evaluation framework by designing custom metrics, contributing to the development of internal benchmarks for responsible AI governance within Handshake\'s MOVE research program.'
        ]
    },
    {
        role: 'Research Engineer – Agentic AI Evals',
        company: 'HUD',
        period: 'Oct 2025 - Nov 2025',
        points: [
            'Designed a distributed evaluation framework by parallelizing rollouts, vLLM inference, and fine-tuning across H100 GPU clusters, improving evaluation throughput by 15% and accelerating agentic model benchmarking.',
            'Evaluated AI agents across multiple codebases, assessing their ability to interpret pull requests (PRs), implement code changes, and design test cases verifying modified behavior through multi-turn reasoning.',
            'Refactored the evaluation harness into a modular, configuration-based system supporting plug-and-play model integration, reducing setup effort by 25% and enabling faster experimentation for future client evaluations.',
            'Developed interactive React dashboards connected to Python and Docker-based analytics, cutting manual result inspection time by nearly 20% and improving visibility across research and engineering teams.'
        ]
    },
    {
        role: 'AI Researcher',
        company: 'Allen Institute for AI (Ai2)',
        period: 'Jan 2025 - May 2025',
        points: [
            'Applied Optimization by Prompting (OPRO) to enhance few-shot reasoning, refining prompt design to achieve a 12% gain in hypothesis generation accuracy across active reasoning benchmarks.',
            'Developed belief-tracking and uncertainty quantification components using entropy and KL divergence, allowing early detection of reasoning drift and improving interpretability in complex inference tasks.',
            'Built an interactive D3.js platform visualizing confidence evolution across reasoning chains, streamlining analytical reviews and increasing transparency for research teams.'
        ]
    },
    {
        role: 'AI Software Engineer – Automation Team',
        company: 'IBM',
        period: 'Dec 2020 - May 2022',
        points: [
            'Deployed AI-driven automation pipelines across hybrid cloud environments, improving operational throughput by 20% and minimizing manual touchpoints in core business processes.',
            'Processed and structured over 10 million data records to enable accurate training of predictive models that strengthened process reliability and decision support.',
            'Introduced reusable libraries and REST APIs that standardized automation routines, reducing integration timelines by 30% and facilitating organization-wide adoption of AI tooling.',
            'Containerized machine learning solutions with Docker and orchestrated deployments using Kubernetes, bringing down release time from hours to minutes while ensuring consistent performance across environments.'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'Vision-Based Web Automation Agent',
        description: 'Autonomous web automation agent using GPT-4o Vision with Observe-Think-Act loop, achieving 98.7% accuracy in solving web automation tasks.',
        detailedDescription: 'Built an autonomous web automation agent using GPT-4o Vision that executes multi-step tasks through an Observe-Think-Act loop, leveraging IoU-based filtering to deduplicate bounding boxes for accurate interactive element detection. Implemented intelligent action execution with visual grounding and text-matching fallbacks, achieving 98.7% accuracy in solving web automation tasks with robust loop detection and verification mechanisms.',
        learnings: [
            'Building autonomous AI agents with vision capabilities.',
            'Implementing Observe-Think-Act loops for multi-step reasoning.',
            'IoU-based filtering for accurate element detection.',
            'Visual grounding and text-matching fallback strategies.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/WebAutomationAgent',
        imageSeed: 'WebAutomationAgent',
        tags: ['GPT-4o Vision', 'AI Agents', 'Web Automation', 'Python', 'Computer Vision']
    },
    {
        title: 'MoodBoard AI: Context-Aware Pin Recommendations',
        description: 'Context-aware recommendation system generating personalized mood boards using graph embeddings and multimodal LLM inputs.',
        detailedDescription: 'Built a context-aware recommendation system that generated personalized "mood boards" by combining graph embeddings of user–pin interactions with multimodal inputs, enabling richer context modeling for recommendations. Incorporated LLM-based embeddings of image and text metadata into the retrieval pipeline, improving recommendation quality and boosting recall by 17% in offline evaluations.',
        learnings: [
            'Graph embeddings for user-item interactions.',
            'Multimodal LLM integration for recommendations.',
            'Building context-aware retrieval pipelines.',
            'Evaluation metrics for recommendation systems.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/MoodBoardAI',
        imageSeed: 'MoodBoardAI',
        tags: ['LLM', 'Graph Embeddings', 'Recommendations', 'Multimodal AI', 'Python']
    },
    {
        title: 'AI Agent Evaluation Framework',
        description: 'Distributed evaluation framework for agentic AI models with vLLM inference across H100 GPU clusters.',
        detailedDescription: 'Designed a distributed evaluation framework by parallelizing rollouts, vLLM inference, and fine-tuning across H100 GPU clusters, improving evaluation throughput by 15%. Refactored the harness into a modular, configuration-based system supporting plug-and-play model integration, reducing setup effort by 25%.',
        learnings: [
            'Distributed systems for AI evaluation.',
            'vLLM inference optimization.',
            'Building modular evaluation frameworks.',
            'H100 GPU cluster orchestration.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/AgentEval',
        imageSeed: 'AgentEvalFramework',
        tags: ['vLLM', 'H100 GPUs', 'Distributed Systems', 'AI Evaluation', 'Python']
    }
];

export const SKILLS: Skill[] = [
    { category: 'Languages', list: ['Python', 'JavaScript', 'TypeScript', 'Rust', 'SQL', 'Bash', 'Linux'] },
    { category: 'Frameworks & Libraries', list: ['PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'Flask', 'FastAPI', 'React', 'Node.js', 'D3.js'] },
    { category: 'Tools & Platforms', list: ['Docker', 'Kubernetes', 'AWS', 'Git', 'FAISS', 'Redis', 'vLLM', 'REST APIs'] }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
    {
        language: 'Python',
        title: 'LangChain Agent with Tool Calling',
        code:
`from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain_openai import ChatOpenAI
from langchain.tools import tool

@tool
def analyze_code(code: str) -> str:
    """Analyze code for potential issues."""
    # Analysis logic here
    return f"Analysis complete for {len(code)} chars"

llm = ChatOpenAI(model="gpt-4o", temperature=0)
tools = [analyze_code]

agent = create_openai_tools_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)

# Run the agent
result = executor.invoke({
    "input": "Analyze this Python function for bugs"
})`
    },
    {
        language: 'TypeScript',
        title: 'React Dashboard with Real-time Updates',
        code:
`import { useEffect, useState } from 'react';

interface EvalResult {
  model: string;
  accuracy: number;
  timestamp: Date;
}

function useEvalResults(endpoint: string) {
  const [results, setResults] = useState<EvalResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket(endpoint);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResults(prev => [...prev, data]);
    };

    ws.onopen = () => setLoading(false);

    return () => ws.close();
  }, [endpoint]);

  return { results, loading };
}`
    }
];

export const WHAT_IM_LEARNING: LearningItem[] = [
    {
        title: "Agentic AI Systems",
        description: "Building and evaluating autonomous AI agents that can reason, plan, and execute complex multi-step tasks."
    },
    {
        title: "LLM Evaluation & Safety",
        description: "Developing frameworks for responsible AI governance and benchmarking AI agent behavior for compliance."
    },
    {
        title: "Distributed Inference at Scale",
        description: "Optimizing vLLM inference pipelines across GPU clusters for high-throughput AI agent evaluation."
    }
];

export const STATS = [
    { label: 'Years of Experience', value: 2, suffix: '+' },
    { label: 'AI Code Reviews', value: 1000, suffix: '+' },
    { label: 'Evaluation Throughput Gain', value: 15, suffix: '%' },
    { label: 'Automation Accuracy', value: 98, suffix: '%' }
];

export const CONTACT_INFO = {
    email: 'vageeshadattag@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vageeshadatta',
    github: 'https://github.com/vageeshadatta2000',
    phone: '+1(469) 805-1906',
    location: 'Dublin, California'
};

export const PORTFOLIO_CONTEXT = `
Vageesha Datta Ganapaneni's Profile: ${PROFILE}
About Vageesha: ${ABOUT}
Education: ${JSON.stringify(EDUCATION)}
Work Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS.map(p => ({title: p.title, description: p.description})))}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
