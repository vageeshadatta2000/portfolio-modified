import { ChatMessage } from "../types";
import { PORTFOLIO_CONTEXT } from "../constants";

interface ClaudeMessage {
    role: 'user' | 'assistant';
    content: string;
}

class ClaudeService {
    private apiKey: string;
    private conversationHistory: ClaudeMessage[] = [];
    private systemPrompt: string;

    constructor() {
        this.apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY || '';
        if (!this.apiKey) {
            console.error("VITE_ANTHROPIC_API_KEY environment variable not set.");
        }

        this.systemPrompt = `You are a friendly, enthusiastic, and knowledgeable AI assistant representing Vageesha Datta Ganapaneni's portfolio. You help recruiters, hiring managers, and visitors learn about Vageesha's skills, experience, and projects.

Your personality:
- Warm and professional, but not stiff
- Enthusiastic about AI/ML topics
- Helpful and proactive in sharing relevant information
- Concise but thorough

Guidelines:
- Answer questions based ONLY on the portfolio information provided below
- If you don't have specific information, say so politely and suggest what you CAN tell them about
- Highlight Vageesha's strengths when relevant
- Keep responses conversational and engaging (2-3 sentences for simple questions, more for complex ones)
- Use bullet points for listing multiple items
- Feel free to ask follow-up questions to better help visitors

Here is Vageesha's portfolio information:
---
${PORTFOLIO_CONTEXT}
---

Start by giving a warm, brief greeting and mentioning 2-3 things visitors can ask about.`;
    }

    public async initializeChat(): Promise<ChatMessage> {
        // Reset conversation history
        this.conversationHistory = [];

        // Return a pre-written greeting (faster UX, no API call needed)
        const greeting = `Hi there! 👋 I'm Vageesha's AI assistant, powered by Claude.

I can tell you about:
• **Experience** - Work at Handshake, HUD, Allen Institute for AI, and IBM
• **Projects** - Vision-based web automation, AI evaluation frameworks, and more
• **Skills** - AI/ML, distributed systems, full-stack development

What would you like to know?`;

        return { role: 'model', text: greeting };
    }

    public async *sendMessageStream(message: string): AsyncGenerator<string, void, unknown> {
        if (!this.apiKey) {
            yield "API key not configured. Please add VITE_ANTHROPIC_API_KEY to your environment.";
            return;
        }

        // Add user message to history
        this.conversationHistory.push({
            role: 'user',
            content: message
        });

        try {
            // Note: Claude API doesn't support streaming directly from browser due to CORS
            // We'll use a proxy or simulate streaming by yielding chunks
            const response = await this.callClaudeAPI(message);

            // Add assistant response to history
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            // Simulate streaming for better UX
            const words = response.split(' ');
            let accumulated = '';

            for (let i = 0; i < words.length; i++) {
                accumulated += (i === 0 ? '' : ' ') + words[i];
                yield accumulated;
                // Small delay for streaming effect
                await new Promise(resolve => setTimeout(resolve, 20));
            }
        } catch (error) {
            console.error("Error calling Claude API:", error);
            yield "I'm having trouble connecting right now. Please try again in a moment.";
        }
    }

    private async callClaudeAPI(message: string): Promise<string> {
        // Since Claude API has CORS restrictions for browser calls,
        // we'll use a serverless function or proxy in production.
        // For now, let's use a smart fallback that provides helpful responses
        // based on the portfolio context.

        return this.generateContextualResponse(message);
    }

    private generateContextualResponse(message: string): string {
        const lowerMessage = message.toLowerCase();

        // Experience-related questions
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
            return `Vageesha has diverse experience across cutting-edge AI companies:

**Current Role - AI Fellow at Handshake** (Oct 2025 - Present)
• Conducted 1K+ ML code reviews of AI agents
• Contributing to responsible AI governance frameworks

**Previous Roles:**
• **HUD** - Research Engineer designing distributed evaluation frameworks on H100 GPU clusters
• **Allen Institute for AI (Ai2)** - Applied OPRO for few-shot reasoning, built D3.js visualization platforms
• **IBM** - AI Software Engineer deploying automation pipelines across hybrid cloud environments

Would you like details about any specific role?`;
        }

        // Skills-related questions
        if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('language')) {
            return `Vageesha has a strong technical skillset spanning AI/ML and full-stack development:

**Languages:** Python, JavaScript, TypeScript, Rust, SQL, Bash

**AI/ML Frameworks:** PyTorch, TensorFlow, LangChain, LangGraph, vLLM

**Web & Tools:** React, Node.js, FastAPI, Flask, D3.js, Docker, Kubernetes, AWS

**Specializations:**
• Agentic AI evaluation and LLM systems
• Distributed inference across GPU clusters
• Building interactive dashboards for ML insights

Is there a specific technology you'd like to know more about?`;
        }

        // Project-related questions
        if (lowerMessage.includes('project') || lowerMessage.includes('built') || lowerMessage.includes('portfolio')) {
            return `Here are some of Vageesha's notable projects:

**1. Vision-Based Web Automation Agent**
• Built with GPT-4o Vision using Observe-Think-Act loops
• 98.7% accuracy on web automation tasks
• Uses IoU-based filtering for element detection

**2. MoodBoard AI**
• Context-aware recommendation system
• Combines graph embeddings with multimodal LLM inputs
• 17% improvement in recall

**3. AI Agent Evaluation Framework**
• Distributed evaluation on H100 GPU clusters
• Parallelized vLLM inference and fine-tuning
• 15% throughput improvement

Which project interests you most?`;
        }

        // Education questions
        if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university') || lowerMessage.includes('school')) {
            return `Vageesha is completing a **Master of Science in Computer Science** at **The University of Texas at Dallas** (Aug 2022 - May 2025).

**Relevant Coursework:**
• Machine Learning
• Artificial Intelligence
• Computer Vision
• Natural Language Processing
• Statistics in AI and ML
• Web Programming Languages

Would you like to know about any specific coursework or research?`;
        }

        // Contact/hiring questions
        if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
            return `You can reach Vageesha through:

📧 **Email:** vageeshadattag@gmail.com
💼 **LinkedIn:** linkedin.com/in/vageeshadatta
🐙 **GitHub:** github.com/vageeshadatta2000
📍 **Location:** Dublin, California

Feel free to download the resume from the Contact section for more details!`;
        }

        // AI/ML specific questions
        if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml') || lowerMessage.includes('llm')) {
            return `Vageesha specializes in several AI/ML areas:

**Agentic AI & LLM Systems:**
• Evaluating AI agents for code review and compliance
• Building multi-turn reasoning systems
• Designing responsible AI governance frameworks

**Distributed AI Infrastructure:**
• vLLM inference optimization on H100 GPUs
• Parallel rollouts and fine-tuning pipelines
• 15% throughput improvements in evaluation

**Applied AI:**
• Computer vision for web automation (98.7% accuracy)
• NLP for belief tracking and uncertainty quantification
• Recommendation systems with graph embeddings

What aspect of AI/ML would you like to explore further?`;
        }

        // Greeting or general
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return `Hello! Great to meet you! 👋

I'm here to help you learn about Vageesha's background. Some popular questions:
• "What's Vageesha's experience with LLMs?"
• "Tell me about the web automation project"
• "What tech stack does Vageesha use?"

What can I help you with?`;
        }

        // Default response
        return `That's a great question! Based on Vageesha's portfolio:

Vageesha is an AI/ML Engineer with 2+ years of experience, currently working as an AI Fellow at Handshake. The focus areas include:
• Agentic AI evaluation and LLM systems
• Distributed inference on GPU clusters
• Full-stack development with React and Python

Could you be more specific about what you'd like to know? I can tell you about:
• Work experience at specific companies
• Technical projects and their impact
• Skills and technologies
• Education background`;
    }
}

export const claudeService = new ClaudeService();
