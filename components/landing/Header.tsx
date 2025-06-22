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
        <div className="bg-white  dark:bg-black/5 w-full">
          {/* rest of the header content */}
          <div className="flex  justify-center items-center w-full flex-col">
            <div
              className={`
                            
                                flex items-center justify-center bg-linear-to-b from-white/90 via-gray-50/90 to-white-90
                                dark:from-zinc-900/90 dark:via-zinc-800/90 dark:mask-t-from-zinc-900/90
                                shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                                backdrop-blur-md
                                border-x border-b
                                border-[rgda(230,230,230,0.7)] dark:boder-[rgba(70,70,70,0.7)]
                                w-full sm:min-w-[800px] sm:max-w-[1200px]
                                rounded-b-[28px]
                 px-4 py-2.5
                                relative
                                transition-all duration-300 ease-in-out
                            `}
            >
              <div className="relative p-2 z-10 flex items-center justify-between w-full gap-2">
                {/* logo section */}
                <div className="flex items-center gap-6">
                  <Link href={'/'} className=" flex text-green-600 dark:text-green-400">
                    <Flame className="w-6 h-6 text-green-400 dark:text-green-300" />
                    <span className="hidden sm:block font-bold">NeoC UI</span>
                  </Link>{' '}
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  {/* desktop navigation  */}
                  <div className="hidden sm:flex items-center gap-4">
                    <ViewTransitionLink
                      href={'docs/components/background-paths'}
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
