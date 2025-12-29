import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MinimalNav } from './components/MinimalNav';
import { AppleHero } from './components/AppleHero';
import { StickySection, MinimalCard } from './components/StickySection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsGrid } from './components/SkillsGrid';
import { MinimalContact } from './components/MinimalContact';
import { TextReveal } from './components/TextReveal';
import { ResumeViewer } from './components/ResumeViewer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Chatbot } from './components/Chatbot';
import { AnimatedCounter } from './components/AnimatedCounter';
import { DemoSection } from './components/demos/DemoSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useScrollSpy } from './hooks/useScrollSpy';
import {
    NAV_LINKS,
    ABOUT,
    CURRENTLY_EXPLORING,
    EXPERIENCE,
    PROJECTS,
    SKILLS,
    CONTACT_INFO,
    STATS,
    TECH_STACK,
} from './constants';
import { Project } from './types';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Initialize smooth scrolling
    useSmoothScroll();

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

    return (
        <div className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
                style={{ scaleX: 0 }}
                initial={{ scaleX: 0 }}
            />

            <MinimalNav
                navLinks={NAV_LINKS}
                activeId={activeId}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
            />

            {/* Hero Section */}
            <section id="home" ref={sectionRefs[0] as React.RefObject<HTMLElement>}>
                <AppleHero
                    name="Vageesha Datta"
                    title="Software Engineer"
                    subtitle="Building scalable, high-performance software systems. Specializing in full-stack development, cloud infrastructure, and data-driven applications."
                />
            </section>

            {/* About Section */}
            <section
                id="about"
                ref={sectionRefs[1] as React.RefObject<HTMLElement>}
                className="relative py-32 md:py-48 bg-slate-50 dark:bg-slate-900"
            >
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-8 text-center"
                    >
                        About Me
                    </motion.p>

                    <div className="space-y-6 mb-16">
                        {ABOUT.split('\n\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 text-center leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20"
                    >
                        <AnimatedCounter stats={STATS} />
                    </motion.div>
                </div>
            </section>

            {/* Currently Exploring Section */}
            <section className="relative py-24 md:py-32 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4"
                        >
                            What I'm Into Right Now
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        >
                            Currently Exploring
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CURRENTLY_EXPLORING.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon === 'brain' && (
                                            <svg className="w-6 h-6 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                                            </svg>
                                        )}
                                        {item.icon === 'rocket' && (
                                            <svg className="w-6 h-6 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                            </svg>
                                        )}
                                        {item.icon === 'zap' && (
                                            <svg className="w-6 h-6 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        )}
                                        {item.icon === 'atom' && (
                                            <svg className="w-6 h-6 text-white dark:text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                                <circle cx="12" cy="12" r="2" />
                                                <ellipse cx="12" cy="12" rx="9" ry="4" />
                                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
                                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                                            {item.description}
                                        </p>
                                        {item.link && (
                                            <a
                                                href={item.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                                {item.link.text}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <StickySection
                id="experience"
                title="Experience"
                subtitle="Where I've Worked"
            >
                <div ref={sectionRefs[2] as React.RefObject<HTMLDivElement>}>
                    {EXPERIENCE.map((exp, index) => (
                        <MinimalCard
                            key={index}
                            title={exp.role}
                            subtitle={exp.company}
                            period={exp.period}
                            points={exp.points}
                            index={index}
                        />
                    ))}
                </div>
            </StickySection>

            {/* Projects Section */}
            <section
                id="projects"
                ref={sectionRefs[3] as React.RefObject<HTMLElement>}
                className="relative py-32 md:py-48 bg-slate-50 dark:bg-slate-900"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-20">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4"
                        >
                            Selected Work
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold"
                        >
                            Projects
                        </motion.h2>
                    </motion.div>

                    <ProjectShowcase
                        projects={PROJECTS}
                        onProjectClick={setSelectedProject}
                    />
                </div>
            </section>

            {/* Interactive Demos Section */}
            <section
                id="demos"
                ref={sectionRefs[4] as React.RefObject<HTMLElement>}
                className="relative py-32 md:py-48 bg-white dark:bg-slate-950"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-4"
                        >
                            Try It Yourself
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            AI Playground
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                        >
                            Explore interactive AI/ML demos running entirely in your browser.
                            No server required - powered by TensorFlow.js.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <DemoSection />
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <StickySection
                id="skills"
                title="Skills"
                subtitle="Technologies I Work With"
            >
                <div ref={sectionRefs[5] as React.RefObject<HTMLDivElement>}>
                    <SkillsGrid skills={SKILLS} />
                </div>
            </StickySection>

            {/* Contact Section */}
            <section
                id="contact"
                ref={sectionRefs[6] as React.RefObject<HTMLElement>}
                className="relative py-32 md:py-48 bg-slate-50 dark:bg-slate-900"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <MinimalContact
                        info={CONTACT_INFO}
                        onViewResume={() => setShowResume(true)}
                    />
                </div>
            </section>

            {/* Built With Section */}
            <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                            Built With
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {[...TECH_STACK.frontend, ...TECH_STACK.tools].map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            This portfolio was designed and built by Vageesha using modern web technologies.
                            <br />
                            Interactive AI demos powered by TensorFlow.js. AI assistant powered by Claude.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © {new Date().getFullYear()} Vageesha Datta Ganapaneni. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Modals */}
            <AnimatePresence>
                {showResume && (
                    <ResumeViewer
                        url="/Vageesha_Ganapaneni_Resume.pdf"
                        onClose={() => setShowResume(false)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <Chatbot />
        </div>
    );
};

export default App;
