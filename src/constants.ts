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

export const PROFILE = `Machine Learning Engineer & Full-Stack Developer specializing in Deep Learning, Computer Vision, Audio-Visual Learning, and Distributed AI Systems. Passionate about building scalable, production-ready ML systems.`;

export const TYPING_TEXTS = [
    "Machine Learning Engineer",
    "Deep Learning Researcher",
    "Computer Vision Specialist",
    "Full-Stack Developer",
    "Distributed Systems Engineer"
];

export const ABOUT = `I am passionate about building practical, end-to-end AI systems that solve real-world problems. My experience spans multi-GPU training for video-aligned Text-to-Audio models, scalable audio-visual frameworks combining speech separation and Active Speaker Detection, and full-stack development with Flask, React, and AWS.

I enjoy working across the stack—from optimizing model inference with CUDA and TensorRT to crafting responsive user interfaces—because it allows me to turn complex ideas into usable, impactful products. My expertise includes PyTorch, TensorFlow, distributed computing with NCCL and MPI, and cloud deployment with Docker and AWS.

What drives me is the challenge of creating systems that are both technically sound and meaningfully integrated into how people work and interact with technology.`;

export const EDUCATION: Education[] = [
    {
        institution: 'University of Texas at Dallas',
        degree: 'Master of Science in Computer Science',
        period: 'Aug 2022 – May 2025',
        gpa: '3.6/4.0',
        courses: 'Machine Learning, Design and Analysis of Algorithms, Operating Systems, Artificial Intelligence, Computer Vision, Natural Language Processing, Statistics in AI and ML'
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
        role: 'Graduate Student Research Assistant',
        company: 'University of Texas at Dallas',
        period: 'Aug 2024 - Dec 2024',
        points: [
            'Contributed to multi-GPU training and optimization of T2AV, a video-aligned Text-to-Audio model, using PyTorch and CUDA for efficient execution and temporal alignment performance.',
            'Co-developed T2AV-Bench for evaluating audio-visual alignment and consistency, incorporating contrastive learning, fault-tolerant evaluation, and distributed testing capabilities.'
        ]
    },
    {
        role: 'Graduate Assistant',
        company: 'University of Texas at Dallas',
        period: 'Jan 2023 - June 2023',
        points: [
            'Built a scalable audio-visual framework combining speech separation and Active Speaker Detection using PyTorch and NCCL, optimized for noisy real-world data on GPU clusters.',
            'Improved model robustness and throughput via dynamic loss weighting, GPU utilization tuning, and profiling with tools like perf, valgrind, and custom performance diagnostics.'
        ]
    },
    {
        role: 'Software Engineer',
        company: 'Fiserv',
        period: 'Dec 2021 - May 2022',
        points: [
            'Developed and maintained RESTful APIs using Flask and FastAPI to connect internal systems with third-party services, improving reliability and enabling seamless transaction processing.',
            'Spearheaded technical onboarding for 30+ merchants by building Python-based integration flows and React dashboards, improving onboarding efficiency by 35%.',
            'Containerized backend services with Docker and deployed them to AWS EC2, while supporting production with SQL diagnostics to reduce settlement delays.'
        ]
    },
    {
        role: 'Machine Learning Intern',
        company: 'Madras Scientific Research Foundation',
        period: 'April 2019 - Nov 2019',
        points: [
            'Engineered a lightweight Dense Rebar Recognition model with TensorFlow, improving inference time by 20% and enabling near real-time deployment.',
            'Achieved 98% model accuracy and aligned defect detection with industrial QA benchmarks, integrating checkpointing and recovery workflows.',
            'Designed scalable preprocessing pipelines using TensorFlow and NumPy, accelerating training cycles and streamlining GPU-based deployment workflows.'
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'Scalable Video Processing Backend with Style Transfer',
        description: 'Real-time video stylization system using PyTorch, deployed via Flask and Docker with RESTful APIs, integrated with React frontend.',
        detailedDescription: 'Developed a real-time video stylization system using PyTorch, deployed via Flask and Docker with RESTful APIs, and integrated with a React frontend for video uploads and live previews, enabling efficient high-I/O processing. Optimized backend performance with AdaIN, VGG-19, and mixed-precision training techniques, reducing flickering by 50% and computational overhead by 15%.',
        learnings: [
            'Handling real-time video data streams between client and server.',
            'Deploying ML models in a scalable way using Docker and AWS.',
            'Applying model optimization techniques like mixed-precision training.',
            'AdaIN architecture for arbitrary style transfer.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/StreamStyle',
        imageSeed: 'VideoStyleTransfer',
        tags: ['PyTorch', 'Flask', 'Docker', 'React', 'AdaIN', 'VGG-19']
    },
    {
        title: 'Real-Time Hand Gesture Control System',
        description: 'End-to-end gesture recognition system using OpenCV and TensorFlow with MobileNetV2, achieving 87% accuracy with hardware integration.',
        detailedDescription: 'Engineered an end-to-end gesture recognition system using OpenCV and TensorFlow with MobileNetV2, achieving 87% accuracy and enhancing inference speed through transfer learning. Designed a real-time video-to-image pipeline and integrated it with Flask and WebRTC to expose gesture actions over web-based interfaces, improving frame processing by 37%.',
        learnings: [
            'Real-time video processing with OpenCV.',
            'Transfer learning with MobileNetV2 for efficient inference.',
            'WebRTC integration for web-based gesture control.',
            'Hardware-agnostic system design.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/GestureControl',
        imageSeed: 'GestureControl',
        tags: ['TensorFlow', 'OpenCV', 'MobileNetV2', 'Flask', 'WebRTC']
    },
    {
        title: 'T2AV: Text-to-Audio-Video Alignment System',
        description: 'Multi-GPU training pipeline for video-aligned Text-to-Audio generation with contrastive learning and distributed evaluation.',
        detailedDescription: 'Contributed to multi-GPU training and optimization of T2AV, a video-aligned Text-to-Audio model, using PyTorch and CUDA for efficient execution and temporal alignment performance. Co-developed T2AV-Bench for evaluating audio-visual alignment and consistency, incorporating contrastive learning and distributed testing.',
        learnings: [
            'Multi-GPU training with PyTorch and CUDA.',
            'Contrastive learning for audio-visual alignment.',
            'Building evaluation benchmarks for ML models.',
            'Distributed systems for AI training.'
        ],
        repoUrl: 'https://github.com/vageeshadatta2000/T2AV',
        imageSeed: 'T2AV-AudioVisual',
        tags: ['PyTorch', 'CUDA', 'NCCL', 'Contrastive Learning', 'Multi-GPU']
    }
];

export const SKILLS: Skill[] = [
    { category: 'Languages', list: ['Python', 'C++', 'SQL', 'Bash', 'MATLAB'] },
    { category: 'Frameworks & Libraries', list: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'scikit-learn', 'OpenCV', 'NumPy', 'Pandas'] },
    { category: 'GPU/Distributed Computing', list: ['CUDA', 'NCCL', 'MPI', 'NVIDIA Nsight', 'TensorRT', 'gdb', 'valgrind', 'perf'] },
    { category: 'Cloud & DevOps', list: ['Docker', 'AWS (EC2, S3, Lambda)', 'Terraform', 'Git', 'Unix/Linux'] },
    { category: 'Technologies & Interests', list: ['Deep Learning', 'NLP', 'Computer Vision', 'Audio-Visual Learning', 'Contrastive Learning', 'Model Optimization', 'Distributed AI'] }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
    {
        language: 'Python',
        title: 'Multi-GPU Training with PyTorch DDP',
        code:
`import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

def setup_distributed(rank, world_size):
    dist.init_process_group(
        backend='nccl',
        init_method='env://',
        world_size=world_size,
        rank=rank
    )
    torch.cuda.set_device(rank)

def train_step(model, data, optimizer):
    optimizer.zero_grad()
    output = model(data)
    loss = compute_loss(output)
    loss.backward()
    optimizer.step()
    return loss.item()

# Wrap model with DDP
model = DDP(model.to(rank), device_ids=[rank])`
    },
    {
        language: 'TypeScript',
        title: 'Real-time WebRTC Video Stream Hook',
        code:
`import { useEffect, useRef, useState } from 'react';

function useVideoStream() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    async function initStream() {
      try {
        const mediaStream = await navigator.mediaDevices
          .getUserMedia({ video: true, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        setStream(mediaStream);
      } catch (err) {
        console.error('Failed to get video stream:', err);
      }
    }
    initStream();
    return () => stream?.getTracks().forEach(t => t.stop());
  }, []);

  return { videoRef, stream };
}`
    }
];

export const WHAT_IM_LEARNING: LearningItem[] = [
    {
        title: "Large-Scale Model Serving",
        description: "Diving into technologies like vLLM and TensorRT-LLM for optimizing inference speed and throughput at scale."
    },
    {
        title: "Multi-Modal AI Systems",
        description: "Exploring models that understand and process information from multiple sources like text, images, audio, and video."
    },
    {
        title: "Distributed Training Optimization",
        description: "Advanced techniques in multi-GPU and multi-node training, including gradient compression and pipeline parallelism."
    }
];

export const STATS = [
    { label: 'Years of Experience', value: 4, suffix: '+' },
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Technologies Mastered', value: 30, suffix: '+' },
    { label: 'Model Accuracy Achieved', value: 98, suffix: '%' }
];

export const CONTACT_INFO = {
    email: 'vageeshadattag@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vageeshadatta',
    github: 'https://github.com/vageeshadatta2000',
    phone: '+1(469) 805-1906',
    location: 'Dallas, Texas'
};

export const PORTFOLIO_CONTEXT = `
Vageesha Datta Ganapaneni's Profile: ${PROFILE}
About Vageesha: ${ABOUT}
Education: ${JSON.stringify(EDUCATION)}
Work Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS.map(p => ({title: p.title, description: p.description})))}
Technical Skills: ${JSON.stringify(SKILLS)}
`;
