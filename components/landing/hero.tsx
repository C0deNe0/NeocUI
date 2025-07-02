'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrowseComponentsButton } from '../ui/browse-button';
import { BrowseBlocksButton } from '../ui/browse-block';
export function HeroSection() {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4  sm:px-6 md:py-6 lg:py-20 ">
            {/* left side - Title and the call to action */}

            <div className="w-full lg:w-[45%] flex-col items-center text-left space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100 ">
                        Welcome to{' '}
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400
                        dark:from-blue-400 dark:to-teal-500 "
                        >
                            Component Library
                        </span>
                    </h1>

                    <br />
                    <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
                        A collection of reusable components for your
                    </p>
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400
                        dark:from-blue-400 dark:to-teal-500 "
                    >
                        next project.
                    </span>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <BrowseComponentsButton />
                    <BrowseBlocksButton />
                </div>
            </div>
        </div>
    );
}
