import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AppleHeroProps {
    name: string;
    title: string;
    subtitle: string;
}

export const AppleHero: React.FC<AppleHeroProps> = ({ name, title, subtitle }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-950 dark:to-slate-900" />

            {/* Floating gradient orbs */}
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
            >
                {/* Small intro text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm md:text-base uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-6"
                >
                    {title}
                </motion.p>

                {/* Large name - Apple style */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-900 dark:text-white mb-8"
                >
                    {name.split(' ').map((word, i) => (
                        <span key={i} className="block">
                            {word}
                        </span>
                    ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
