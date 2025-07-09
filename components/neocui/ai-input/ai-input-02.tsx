'use client';

import { ArrowUp, Paperclip } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// ChatGPT-inspired minimal design
export default function AIInput_02() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 48,
        maxHeight: 200,
    });

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        setInputValue('');
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="relative border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-black/40 shadow-sm">
                    <Textarea
                        ref={textareaRef}
                        placeholder="Message ChatGPT..."
                        className={cn(
                            'w-full border-none bg-transparent resize-none pl-4 pr-20 py-3',
                            'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                            'text-gray-900 dark:text-gray-100',
                            'focus-visible:ring-0 focus-visible:ring-offset-0',
                            'text-sm leading-6',
                            'min-h-[48px] max-h-[200px]',
                        )}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            adjustHeight();
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }}
                    />

                    <div className="absolute right-2 bottom-2 flex items-center gap-1">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <Paperclip className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            className={cn(
                                'p-1.5 rounded-lg transition-all duration-200',
                                inputValue.trim()
                                    ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed',
                            )}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
