'use client';

import { Button } from './button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

export function BrowseComponentsButton() {
    return (
        <Link
            href={'/docs/components/action-Search-bar'}
            className="flex items-center gap-8"
        >
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
                <Button
                    className={cn(
                        'bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-500 text-white hover:from-blue-600 hover:to-teal-500 dark:hover:from-blue-500 dark:hover:to-teal-400',
                        'text-lg font-semibold',
                    )}
                >
                    <span className="font-medium">Browse Components</span>
                    <ArrowDownRight className="w-5 h-5 rotate-[270deg]" />
                </Button>
            </motion.div>
        </Link>
    );
}
