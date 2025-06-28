import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';
import { BotIcon, SendIcon, XIcon, UserIcon, LoaderIcon } from './Icons';

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const initializeChat = useCallback(async () => {
        setIsLoading(true);
        setMessages([]);
        const initialMessage = await geminiService.initializeChat();
        if (initialMessage) {
            setMessages([initialMessage]);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            initializeChat();
            inputRef.current?.focus();
        }
    }, [isOpen, initializeChat]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const stream = geminiService.sendMessageStream(input);
        let modelResponse = '';
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        try {
            for await (const chunk of stream) {
                modelResponse += chunk;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error streaming response:", error);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = "Sorry, I encountered an error. Please try again.";
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50 animate-subtle-pulse"
                aria-label="Open AI Assistant"
            >
                <BotIcon className="w-8 h-8"/>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] h-[calc(100vh-5rem)] max-w-md max-h-[70vh] z-50 flex flex-col animate-fade-in-up">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col h-full">
                <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <BotIcon className="w-6 h-6 text-indigo-500"/>
                        <h2 className="font-bold text-lg text-slate-800 dark:text-white">AI Assistant</h2>
                    </div>
                     <button onClick={() => setIsOpen(false)} className="p-2 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
                        <XIcon className="w-6 h-6"/>
                    </button>
                </header>
                <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center"><BotIcon className="w-5 h-5 text-indigo-500"/></div>}
                            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-lg' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-lg'}`}>
                                <p className="text-sm break-words whitespace-pre-wrap">{msg.text}</p>
                            </div>
                            {msg.role === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center"><UserIcon className="w-5 h-5 text-slate-600 dark:text-slate-200"/></div>}
                        </div>
                    ))}
                    {isLoading && messages.length > 0 && messages[messages.length-1].role === 'user' && (
                         <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center"><BotIcon className="w-5 h-5 text-indigo-500"/></div>
                            <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-lg">
                               <LoaderIcon className="w-5 h-5 animate-spin"/>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my projects..."
                            disabled={isLoading}
                            className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button type="submit" disabled={isLoading} className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors">
                           <SendIcon className="w-5 h-5"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
