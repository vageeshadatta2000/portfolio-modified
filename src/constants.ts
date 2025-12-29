import { NavLink, Education, Experience, Project, Skill, CodeSnippet, LearningItem, ExploringItem } from './types';

export const NAV_LINKS: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'demos', title: 'AI Playground' },
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

export const ABOUT = `I'm someone who genuinely loves understanding how things work—especially when it comes to AI and the systems that power it. There's something exciting about digging into a complex problem and figuring out an elegant solution.

Most of my time goes into building AI systems, but what really gets me going is the learning itself. Whether it's late-night rabbit holes into research papers or experimenting with new frameworks, I'm always trying to pick up something new. I believe the best engineers never stop being students.

When I'm not coding, you'll probably find me reading about the latest in LLM research or thinking about where all this AI stuff is actually heading. I try to stay curious and keep pushing myself—there's always more to learn.`;

export const CURRENTLY_EXPLORING: ExploringItem[] = [
    {
        title: "LLM Post-Training & RLHF",
        description: "Deep diving into how models are fine-tuned after pre-training—RLHF, DPO, and the techniques that make LLMs actually useful and aligned.",
        icon: "brain"
    },
    {
        title: "Path to AGI",
        description: "Fascinated by the research and debates around artificial general intelligence. Reading everything I can about scaling laws, emergent capabilities, and what's next.",
        icon: "rocket"
    },
    {
        title: "Inference Optimization",
        description: "Exploring how to make models run faster and cheaper—vLLM, quantization, speculative decoding. The gap between research and production is where interesting problems live.",
        icon: "zap"
    },
    {
        title: "Quantum Computing",
        description: "A newer interest, but I'm curious about quantum algorithms and how they might intersect with ML someday. Still wrapping my head around qubits.",
        icon: "atom"
    }
];

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
    },
    {
        title: 'InsightBridge',
        description: 'LLM-powered document analysis tool with RAG pipeline, FAISS vector store, and semantic search capabilities.',
        detailedDescription: 'Designed and implemented a recursive text chunking pipeline with LangChain\'s RecursiveCharacterTextSplitter, enabling efficient vectorization and semantic retrieval from long-form documents. Integrated FAISS-based vector store for low-latency dense retrieval and constructed a Retrieval-Augmented Generation (RAG) chain with ChatOpenAI to produce grounded, context-aware responses.',
        learnings: [
            'LangChain for document processing.',
            'FAISS vector stores for semantic search.',
            'RAG pipeline architecture.',
            'Text chunking strategies for LLMs.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/InsightBridge',
        imageSeed: 'InsightBridge',
        tags: ['LangChain', 'FAISS', 'RAG', 'FastAPI', 'PostgreSQL']
    },
    {
        title: 'MediQuery',
        description: 'HIPAA-compliant healthcare chatbot with ML-based intent classification and real-time conversational support.',
        detailedDescription: 'Built a secure, HIPAA-compliant web application using React.js, Flask, and MongoDB, offering patients access to curated health insights and real-time chat-based assistance. Developed a modular React frontend with real-time chat interface, integrating complex state management and optimized GPU batch inference for sub-second response times. Implemented backend Flask APIs using FAISS and SentenceTransformers for dense retrieval, enhancing contextual accuracy by 19% via RAG-based instruction tuning.',
        learnings: [
            'Building HIPAA-compliant applications.',
            'Real-time chat interfaces with React.',
            'FAISS and SentenceTransformers for retrieval.',
            'ML-based intent classification.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/MediQuery',
        imageSeed: 'MediQuery',
        tags: ['React.js', 'Flask', 'MongoDB', 'FAISS', 'ML Classification']
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

export const TECH_STACK = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    tools: ['Vite', 'TensorFlow.js'],
    deployment: ['GitHub Pages', 'Vercel']
};

export const PORTFOLIO_CONTEXT = `
Vageesha Datta Ganapaneni's Profile: ${PROFILE}
About Vageesha: ${ABOUT}
Education: ${JSON.stringify(EDUCATION)}
Work Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS.map(p => ({title: p.title, description: p.description})))}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
