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
    EXPERIENCE,
    PROJECTS,
    SKILLS,
    CONTACT_INFO,
    STATS,
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
                    title="AI/ML Engineer"
                    subtitle="Building intelligent systems that push the boundaries of what's possible with AI. Specializing in agentic AI evaluation, LLM systems, and distributed infrastructure."
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

                    <TextReveal className="text-center mb-16">
                        {ABOUT.split('\n\n')[0]}
                    </TextReveal>

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

            {/* Footer */}
            <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
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
