import { HeroSection } from '@/components/landing/hero';

const Home = () => {
    return (
        <main className="bg-white dark:bg-black/5 overflow-x-hidden">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12 ">
                <HeroSection />
            </div>
            {/* <div className="flex flex-col items-center justify-center  gap-10">
                // <AIInput_01 />
                <AIInput_02 />
                <AIInput_03 />
                <AIInput_04 />
                <AIInput_05 />
                <AIInput_06 />
                <AIInput_07 />
            </div> */}
        </main>
    );
};

export default Home;
