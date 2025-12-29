import { NavLink, Education, Experience, Project, Skill, CodeSnippet, LearningItem, ExploringItem, BlogPost } from './types';

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

export const ABOUT = `I'm someone who genuinely loves understanding how things work, especially when it comes to AI and the systems that power it. There's something exciting about digging into a complex problem and figuring out an elegant solution.

Most of my time goes into building AI systems, but what really gets me going is the learning itself. Whether it's late night rabbit holes into research papers or experimenting with new frameworks, I'm always trying to pick up something new. I believe the best engineers never stop being students.

When I'm not coding, you'll probably find me reading about the latest in LLM research or thinking about where all this AI stuff is actually heading. I try to stay curious and keep pushing myself. There's always more to learn.`;

export const CURRENTLY_EXPLORING: ExploringItem[] = [
    {
        title: "LLM Post-Training & RLHF",
        description: "Deep diving into how models are fine tuned after pre training. RLHF, DPO, and the techniques that make LLMs actually useful and aligned.",
        icon: "brain",
        link: {
            text: "Learning from AI Engineer (great channel!)",
            url: "https://www.youtube.com/@aiDotEngineer"
        }
    },
    {
        title: "Path to AGI",
        description: "Fascinated by the research and debates around artificial general intelligence. Reading everything I can about scaling laws, emergent capabilities, and what's next.",
        icon: "rocket",
        link: {
            text: "Learning from AI Engineer (great channel!)",
            url: "https://www.youtube.com/@aiDotEngineer"
        }
    },
    {
        title: "Inference Optimization",
        description: "Exploring how to make models run faster and cheaper. vLLM, quantization, speculative decoding. The gap between research and production is where interesting problems live.",
        icon: "zap",
        link: {
            text: "Learning from AI Engineer (great channel!)",
            url: "https://www.youtube.com/@aiDotEngineer"
        }
    },
    {
        title: "Quantum Computing",
        description: "A newer interest, but I'm curious about quantum algorithms and how they might intersect with ML someday. Currently working through the fundamentals.",
        icon: "atom",
        link: {
            text: "Reading: Quantum Computing for Everyone",
            url: "https://mitpress.mit.edu/9780262539531/quantum-computing-for-everyone/"
        }
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        title: "Why RLHF Changed Everything for LLMs",
        excerpt: "Breaking down how Reinforcement Learning from Human Feedback transformed language models from impressive text predictors to genuinely useful assistants. A look at the intuition behind the technique.",
        date: "Dec 2024",
        readTime: "8 min read",
        tags: ["RLHF", "LLMs", "Alignment"],
        content: `When GPT-3 came out, it was impressive but also frustrating. It could write poetry, but it would also confidently make things up. The missing piece wasn't more data or bigger models. It was teaching the model what humans actually want.

RLHF works by first training a reward model on human preferences. You show humans two outputs and ask which one is better. Do this thousands of times, and you have a model that can predict human preferences. Then you use this reward model to fine tune the language model using reinforcement learning.

The key insight is that humans are better at judging quality than describing it. We can easily say "this response is more helpful" but struggle to write rules for what makes a response helpful. RLHF lets us transfer that implicit knowledge to the model.

What fascinates me is how this connects to the broader alignment problem. If we can teach models to optimize for human preferences on simple tasks, maybe we can extend this to more complex values. The challenge is making sure we're rewarding what we actually want, not just what looks good on the surface.

DPO (Direct Preference Optimization) is now emerging as a simpler alternative that skips the reward model entirely. It's exciting to see the field evolving so quickly.`,
        links: [
            { text: "InstructGPT Paper (OpenAI)", url: "https://arxiv.org/abs/2203.02155" },
            { text: "RLHF Original Paper", url: "https://arxiv.org/abs/1706.03741" },
            { text: "DPO: Direct Preference Optimization", url: "https://arxiv.org/abs/2305.18290" },
            { text: "Anthropic's Constitutional AI", url: "https://arxiv.org/abs/2212.08073" }
        ]
    },
    {
        title: "RAG vs Fine Tuning: When to Use What",
        excerpt: "After building multiple LLM applications, here's my mental model for deciding between retrieval augmented generation and fine tuning. Spoiler: it's usually RAG first.",
        date: "Nov 2024",
        readTime: "6 min read",
        tags: ["RAG", "Fine-tuning", "LLMs"],
        content: `Every time I start a new LLM project, the same question comes up: should we fine tune a model or use RAG? After building several systems, I've developed a simple framework.

Use RAG when:
• Your knowledge base changes frequently
• You need citations and source attribution
• You want to avoid hallucinations about facts
• You have limited compute budget

Use fine tuning when:
• You need to change the model's behavior or style
• You're teaching domain specific reasoning patterns
• Latency is critical (no retrieval step)
• You have high quality training data

The reality is most applications should start with RAG. It's faster to prototype, easier to debug, and you can update knowledge without retraining. Fine tuning is powerful but it's also a commitment. You need good data, compute resources, and evaluation pipelines.

What I've learned is that the best systems often combine both. RAG for knowledge, fine tuning for behavior. The model learns how to use retrieved context effectively through fine tuning, while RAG provides the actual information.

The most common mistake I see is jumping to fine tuning too early. Get your RAG pipeline working first. Understand where it fails. Then fine tune to fix specific failure modes.`,
        links: [
            { text: "RAG Original Paper", url: "https://arxiv.org/abs/2005.11401" },
            { text: "LangChain RAG Guide", url: "https://python.langchain.com/docs/tutorials/rag/" },
            { text: "Hugging Face Fine-tuning Guide", url: "https://huggingface.co/docs/transformers/training" },
            { text: "RAFT: Adapting LLMs to Domain-Specific RAG", url: "https://arxiv.org/abs/2403.10131" }
        ]
    },
    {
        title: "What Scaling Laws Tell Us About AGI",
        excerpt: "Scaling laws predict model performance with surprising accuracy. But what do they really mean for artificial general intelligence? Some thoughts after diving into the research.",
        date: "Oct 2024",
        readTime: "10 min read",
        tags: ["Scaling Laws", "AGI", "Research"],
        content: `The Chinchilla paper showed something remarkable: if you know how much compute you have, you can predict optimal model size and training data. This predictability is both exciting and a bit unsettling.

On one hand, it suggests we can plan the path to more capable AI. Double compute, get predictable improvements. On the other hand, it raises questions about what these curves actually mean.

Here's what I find interesting. Scaling laws predict loss on next token prediction. But emergent capabilities like reasoning, coding, and following instructions appear suddenly at certain scales. The loss curves are smooth, but the capabilities are step functions.

This disconnect matters for AGI predictions. If we're just extrapolating loss curves, we might miss when qualitatively new capabilities emerge. Or we might be surprised when expected capabilities don't materialize.

My current thinking: scaling laws are useful for predicting the "floor" of capability. A model at scale X will be at least as capable as the curve predicts. But breakthroughs in architecture, training, or data quality can push performance above the curve.

The path to AGI probably isn't just more compute. It's finding the right combination of scale, architecture, and training approaches. The scaling laws give us a baseline to improve upon.`,
        links: [
            { text: "Chinchilla Scaling Laws Paper", url: "https://arxiv.org/abs/2203.15556" },
            { text: "GPT-4 Technical Report", url: "https://arxiv.org/abs/2303.08774" },
            { text: "Emergent Abilities of LLMs", url: "https://arxiv.org/abs/2206.07682" },
            { text: "Kaplan et al. Neural Scaling Laws", url: "https://arxiv.org/abs/2001.08361" }
        ]
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
