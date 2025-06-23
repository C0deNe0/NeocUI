import { Flame } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';
import { Link as ViewTransitionLink } from 'next-view-transitions';

/**
 * Renders the header component for the landing page.
 *
 * This header is responsive, with a mobile and desktop layout. It includes:
 * - A logo with a flame icon
 * - Site name "NeoC UI"
 * - Navigation links
 * - Supports dark and light mode
 *
 * @returns {JSX.Element} The header component with responsive design
 */
const Header = () => {
    return (
        <>
            {/* header for mobiler */}
            <div className="sticky top-0 right-0 left-0 z-50">
                <div className="w-full bg-white dark:bg-black/5">
                    {/* rest of the header content */}
                    <div className="flex w-full flex-col items-center justify-center">
                        <div
                            className={`to-white-90 dark:boder-[rgba(70,70,70,0.7)] relative flex w-full items-center justify-center rounded-b-[28px] border-x border-b border-[rgda(230,230,230,0.7)] bg-linear-to-b from-white/90 via-gray-50/90 px-4 py-2.5 shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 ease-in-out sm:max-w-[1200px] sm:min-w-[800px] dark:from-zinc-900/90 dark:via-zinc-800/90 dark:mask-t-from-zinc-900/90`}
                        >
                            <div className="relative z-10 flex w-full items-center justify-between gap-2 p-2">
                                {/* logo section */}
                                <div className="flex items-center gap-6">
                                    <Link
                                        href={'/'}
                                        className="flex text-green-600 dark:text-green-400"
                                    >
                                        <Flame className="h-6 w-6 text-green-400 dark:text-green-300" />
                                        <span className="hidden font-bold sm:block">
                                            NeoC UI
                                        </span>
                                    </Link>{' '}
                                    <span className="text-zinc-300 dark:text-zinc-700">
                                        |
                                    </span>
                                    {/* desktop navigation  */}
                                    <div className="hidden items-center gap-4 sm:flex">
                                        <ViewTransitionLink
                                            href={
                                                'docs/components/background-paths'
                                            }
                                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                                        >
                                            components
                                        </ViewTransitionLink>
                                    </div>
                                </div>
                                {/* right side items */}

                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
