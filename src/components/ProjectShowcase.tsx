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
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Project visual - abstract representation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="relative w-32 h-32 md:w-48 md:h-48"
                                animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Abstract shapes */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600"
                                    animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-4 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center"
                                    animate={isHovered ? { rotate: -45 } : { rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </motion.div>
                            </motion.div>
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
                                    <div className="px-6 py-3 bg-white dark:bg-slate-900 rounded-full text-center text-sm font-medium text-slate-900 dark:text-white shadow-lg">
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
                        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 mb-4 block">
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
                            className="group inline-flex items-center gap-2 text-lg font-medium text-indigo-600 dark:text-indigo-400"
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
