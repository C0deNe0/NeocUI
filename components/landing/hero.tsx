'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrowseComponentsButton } from '../ui/browse-button';
import { BrowseBlocksButton } from '../ui/browse-block';
import Features from './features';
// import Tailwind from '../icons/tailwind';
// import { Sparkles } from 'lucide-react';
export function HeroSection() {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4  sm:px-6 md:py-6 lg:py-20 ">
            {/* left side - Title and the call to action */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-mono sm:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
                        Craft with{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-500 dark:from-yellow-400 dark:to-blue-400">
                            precision
                        </span>
                        <br />
                        build with{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-blue-200 dark:via-blue-400 dark:to-yellow-400">
                            ease
                        </span>
                        .
                    </h1>
                    <p className="mt-6  md:text-xl text-zinc-700 font-mono lg:text-[16px]/[20px] dark:text-zinc-300 max-w-lg">
                        A refined collection of{' '}
                        <span className="font-bold underline decoration-rose-500 decoration-2 dark:decoration-rose-400">
                            premium UI components
                        </span>{' '}
                        crafted with{' '}
                        <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-[#ade8f4] via-[#48cae4] to-[#0077b6] dark:from-yellow-300 dark:via-yellow-200 dark:to-blue-500">
                            Tailwind CSS
                        </span>{' '}
                        and{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
                            shadcn/ui
                        </span>{' '}
                        for modern React and Next.js applications.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-start w-full"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                        <BrowseComponentsButton />
                        <BrowseBlocksButton />
                    </div>
                </motion.div>

                <Features />
            </div>
        </div>
    );
}
