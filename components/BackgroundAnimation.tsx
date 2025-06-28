
import React, { useEffect, memo } from 'react';

declare global {
    interface Window {
        tsParticles: any;
    }
}

interface BackgroundAnimationProps {
    darkMode: boolean;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ darkMode }) => {
    useEffect(() => {
        if (typeof window === 'undefined' || !window.tsParticles) {
            console.warn("tsParticles not found on window. Animation will not load.");
            return;
        }

        const options = {
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: darkMode ? "#94a3b8" : "#4f46e5", // slate-400 for dark, indigo-600 for light
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                    random: true,
                },
                size: {
                    value: 2,
                    random: true,
                },
                links: {
                    color: darkMode ? "#475569" : "#a5b4fc", // slate-600 for dark, indigo-300 for light
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    out_mode: "out",
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            detectRetina: true,
        };

        let container;
        window.tsParticles.load({ id: "tsparticles", options }).then(c => {
            container = c;
        });

        return () => {
            if (container) {
                container.destroy();
            }
        };
    }, [darkMode]);

    return <div id="tsparticles" className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default memo(BackgroundAnimation);
