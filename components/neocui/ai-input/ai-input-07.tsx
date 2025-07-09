'use client';

import { Send, Sparkles, Hash } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// Discord/Slack-inspired design
export default function AIInput_07() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 44,
        maxHeight: 180,
    });

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        setInputValue('');
        adjustHeight(true);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="relative rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                    <div className="flex items-end gap-2 p-2">
                        <div className="w-6 h-6 rounded bg-gray-300 dark:bg-black/40 flex items-center justify-center flex-shrink-0 mt-1">
                            <Hash className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <Textarea
                                ref={textareaRef}
                                placeholder="Message #ai-chat"
                                className={cn(
                                    'w-full border-none bg-transparent resize-none px-2 py-1',
                                    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                                    'text-gray-900 dark:text-gray-100',
                                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                                    'text-sm leading-5',
                                    'min-h-[28px] max-h-[140px]',
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

                        <div className="flex items-center gap-1 flex-shrink-0">
                            <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <Sparkles className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!inputValue.trim()}
                                className={cn(
                                    'p-1.5 rounded transition-all duration-200',
                                    inputValue.trim()
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed',
                                )}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
