'use client';

import { Send, Wand2, ImageIcon, FileText } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { UseAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';

// Perplexity-inspired design
export default function AIInput_05() {
    const { textareaRef, adjustHeight } = UseAutoResizeTextarea({
        minHeight: 46,
        maxHeight: 180,
    });

    const [inputValue, setInputValue] = useState('');
    const [showAttachments, setShowAttachments] = useState(false);

    const handleSubmit = () => {
        setInputValue('');
        adjustHeight(true);
        setShowAttachments(false);
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-2xl w-full mx-auto">
                <div className="relative border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-end gap-2 p-2">
                        <div className="flex items-center gap-1 flex-shrink-0">
                            <button
                                onClick={() =>
                                    setShowAttachments(!showAttachments)
                                }
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <ImageIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </button>
                        </div>

                        <div className="flex-1 min-w-0">
                            <Textarea
                                ref={textareaRef}
                                placeholder="Ask anything..."
                                className={cn(
                                    'w-full border-none bg-transparent resize-none px-2 py-2',
                                    'placeholder:text-gray-500 dark:placeholder:text-gray-400',
                                    'text-gray-900 dark:text-gray-100',
                                    'focus-visible:ring-0 focus-visible:ring-offset-0',
                                    'text-sm leading-5',
                                    'min-h-[30px] max-h-[140px]',
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

                        <button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            className={cn(
                                'p-2 rounded-lg transition-all duration-200 flex-shrink-0',
                                inputValue.trim()
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed',
                            )}
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>

                    {showAttachments && (
                        <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Wand2 className="w-4 h-4" />
                                <span>
                                    Attach images, documents, or other files
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
