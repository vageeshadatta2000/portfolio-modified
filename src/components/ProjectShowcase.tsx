import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectShowcaseProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, onProjectClick }) => {
    return (
        <div className="space-y-32">
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    project={project}
                    index={index}
                    onClick={() => onProjectClick(project)}
                />
            ))}
        </div>
    );
};

interface ProjectItemProps {
    project: Project;
    index: number;
    onClick: () => void;
}

// Project-specific animated visuals
const ProjectVisual: React.FC<{ index: number; isHovered: boolean }> = ({ index, isHovered }) => {
    // Vision-Based Web Automation Agent
    if (index === 0) {
        return (
            <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* Browser window */}
                <motion.div
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Browser header */}
                    <div className="h-6 bg-slate-100 dark:bg-slate-900 flex items-center gap-1.5 px-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    {/* Content area */}
                    <div className="p-4 space-y-2">
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                        <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded mt-4" />
                    </div>
                </motion.div>

                {/* AI Eye scanning */}
                <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center shadow-lg"
                    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                >
                    <svg className="w-8 h-8 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </motion.div>

                {/* Scanning line */}
                <motion.div
                    className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-slate-600 dark:via-slate-300 to-transparent"
                    initial={{ top: '30%' }}
                    animate={isHovered ? { top: ['30%', '80%', '30%'] } : { top: '30%' }}
                    transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
                />

                {/* Click indicator */}
                <motion.div
                    className="absolute bottom-8 right-8"
                    animate={isHovered ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : { scale: 1, opacity: 0.5 }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                >
                    <svg className="w-6 h-6 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.77 17.27l1.41-1.41 2.83 2.83-1.41 1.41-2.83-2.83zm4.24-14.14l-2.83 2.83 1.41 1.41 2.83-2.83-1.41-1.41zm4.95 4.95l2.83-2.83-1.41-1.41-2.83 2.83 1.41 1.41zM14 6v8h-4V6h4z"/>
                    </svg>
                </motion.div>
            </div>
        );
    }

    // MoodBoard AI
    if (index === 1) {
        return (
            <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* Grid of mood images */}
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className={`rounded-xl ${
                                i === 0 ? 'bg-gradient-to-br from-pink-300 to-rose-400' :
                                i === 1 ? 'bg-gradient-to-br from-slate-700 to-slate-900' :
                                i === 2 ? 'bg-gradient-to-br from-amber-200 to-orange-300' :
                                'bg-gradient-to-br from-sky-300 to-blue-400'
                            }`}
                            animate={isHovered ? {
                                scale: [1, 1.05, 1],
                                rotate: [0, i % 2 === 0 ? 2 : -2, 0]
                            } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                </div>

                {/* Connection nodes */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <motion.line
                            x1="25" y1="25" x2="75" y2="25"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-900 dark:text-white"
                            strokeDasharray="4"
                            animate={isHovered ? { strokeDashoffset: [0, -8] } : { strokeDashoffset: 0 }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.line
                            x1="25" y1="75" x2="75" y2="75"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-slate-900 dark:text-white"
                            strokeDasharray="4"
                            animate={isHovered ? { strokeDashoffset: [0, -8] } : { strokeDashoffset: 0 }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                        />
                    </svg>
                </motion.div>

                {/* AI Brain icon */}
                <motion.div
                    className="absolute -bottom-4 -right-4 w-14 h-14 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center shadow-lg"
                    animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
                >
                    <svg className="w-7 h-7 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/>
                    </svg>
                </motion.div>
            </div>
        );
    }

    // AI Agent Evaluation Framework
    if (index === 2) {
        return (
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                {/* GPU Cluster representation */}
                <div className="grid grid-cols-3 gap-1.5">
                    {[...Array(9)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 dark:bg-slate-200 rounded-lg flex items-center justify-center shadow-md"
                            animate={isHovered ? {
                                backgroundColor: ['#1e293b', '#059669', '#1e293b'],
                            } : {}}
                            transition={{ duration: 1, delay: i * 0.1, repeat: isHovered ? Infinity : 0 }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-emerald-400"
                                animate={isHovered ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.1, repeat: isHovered ? Infinity : 0 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Data flow lines */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {[0, 1, 2].map((row) => (
                            <motion.line
                                key={row}
                                x1="10" y1={25 + row * 25} x2="90" y2={25 + row * 25}
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-slate-600 dark:text-slate-400"
                                strokeDasharray="2"
                                animate={isHovered ? { strokeDashoffset: [0, -20] } : { strokeDashoffset: 0 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* Performance badge */}
                <motion.div
                    className="absolute -top-3 -right-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                >
                    +15% Throughput
                </motion.div>
            </div>
        );
    }

    // Default fallback
    return (
        <motion.div
            className="relative w-32 h-32 md:w-48 md:h-48"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute inset-0 rounded-3xl bg-slate-900 dark:bg-white"
                animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="absolute inset-4 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center"
                animate={isHovered ? { rotate: -45 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </motion.div>
        </motion.div>
    );
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, onClick }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={containerRef}
            style={{ opacity }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                {/* Image/Visual side */}
                <motion.div
                    style={{ y }}
                    className="w-full lg:w-1/2 relative group cursor-pointer"
                    onClick={onClick}
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-slate-900/10 dark:from-white/5 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Project visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ProjectVisual index={index} isHovered={isHovered} />
                        </div>

                        {/* View project button */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute bottom-6 left-6 right-6"
                                >
                                    <div className="px-6 py-3 bg-slate-900 dark:bg-white rounded-full text-center text-sm font-medium text-white dark:text-slate-900 shadow-lg">
                                        View Project
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Content side */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Project number */}
                        <span className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-4 block">
                            Project {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.slice(0, 4).map((tag, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        {/* View button */}
                        <motion.button
                            onClick={onClick}
                            className="group inline-flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white"
                            whileHover={{ x: 10 }}
                        >
                            Learn more
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
