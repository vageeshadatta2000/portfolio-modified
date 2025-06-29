import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';
import { ResumeViewer } from './components/ResumeViewer';
import { Chatbot } from './components/Chatbot';
import { CodeShowcase } from './components/CodeShowcase';
import { LearningSection } from './components/LearningSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import BackgroundAnimation from './components/BackgroundAnimation';
import { useScrollSpy } from './hooks/useScrollSpy';
import {
    NAV_LINKS,
    PROFILE,
    ABOUT,
    EDUCATION,
    EXPERIENCE,
    PROJECTS,
    SKILLS,
    CONTACT_INFO,
    CODE_SNIPPETS,
    WHAT_IM_LEARNING,
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

    return (
        <div className="relative">
            <BackgroundAnimation darkMode={darkMode} />
            <Header
                navLinks={NAV_LINKS}
                activeId={activeId}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <Section id="home" ref={sectionRefs[0]} title="Welcome to My Portfolio" isFirst>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="md:w-2/3 space-y-4">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">Vageesha Datta Ganapaneni</h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{PROFILE}</p>
                        </div>
                        <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
                            <img src="https://github.com/vageeshadatta2000/portfolio-modified/blob/main/src/App.tsx#:~:text=MyResume.pdf" alt="Vageesha Datta" className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800" />
                             <div className="absolute inset-0 rounded-full border-4 border-indigo-500 animate-subtle-pulse"></div>
                        </div>
                    </div>
                </Section>

                <Section id="about" ref={sectionRefs[1]} title="About Me">
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{ABOUT}</p>
                </Section>

                 <Section id="experience" ref={sectionRefs[2]} title="Experience">
                    <ExperienceTimeline experiences={EXPERIENCE} />
                </Section>

                <Section id="projects" ref={sectionRefs[3]} title="Projects">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
                        ))}
                    </div>
                </Section>

                <Section id="skills" ref={sectionRefs[4]} title="Technical Skills">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SKILLS.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))}
                    </div>
                    <LearningSection items={WHAT_IM_LEARNING} />
                </Section>

                <Section id="code" ref={sectionRefs[5]} title="Code Showcase">
                    <CodeShowcase snippets={CODE_SNIPPETS} />
                </Section>

                <Section id="contact" ref={sectionRefs[6]} title="Get In Touch">
                    <div className="text-center">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
                        </p>
                        <div className="flex justify-center items-center gap-6">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors" aria-label="Email">
                                <MailIcon className="w-8 h-8"/>
                            </a>
                            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                                <LinkedinIcon className="w-8 h-8" />
                            </a>
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors" aria-label="GitHub">
                                <GithubIcon className="w-8 h-8" />
                            </a>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/MyResume.pdf" download="Vageesha_Datta_Ganapaneni_Resume.pdf" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all">
                                <DownloadIcon className="w-5 h-5"/>
                                Download Resume
                            </a>
                            <button onClick={() => setShowResume(true)} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-indigo-600 bg-white border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 dark:bg-slate-800 dark:text-indigo-300 dark:border-indigo-400 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                                <EyeIcon className="w-5 h-5"/>
                                View Resume
                            </button>
                        </div>
                    </div>
                </Section>
            </main>

            <footer className="text-center text-slate-500 dark:text-slate-400 py-8 mt-16 border-t border-slate-200 dark:border-slate-800">
                &copy; {new Date().getFullYear()} Vageesha Datta Ganapaneni. All Rights Reserved.
            </footer>

            {showResume && (
                <ResumeViewer url="/MyResume.pdf" onClose={() => setShowResume(false)} />
            )}
            
            {selectedProject && (
                <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
            
            <Chatbot />
        </div>
    );
};

export default App;
