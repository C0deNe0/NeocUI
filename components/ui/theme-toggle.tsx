'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="cursor-pointer"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-black" />
            ) : (
                <Sun className="w-5 h-5 text-white" color="white" />
            )}
        </div>
    );
}
