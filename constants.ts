
import { NavLink, Education, Experience, Project, Skill, CodeSnippet, LearningItem } from './types.ts';

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
        courses: 'Machine Learning, Natural Language Processing, Computer Vision, Artificial Intelligence, Statistics in AI & ML'
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
        company: 'Allen Institute for AI',
        period: 'Jun 2023 - Present',
        points: [
            'Implemented OPRO to enhance few-shot inference quality by 12%.',
            'Built belief-tracking framework using entropy, KL divergence, and AutoGen.',
            'Developed interactive D3.js experiment visualizations for LLM debugging.'
        ]
    },
    {
        role: 'Software Engineer Intern',
        company: 'Rocktop Technologies',
        period: 'Jan 2023 - May 2023',
        points: [
            'Built generative AI microservices in Python for financial data analysis.',
            'Developed NLP-based conversational search and Flask APIs.'
        ]
    },
    {
        role: 'Software Engineer',
        company: 'Fiserv',
        period: 'Jul 2021 - Jul 2022',
        points: [
            'Deployed Kafka-based microservices with Jenkins CI/CD and CockroachDB.',
            'Built real-time React + Spring Boot dashboards and integrated observability with Prometheus + Grafana.',
            'Refactored frontend with Docker and deployed to AWS EC2, reducing tickets by 25%.'
        ]
    },
    {
        role: 'ML Intern',
        company: 'Madras Scientific Research Foundation',
        period: 'Apr 2021 - Jun 2021',
        points: [
            'Engineered TensorFlow-based Dense Rebar Recognition, reducing inference time by 20%.',
            'Achieved 98% model accuracy with QA compliance and checkpointing.',
            'Designed GPU-ready preprocessing pipelines using NumPy + TF.'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'InsightBridge',
        description: 'Semantic document analysis pipeline using LangChain, FAISS, and RAG for context-aware, grounded answers.',
        detailedDescription: 'InsightBridge is a powerful semantic search and question-answering system built for complex documents. It leverages LangChain to orchestrate a Retrieval-Augmented Generation (RAG) pipeline, using a FAISS vector store for efficient similarity search and OpenAI\'s models to generate answers that are both contextually relevant and grounded in the source material.',
        learnings: [
            'Implementing efficient RAG pipelines from scratch.',
            'Optimizing vector search with FAISS indexing.',
            'Managing context and prompt engineering for grounded generation.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/InsightBridge',
        imageSeed: 'InsightBridge',
        tags: ['LangChain', 'RAG', 'FAISS', 'OpenAI']
    },
    {
        title: 'MediQuery',
        description: 'A chat-based healthcare assistant with sub-second GPU inference, using RAG to improve response relevance.',
        detailedDescription: 'MediQuery is a specialized healthcare chatbot designed for fast and accurate medical information retrieval. It uses a fine-tuned SentenceTransformers model for creating dense vector embeddings of medical literature. The combination of a React frontend and a Flask backend, optimized for GPU inference, ensures a responsive user experience. Instruction tuning on the retrieval model improved relevance by 19%.',
        learnings: [
            'Fine-tuning SentenceTransformers for a domain-specific task.',
            'Optimizing Flask for low-latency GPU model serving.',
            'Bridging the gap between a research prototype and a usable application.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/MediQuery',
        imageSeed: 'MediQuery',
        tags: ['React', 'Flask', 'SentenceTransformers']
    },
    {
        title: 'StreamStyle',
        description: 'Live video stylization on AWS using React, Flask, and Docker, reducing compute overhead by 15%.',
        detailedDescription: 'StreamStyle applies artistic styles to live video streams in real-time. The architecture includes a React frontend for video capture, which sends frames to a Flask backend running a neural style transfer model (AdaIN). The entire service is containerized with Docker and deployed on AWS. The use of mixed-precision training and model quantization reduced GPU memory consumption and compute overhead by 15%.',
        learnings: [
            'Handling real-time video data streams between client and server.',
            'Deploying ML models in a scalable way using Docker and AWS.',
            'Applying model optimization techniques like mixed-precision training.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/StreamStyle',
        imageSeed: 'StreamStyle',
        tags: ['React', 'Docker', 'AWS', 'AdaIN']
    },
    {
        title: 'Gesture Control System',
        description: 'Full-stack gesture recognition using OpenCV and MobileNetV2 (87% accuracy) for real-time web interaction.',
        detailedDescription: 'This project allows users to control web applications using hand gestures captured via their webcam. An OpenCV pipeline processes the video feed, and a lightweight MobileNetV2 model classifies gestures. The results are sent from a Flask backend to a React frontend over WebRTC, enabling seamless, hardware-independent control directly in the browser.',
        learnings: [
            'Building a complete computer vision pipeline with OpenCV.',
            'Using WebRTC for low-latency, peer-to-peer communication.',
            'Optimizing a CNN model (MobileNetV2) for real-time inference.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/Gesture-Control-System',
        imageSeed: 'GestureControl',
        tags: ['OpenCV', 'MobileNetV2', 'WebRTC']
    },
];

export const SKILLS: Skill[] = [
    { category: 'Languages', list: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash'] },
    { category: 'Frameworks', list: ['PyTorch', 'TensorFlow', 'Flask', 'FastAPI', 'React', 'Angular', 'Spring Boot'] },
    { category: 'Libraries', list: ['AutoGen', 'D3.js', 'LangChain', 'SentenceTransformers', 'Material UI'] },
    { category: 'DevOps', list: ['Docker', 'AWS', 'Terraform', 'Jenkins', 'Git', 'Kafka'] },
    { category: 'Databases', list: ['PostgreSQL', 'CockroachDB', 'FAISS'] },
    { category: 'Tools', list: ['CI/CD', 'REST APIs', 'Prometheus', 'Grafana', 'Linux'] }
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
    session_id: str | None = None

@app.post("/api/query")
async def ask_question(query: Query):
    """
    Receives a question, passes it to the RAG pipeline,
    and returns a grounded answer.
    """
    try:
        result = await query_vector_db(
            question=query.question, 
            session_id=query.session_id
        )
        return {"answer": result.answer, "sources": result.sources}
    except Exception as e:
        return {"error": str(e)}, 500`
    },
    {
        language: 'TypeScript',
        title: 'Custom React Hook for API',
        code:
`import { useState, useEffect, useCallback } from 'react';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useApi<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setData(json);
      setError(null);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
}`
    }
];

export const WHAT_IM_LEARNING: LearningItem[] = [
    {
        title: "Advanced RAG Architectures",
        description: "Exploring self-corrective and adaptive RAG techniques to improve grounding and reduce hallucinations in complex Q&A tasks."
    },
    {
        title: "Large-Scale Model Serving",
        description: "Diving into technologies like vLLM and TensorRT-LLM for optimizing inference speed and throughput of large language models."
    },
    {
        title: "WebAssembly on the Frontend",
        description: "Investigating how Rust compiled to WebAssembly can be used to accelerate compute-intensive tasks directly in the browser."
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
Projects: ${JSON.stringify(PROJECTS)}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
