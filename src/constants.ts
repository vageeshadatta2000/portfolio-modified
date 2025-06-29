// src/constants.ts

import { NavLink, Education, Experience, Project, Skill, CodeSnippet, LearningItem } from './types';

export const NAV_LINKS: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'code', title: 'Code' },
    { id: 'contact', title: 'Contact' },
];

export const PROFILE = `I'm a passionate ML researcher and full-stack engineer with a deep focus on system performance, LLM applications, and scalable AI architectures. This portfolio is a window into my technical journey, research innovations, and engineering craftsmanship.`;

export const ABOUT = `I recently graduated from The University of Texas at Dallas with an MS in Computer Science, specializing in Intelligent Systems. I have hands-on experience in ML pipelines, generative AI, and full-stack web development. My expertise lies at the intersection of model optimization, interpretability, and real-world deployment. I build AI systems that are performant, interpretable, and scalable — from LLM agents to cloud-native services.`;

export const EDUCATION: Education[] = [
    {
        institution: 'University of Texas at Dallas',
        degree: 'Master of Science in Computer Science',
        period: 'Aug 2022 – May 2025',
        gpa: '3.6/4.0',
        courses: 'Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Statistics in AI and ML, Operating Systems, Design and Analysis of Algorithms'
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: 'AI Researcher',
        company: 'Allen Institute for AI (AI2)',
        period: 'Jan 2025 - May 2025',
        points: [
            'Implemented Optimization by Prompting (OPRO) to enhance few-shot performance in LLMs, improving hypothesis generation accuracy by 12%.',
            'Created belief-tracking and uncertainty quantification modules using entropy and KL divergence to monitor confidence dynamics.',
            'Developed a D3.js visualization platform to analyze the evolution of model beliefs over reasoning chains.',
            'Integrated AutoGen-based reasoning loops to simulate iterative self-verification in LLMs.'
        ]
    },
    {
        role: 'Software Engineer Intern',
        company: 'Rocktop Technologies',
        period: 'Sep 2023 - July 2024',
        points: [
            'Developed and deployed microservices using PyTorch and Flask to serve fine-tuned LLMs, reducing analysis time by over 30%.',
            'Built scalable Retrieval-Augmented Generation (RAG) pipelines using FAISS and LangChain.',
            'Designed NLP-based natural language query systems with under 100ms response latency.',
            'Prototyped Dockerized, quantized LLM agents with simulated edge deployment.'
        ]
    },
    {
        role: 'Graduate Researcher',
        company: 'Computer Vision and Multimodal Computing (CVMC) Lab, UT Dallas',
        period: 'Nov 2022 - Aug 2023',
        points: [
            'Optimized CUDA kernels and multi-GPU training loops for T2AV, achieving a 27% reduction in inference time.',
            'Engineered real-time diagnostic tools for attention heatmaps, spectrograms, and latent vectors.',
            'Co-developed T2AV-Bench, a distributed contrastive benchmarking framework with GPU fault-tolerance.',
            'Built analysis pipelines to track embedding drift and modality collapse during training.'
        ]
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'Persona Weaver (In Progress)',
        description: 'A full-stack system using Python and FastAPI to create and chat with customizable AI personas with multi-trait conditioning.',
        detailedDescription: 'Designing a full-stack system using Python and FastAPI to create and chat with customizable AI personas, with multi-trait conditioning and Gemini Pro-powered dialogue generation. Actively building dynamic prompt logic and memory-based multi-turn flow to support persistent, context-aware conversations aligned with user-defined identity, tone, and behavior.',
        learnings: [
            'Designing multi-trait conditioning for persona generation.',
            'Implementing memory-based context for multi-turn conversations.',
            'Using FastAPI for scalable AI-driven backends.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/Persona-Weaver', // <-- TODO: Update with your actual repo URL
        imageSeed: 'PersonaWeaver',
        tags: ['FastAPI', 'Python', 'Gemini Pro', 'AI Personas']
    },
    {
        title: 'InsightBridge: LLM Document Analysis Tool',
        description: 'A recursive text chunking pipeline with LangChain and FAISS for efficient semantic retrieval from long-form documents.',
        detailedDescription: 'Designed and implemented a recursive text chunking pipeline with LangChain\'s RecursiveCharacterTextSplitter, enabling efficient vectorization and semantic retrieval from long-form documents. Integrated FAISS-based vector store for low-latency dense retrieval and constructed a Retrieval-Augmented Generation (RAG) chain with ChatOpenAI to produce grounded, context-aware responses.',
        learnings: [
            'Implementing recursive text chunking for optimal vectorization.',
            'Integrating FAISS for low-latency vector storage and retrieval.',
            'Building end-to-end RAG pipelines with LangChain and OpenAI models.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/InsightBridge', // <-- TODO: Update with your actual repo URL
        imageSeed: 'InsightBridge',
        tags: ['LangChain', 'FAISS', 'RAG', 'ChatOpenAI']
    },
    {
        title: 'MediQuery: Instruction-Tuned Healthcare Chatbot',
        description: 'A modular React and Flask application with real-time chat, using FAISS and SentenceTransformers for dense retrieval.',
        detailedDescription: 'Developed a modular React frontend with real-time chat interface, integrating complex state management and optimized GPU batch inference for sub-second response times. Implemented backend Flask APIs using FAISS and SentenceTransformers for dense retrieval, enhancing contextual accuracy by 19% via RAG-based instruction tuning.',
        learnings: [
            'Integrating React with a Flask ML backend.',
            'Optimizing GPU batch inference for real-time applications.',
            'Enhancing retrieval accuracy with RAG-based instruction tuning.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/MediQuery', // <-- TODO: Update with your actual repo URL
        imageSeed: 'MediQuery',
        tags: ['React', 'Flask', 'SentenceTransformers', 'FAISS']
    },
];

export const SKILLS: Skill[] = [
    { category: 'Languages', list: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash', 'HTML', 'CSS'] },
    { category: 'Frameworks', list: ['PyTorch', 'TensorFlow', 'Flask', 'FastAPI', 'React', 'LangChain', 'AutoGen', 'D3.js', 'FAISS', 'Material UI'] },
    { category: 'Tools', list: ['Docker', 'AWS', 'Git', 'Jenkins', 'Prometheus', 'Grafana', 'REST APIs', 'Unix/Linux', 'Terraform', 'Kafka', 'CockroachDB'] }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
    // You can keep these or update them with your own code snippets
    {
        language: 'Python',
        title: 'FastAPI RAG Endpoint',
        code: 
`from fastapi import FastAPI
from pydantic import BaseModel
from my_rag_pipeline import query_vector_db

app = FastAPI()

class Query(BaseModel):
    question: str

@app.post("/api/query")
async def ask_question(query: Query):
    result = await query_vector_db(question=query.question)
    return {"answer": result.answer, "sources": result.sources}`
    },
    {
        language: 'TypeScript',
        title: 'Custom React Hook for API',
        code:
`import { useState, useEffect } from 'react';

function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}`
    }
];

export const WHAT_IM_LEARNING: LearningItem[] = [
    {
        title: "Advanced RAG Architectures",
        description: "Exploring self-corrective and adaptive RAG techniques to improve grounding and reduce hallucinations."
    },
    {
        title: "Large-Scale Model Serving",
        description: "Diving into technologies like vLLM and TensorRT-LLM for optimizing inference speed and throughput."
    },
    {
        title: "Multi-Modal AI Systems",
        description: "Learning about models that can understand and process information from multiple sources like text, images, and audio."
    }
];

export const CONTACT_INFO = {
    email: 'vageeshadattag@gmail.com',
    linkedin: 'https://linkedin.com/in/vageesha-datta-ganapaneni', // <-- Update with full URL if different
    github: 'https://github.com/vageeshadatta2000'
};

export const PORTFOLIO_CONTEXT = `
Vageesha Datta Ganapaneni's Profile: ${PROFILE}
About Vageesha: ${ABOUT}
Education: ${JSON.stringify(EDUCATION)}
Work Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
