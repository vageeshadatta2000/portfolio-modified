import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { AnimatedSection } from './components/AnimatedSection';
import { AnimatedTimeline } from './components/AnimatedTimeline';
import { ProjectCard3D } from './components/ProjectCard3D';
import { AnimatedSkillBadge } from './components/AnimatedSkillBadge';
import { ResumeViewer } from './components/ResumeViewer';
import { Chatbot } from './components/Chatbot';
import { CodeShowcase } from './components/CodeShowcase';
import { LearningSection } from './components/LearningSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import { TypeWriter } from './components/TypeWriter';
import { AnimatedCounter } from './components/AnimatedCounter';
import { FloatingElements } from './components/FloatingElements';
import { ScrollProgress } from './components/ScrollProgress';
import { useScrollSpy } from './hooks/useScrollSpy';
import {
    NAV_LINKS,
    PROFILE,
    ABOUT,
    EXPERIENCE,
    PROJECTS,
    SKILLS,
    CONTACT_INFO,
    CODE_SNIPPETS,
    WHAT_IM_LEARNING,
    TYPING_TEXTS,
    STATS,
} from './constants';
import { Project } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, EyeIcon } from './components/Icons';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const sectionRefs = [
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
        useRef<HTMLElement>(null),
    ];

    const activeId = useScrollSpy(sectionRefs.map(ref => ref.current), { threshold: 0.3 });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const particlePositions = [
        { left: '50%', top: '5%' },
        { left: '80%', top: '20%' },
        { left: '95%', top: '50%' },
        { left: '80%', top: '80%' },
        { left: '50%', top: '95%' },
        { left: '20%', top: '80%' },
    ];

    return (
        <div className="relative min-h-screen">
            <ScrollProgress />
            <BackgroundAnimation darkMode={darkMode} />
            <FloatingElements />

            <Header
                navLinks={NAV_LINKS}
                activeId={activeId}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
                <AnimatedSection id="home" ref={sectionRefs[0]} title="Welcome to My Portfolio" isFirst>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <motion.div
                            className="md:w-2/3 space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Vageesha Datta
                                </span>
                                <br />
                                <span className="text-slate-800 dark:text-white">Ganapaneni</span>
                            </motion.h1>

                            <motion.div
                                className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold h-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <TypeWriter texts={TYPING_TEXTS} />
                            </motion.div>

                            <motion.p
                                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {PROFILE}
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <MailIcon className="w-5 h-5" />
                                    Get in Touch
                                </motion.a>
                                <motion.a
                                    href={CONTACT_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <GithubIcon className="w-5 h-5" />
                                    View GitHub
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full" />
                            </motion.div>

                            <img
                                src="/profile.jpg"
                                alt="Vageesha Datta"
                                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full object-cover shadow-2xl"
                            />

                            {particlePositions.map((pos, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-indigo-500 rounded-full"
                                    style={{ left: pos.left, top: pos.top }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.2,
                                        repeat: Infinity,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <AnimatedCounter stats={STATS} />
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection id="about" ref={sectionRefs[1]} title="About Me">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {ABOUT.split('\n\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection id="experience" ref={sectionRefs[2]} title="Experience">
                    <AnimatedTimeline experiences={EXPERIENCE} />
                </AnimatedSection>

                <AnimatedSection id="projects" ref={sectionRefs[3]} title="Projects">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard3D
                                key={index}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                                index={index}
                            />
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection id="skills" ref={sectionRefs[4]} title="Technical Skills">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SKILLS.map((skill, index) => (
                            <AnimatedSkillBadge key={index} skill={skill} index={index} />
                        ))}
                    </div>
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <LearningSection items={WHAT_IM_LEARNING} />
                    </motion.div>
                </AnimatedSection>

                <AnimatedSection id="code" ref={sectionRefs[5]} title="Code Showcase">
                    <CodeShowcase snippets={CODE_SNIPPETS} />
                </AnimatedSection>

                <AnimatedSection id="contact" ref={sectionRefs[6]} title="Get In Touch">
                    <div className="text-center">
                        <motion.p
                            className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                            Feel free to reach out—let's build something amazing together!
                        </motion.p>

                        <motion.div
                            className="flex justify-center items-center gap-6 mb-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {[
                                { href: `mailto:${CONTACT_INFO.email}`, icon: MailIcon, label: 'Email' },
                                { href: CONTACT_INFO.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                                { href: CONTACT_INFO.github, icon: GithubIcon, label: 'GitHub' },
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.label !== 'Email' ? '_blank' : undefined}
                                    rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="group relative p-4 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-white transition-colors"
                                    aria-label={item.label}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                    <item.icon className="w-8 h-8 relative z-10" />
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.a
                                href="/Vageesha_Ganapaneni_Resume.pdf"
                                download="Vageesha_Datta_Ganapaneni_Resume.pdf"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <DownloadIcon className="w-5 h-5" />
                                Download Resume
                            </motion.a>
                            <motion.button
                                onClick={() => setShowResume(true)}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-indigo-600 dark:text-indigo-300 bg-white dark:bg-slate-800 border-2 border-indigo-600 dark:border-indigo-400 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <EyeIcon className="w-5 h-5" />
                                View Resume
                            </motion.button>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </main>

            <motion.footer
                className="text-center text-slate-500 dark:text-slate-400 py-8 mt-16 border-t border-slate-200 dark:border-slate-800 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="flex items-center justify-center gap-2">
                    <span>&copy; {new Date().getFullYear()}</span>
                    <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Vageesha Datta Ganapaneni
                    </span>
                    <span>. All Rights Reserved.</span>
                </p>
            </motion.footer>

            <AnimatePresence>
                {showResume && (
                    <ResumeViewer url="/Vageesha_Ganapaneni_Resume.pdf" onClose={() => setShowResume(false)} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>

            <Chatbot />
        </div>
    );
};

export default App;
