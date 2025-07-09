'use client';

import { ArrowUp, Bot, Zap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// Minimal dark-first design
export default function AIInput_06() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 48,
        maxHeight: 200,
    });

    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = () => {
        setInputValue('');
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto">
                <div
                    className={cn(
                        'relative rounded-2xl transition-all duration-200',
                        'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700',
                        isFocused &&
                            'ring-2 ring-blue-500/20 border-blue-500/50',
                    )}
                >
                    <div className="flex items-end gap-3 p-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <Textarea
                                ref={textareaRef}
                                placeholder="What's on your mind?"
                                className={cn(
                                    'w-full border-none bg-transparent resize-none p-0',
                                    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                                    'text-gray-900 dark:text-gray-100',
                                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                                    'text-base leading-6',
                                    'min-h-[24px] max-h-[160px]',
                                )}
                                value={inputValue}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
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
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            className={cn(
                                'p-2 rounded-xl transition-all duration-200 flex-shrink-0',
                                inputValue.trim()
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed',
                            )}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {isFocused && (
                    <div className="flex items-center justify-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <Zap className="w-3 h-3 mr-1" />
                        Press Enter to send
                    </div>
                )}
            </div>
        </div>
    );
}
