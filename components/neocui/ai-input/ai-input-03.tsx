'use client';

import { Send, Mic, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// Gemini-inspired design
export default function AIInput_03() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 44,
        maxHeight: 180,
    });

    const [inputValue, setInputValue] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const handleSubmit = () => {
        setInputValue('');
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="relative rounded-3xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-end gap-2 p-3">
                        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>

                        <div className="flex-1 min-w-0">
                            <Textarea
                                ref={textareaRef}
                                placeholder="Enter a prompt here"
                                className={cn(
                                    'w-full border-none bg-transparent resize-none px-2 py-1',
                                    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                                    'text-gray-900 dark:text-gray-100',
                                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                                    'text-base leading-6',
                                    'min-h-[32px] max-h-[140px]',
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
                        </div>

                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setIsRecording(!isRecording)}
                                className={cn(
                                    'p-2 rounded-full transition-colors',
                                    isRecording
                                        ? 'bg-red-100 dark:bg-red-900/20 text-red-600'
                                        : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300',
                                )}
                            >
                                <Mic
                                    className={cn(
                                        'w-5 h-5',
                                        isRecording && 'animate-pulse',
                                    )}
                                />
                            </button>

                            <button
                                onClick={handleSubmit}
                                disabled={!inputValue.trim()}
                                className={cn(
                                    'p-2 rounded-full transition-all duration-200',
                                    inputValue.trim()
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed',
                                )}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
