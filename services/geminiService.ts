
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types.ts";
import { PORTFOLIO_CONTEXT } from "../constants.ts";

// We assume process.env is polyfilled in the HTML for the API key
declare const process: any;

class GeminiService {
    private ai: GoogleGenAI;
    private chat: Chat | null = null;
    
    constructor() {
        // This relies on the API_KEY being set on the polyfilled process.env
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.error("API_KEY environment variable not set in index.html script tag. The AI assistant will not work.");
        }
        // The GoogleGenAI constructor is now correctly imported as an ES module.
        this.ai = new GoogleGenAI({ apiKey: apiKey || "MISSING_API_KEY" });
    }
    
    private getSystemInstruction(): string {
        return `You are a polite, professional, and helpful AI assistant for Vageesha Datta Ganapaneni. Your goal is to answer questions from recruiters and hiring managers based *only* on the portfolio information provided below. Do not invent or infer any information. If a question cannot be answered from the context, politely state that you don't have that information. Keep your answers concise and relevant.

        Here is Vageesha's portfolio information:
        ---
        ${PORTFOLIO_CONTEXT}
        ---
        Start the conversation by introducing yourself and offering to answer questions about Vageesha's portfolio.`;
    }
    
    public async initializeChat(): Promise<ChatMessage | null> {
        try {
            this.chat = this.ai.chats.create({
                model: 'gemini-2.5-flash-preview-04-17',
                config: {
                    systemInstruction: this.getSystemInstruction(),
                },
            });
            
            // Send an empty message to get the initial greeting from the AI
            const response = await this.chat.sendMessage({ message: "" });
            return { role: 'model', text: response.text };

        } catch (error) {
            console.error("Failed to initialize Gemini chat:", error);
            return { role: 'model', text: "Sorry, the AI assistant is currently unavailable. Please check the API key and configuration." };
        }
    }
    
    public async * sendMessageStream(message: string): AsyncGenerator<string, void, unknown> {
        if (!this.chat) {
            yield "Chat not initialized. Please refresh.";
            return;
        }

        try {
            const result = await this.chat.sendMessageStream({ message });
            for await (const chunk of result) {
                yield chunk.text;
            }
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            yield "An error occurred while getting a response.";
        }
    }
}

export const geminiService = new GeminiService();