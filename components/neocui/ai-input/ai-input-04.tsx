'use client';

import { ArrowUp, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// Claude-inspired design
export default function AIInput_04() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 50,
        maxHeight: 200,
    });

    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setInputValue('');
            adjustHeight(true);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="relative border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 focus-within:border-orange-500 dark:focus-within:border-orange-400 transition-colors">
                    <div className="flex items-end gap-3 p-3">
                        <div className="w-6 h-6 rounded bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Sparkles className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <Textarea
                                ref={textareaRef}
                                placeholder="How can Claude help you today?"
                                disabled={isLoading}
                                className={cn(
                                    'w-full border-none bg-transparent resize-none p-0',
                                    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                                    'text-gray-900 dark:text-gray-100',
                                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                                    'text-base leading-6',
                                    'min-h-[26px] max-h-[160px]',
                                    isLoading && 'opacity-50',
                                )}
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    adjustHeight();
                                }}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === 'Enter' &&
                                        !e.shiftKey &&
                                        !isLoading
                                    ) {
                                        e.preventDefault();
                                        handleSubmit();
                                    }
                                }}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim() || isLoading}
                            className={cn(
                                'p-2 rounded-lg transition-all duration-200 flex-shrink-0',
                                inputValue.trim() && !isLoading
                                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed',
                            )}
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <ArrowUp className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
