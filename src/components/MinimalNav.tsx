import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';

interface MinimalNavProps {
    navLinks: NavLink[];
    activeId: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const MinimalNav: React.FC<MinimalNavProps> = ({
    navLinks,
    activeId,
    darkMode,
    toggleDarkMode
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl font-bold text-slate-900 dark:text-white"
                        whileHover={{ scale: 1.05 }}
                    >
                        VDG
                    </motion.a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`relative text-sm font-medium transition-colors ${
                                    activeId === link.id
                                        ? 'text-slate-900 dark:text-white'
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                                whileHover={{ y: -2 }}
                            >
                                {link.title}
                                {activeId === link.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-slate-900 dark:bg-white"
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        {/* Theme toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </motion.button>

                        {/* Mobile menu button */}
                        <motion.button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <motion.span
                                    className="block w-full h-0.5 bg-slate-900 dark:bg-white origin-right"
                                    animate={menuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                                />
                                <motion.span
                                    className="block w-full h-0.5 bg-slate-900 dark:bg-white"
                                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                                />
                                <motion.span
                                    className="block w-full h-0.5 bg-slate-900 dark:bg-white origin-right"
                                    animate={menuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-slate-950 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`text-3xl font-medium ${
                                        activeId === link.id
                                            ? 'text-slate-900 dark:text-white'
                                            : 'text-slate-400 dark:text-slate-500'
                                    }`}
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
