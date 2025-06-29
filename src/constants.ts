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

export const PROFILE = `I am a Computer Science graduate student at The University of Texas at Dallas with a passion for building intelligent systems. My experience spans from AI research in LLM performance to developing scalable full-stack applications and microservices.`;

export const ABOUT = `With a Master's in Computer Science (CGPA: 3.6/4.0) from UT Dallas, my focus lies in Machine Learning, NLP, and AI. I have hands-on experience as an AI Researcher at the Allen Institute for AI (AI2), a Software Engineer Intern at Rocktop Technologies, and a Software Engineer at Fiserv, where I built and deployed generative AI and large-scale data solutions. I thrive on solving complex problems, from optimizing LLM reasoning to designing robust RAG pipelines for real-world applications.`;

export const EDUCATION: Education[] = [
    {
        institution: 'University of Texas at Dallas',
        degree: 'Master of Science in Computer Science',
        period: 'Aug 2022 – May 2025',
        gpa: '3.6/4.0',
        courses: 'Machine Learning, Artificial Intelligence, Computer Vision, Natural Language Processing, Statistics in AI and ML'
    },
    {
        institution: 'SRM University, AP',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        period: 'Aug 2018 – June 2022',
        gpa: '9.06/10.00'
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: 'AI Researcher',
        company: 'Allen Institute for AI (AI2)',
        period: 'Jan 2025 - May 2025',
        points: [
            'Implemented Optimization by Prompting (OPRO) for test-time LLM steering, boosting hypothesis generation accuracy by 12%.',
            'Built a belief-tracking and uncertainty quantification framework using AutoGen and binomial modeling.',
            'Developed an interactive D3.js experiment tree to visualize belief evolution in LLMs and accelerate debugging.'
        ]
    },
    {
        role: 'Software Engineer Intern',
        company: 'Rocktop Technologies',
        period: 'Sep 2023 - July 2024',
        points: [
            'Developed and optimized microservices using Python and PyTorch to implement generative AI agents, reducing manual processing time by 30%.',
            'Designed and deployed RESTful APIs with Flask to serve AI-generated insights for risk evaluation.',
            'Integrated NLP-based query modules to build conversational interfaces for non-technical users.',
            'Conducted rigorous testing and deployment of AI-driven anomaly detection pipelines.'
        ]
    },
     {
        role: 'Software Engineer',
        company: 'Fiserv',
        period: 'Dec 2020 - May 2022',
        points: [
            'Orchestrated the deployment of Kafka-based microservices using Jenkins CI/CD and CockroachDB for 166,000+ users.',
            'Implemented Prometheus and Grafana for real-time observability, improving uptime and minimizing incidents.',
            'Developed a React.js and Spring Boot security dashboard, saving 10+ hours weekly.',
            'Refactored legacy UI using Material UI, containerized with Docker, and deployed to AWS EC2, reducing support tickets by 25%.'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'InsightBridge: LLM Document Analysis Tool',
        description: 'An LLM-powered tool with a recursive text chunking pipeline (LangChain) and FAISS vector store for semantic retrieval.',
        detailedDescription: "Designed and implemented a recursive text chunking pipeline with LangChain's RecursiveCharacterTextSplitter, enabling efficient vectorization and semantic retrieval from long-form documents. Integrated a FAISS-based vector store for low-latency dense retrieval and constructed a Retrieval-Augmented Generation (RAG) chain with ChatOpenAI to produce grounded, context-aware responses.",
        learnings: [
            'Implementing recursive text chunking for optimal vectorization.',
            'Integrating FAISS for low-latency vector storage and retrieval.',
            'Building end-to-end RAG pipelines with LangChain and OpenAI models.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/InsightBridge',
        imageSeed: 'InsightBridge',
        tags: ['LangChain', 'FAISS', 'RAG', 'ChatOpenAI']
    },
    {
        title: 'MediQuery: Instruction-Tuned Healthcare Chatbot',
        description: 'A modular React and Flask app with real-time chat, using FAISS and SentenceTransformers for dense retrieval and 19% accuracy boost.',
        detailedDescription: 'Developed a modular React frontend with real-time chat interface, integrating complex state management and optimized GPU batch inference for sub-second response times. Implemented backend Flask APIs using FAISS and SentenceTransformers for dense retrieval, enhancing contextual accuracy by 19% via RAG-based instruction tuning.',
        learnings: [
            'Integrating React with a Flask ML backend.',
            'Optimizing GPU batch inference for real-time applications.',
            'Enhancing retrieval accuracy with RAG-based instruction tuning.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/MediQuery',
        imageSeed: 'MediQuery',
        tags: ['React', 'Flask', 'SentenceTransformers', 'FAISS']
    },
    {
        title: 'StreamStyle: Real-time Video Style Transfer',
        description: 'Scalable platform using React, Flask, Docker, and AWS EC2 to apply style transfer to video streams with 50% less flickering.',
        detailedDescription: 'Engineered a React frontend featuring efficient video upload, processing status updates, and live previews. Created scalable Flask REST APIs deployed on AWS EC2 with Docker, leveraging AdaIN and mixed-precision training to reduce inference flickering by 50% and computation overhead by 15%.',
        learnings: [
            'Handling real-time video data streams between client and server.',
            'Deploying ML models in a scalable way using Docker and AWS.',
            'Applying model optimization techniques like mixed-precision training.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/StreamStyle',
        imageSeed: 'StreamStyle',
        tags: ['React', 'Flask', 'Docker', 'AWS', 'AdaIN']
    },
];

export const SKILLS: Skill[] = [
    { category: 'Languages', list: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash', 'HTML', 'CSS'] },
    { category: 'Frameworks', list: ['PyTorch', 'TensorFlow', 'Flask', 'FastAPI', 'React', 'Angular', 'Spring Boot', 'Material UI', 'AutoGen', 'D3.js'] },
    { category: 'Tools', list: ['Docker', 'AWS', 'Terraform', 'Jenkins', 'Kafka', 'CockroachDB', 'Git', 'Prometheus', 'Grafana', 'Unix/Linux', 'REST APIs', 'FAISS'] }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
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
        setData(await response.json());
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
    linkedin: 'https://www.linkedin.com/in/vageesha-datta-ganapaneni-094ab7184/',
    github: 'https://github.com/vageeshadatta2000'
};

export const PORTFOLIO_CONTEXT = `
Vageesha Datta Ganapaneni's Profile: ${PROFILE}
About Vageesha: ${ABOUT}
Education: ${JSON.stringify(EDUCATION)}
Work Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS.map(p => ({title: p.title, description: p.description})))}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
