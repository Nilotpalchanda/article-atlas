'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  KeyboardEvent,
} from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { getAIChatResponse } from '@/app/chat/actions';
import Image from 'next/image';

type Message = {
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  source?: {
    id: string;
    category: string;
    title: string;
    description: string;
  };
  suggestions?: string[];
};

interface ChatInterfaceProps {
  initialMessage: string;
}
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${ampm}`;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessage }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const processedInitialMessage = useRef<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0 && chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current!.scrollTo({
          top: chatContainerRef.current!.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [messages]);

  // Handle sending message
  const handleSendMessage = useCallback(
    async (messageContent: string = input) => {
      if (!messageContent.trim() || isLoading) return;

      const userMessage: Message = {
        role: 'user',
        content: messageContent,
        timestamp: getCurrentTime(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const aiResponseData = await getAIChatResponse(messageContent);
        const thinkingTime = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'ai',
              content:
                aiResponseData.aiResponse ||
                'Sorry, I could not find an answer.',
              timestamp: getCurrentTime(),
              source: aiResponseData.source,
              suggestions: aiResponseData.suggestions,
            },
          ]);
          setIsLoading(false);
        }, thinkingTime);
      } catch (error) {
        console.error('Error getting AI response:', error);
        setIsLoading(false);
      }
    },
    [input, isLoading],
  );

  // Handle initial message
  useEffect(() => {
    if (
      initialMessage &&
      initialMessage.trim() &&
      processedInitialMessage.current !== initialMessage
    ) {
      processedInitialMessage.current = initialMessage;
      setTimeout(() => handleSendMessage(initialMessage), 100);
    }
  }, [initialMessage, handleSendMessage]);

  const startNewChat = () => router.push('/');

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="mb-8 mt-8 max-w-6xl">
      <div className="rounded-lg bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-2 shadow-lg sm:p-4 md:p-6">
        {/* Chat Area */}
        <div className="mb-2 px-2 text-xs text-gray-500 sm:px-4 sm:text-sm">
          Today
        </div>
        <div
          ref={chatContainerRef}
          className="scrollbar-thin max-h-[60vh] min-h-[40vh] space-y-6 overflow-y-auto px-2 py-4 sm:max-h-[calc(100vh-400px)] sm:min-h-[calc(100vh-400px)] sm:px-4 sm:py-6"
        >
          <div className="chat-container scrollbar-thin flex-grow overflow-y-auto">
            {messages.map((message, id) => (
              <div key={id} className="mt-6 space-y-4 sm:mt-8">
                {message.role === 'user' ? (
                  <div className="flex justify-end">
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <Image
                        className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
                        src="/user.jpg"
                        height={28}
                        width={28}
                        alt="Nilotpal image"
                      />
                      <div className="flex w-full max-w-[90vw] flex-col gap-1 sm:max-w-[320px]">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-xs font-semibold tracking-wide text-gray-500 sm:text-sm">
                            Nilotpal
                          </span>
                          <span className="text-xs font-normal text-gray-500 sm:text-sm dark:text-gray-400">
                            {message.timestamp}
                          </span>
                        </div>
                        <div className="leading-1.5 flex flex-col rounded-e-xl rounded-es-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-3 py-2 text-teal-700 transition-shadow hover:shadow-md sm:px-4 sm:py-3">
                          <p className="text-sm font-normal text-gray-900 sm:text-sm">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex gap-2 sm:gap-2.5">
                        <Image
                          className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
                          height={28}
                          width={28}
                          src="/robot.webp"
                          alt="Robot image"
                        />
                        <div className="flex w-full flex-col gap-4">
                          <div className="gap-2.5">
                            <div className="mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                              <span className="text-xs font-semibold tracking-wide text-gray-500 sm:text-sm">
                                ARTICLE EXPERT AI OVERVIEW
                              </span>
                              <span className="text-xs font-normal text-gray-500 sm:text-sm dark:text-gray-400">
                                {message.timestamp}
                              </span>
                            </div>
                            <div className="leading-1.5 flex flex-col rounded-e-xl rounded-es-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-3 py-2 text-teal-700 transition-shadow hover:shadow-md sm:px-4 sm:py-3">
                              <span
                                className="content space-y-3 text-sm font-normal text-gray-900 [&_li>p]:m-0 [&_li>p]:my-3 [&_li]:ml-2 [&_ul]:list-disc [&_ul]:pl-6"
                                dangerouslySetInnerHTML={{
                                  __html: message.content,
                                }}
                              />
                              {/* </p> */}
                            </div>
                          </div>
                          {/* Sources Section */}
                          {message.source?.id && (
                            <div className="space-y-3">
                              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
                                SOURCES
                              </p>
                              <div className=" flex w-full flex-col gap-3 text-xs text-neutral-800 sm:flex-row sm:text-sm">
                                <div className="w-fit max-w-[90vw] rounded-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 p-3 text-teal-700 transition-shadow hover:shadow-md sm:max-w-sm sm:p-4">
                                  <Link
                                    className="mb-2 text-sm font-bold hover:underline sm:text-base"
                                    href={`/${message.source?.category}/${message.source?.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {message.source?.title}
                                  </Link>
                                  <p className="pt-2 text-sm text-gray-700 sm:text-sm">
                                    {message.source?.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* Follow-up Questions */}
                          {message.suggestions?.length ? (
                            <div className="space-y-3">
                              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">
                                YOU MIGHT ALSO WANT TO ASK:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {message.suggestions.map((question, index) => (
                                  <button
                                    key={index}
                                    className="cursor-pointer min-w-[180px] max-w-full flex-1 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-4 py-2 text-xs font-semibold text-teal-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-200 md:flex-none"
                                    style={{
                                      wordBreak: 'break-word',
                                      whiteSpace: 'normal',
                                    }}
                                    onClick={() => handleSendMessage(question)}
                                  >
                                    <span className="flex items-center gap-2">
                                      <svg
                                        className="h-4 w-4 text-teal-700 opacity-80"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M8 12h8m0 0l-4-4m4 4l-4 4"
                                        />
                                      </svg>
                                      {question}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <Image
                    className="h-7 w-7 rounded-full sm:h-8 sm:w-8"
                    height={28}
                    width={28}
                    src="/robot.webp"
                    alt="Robot image"
                  />
                  <div className="flex w-full max-w-[90vw] flex-col gap-1 sm:max-w-[320px]">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-xs font-semibold tracking-wide text-gray-500 sm:text-sm">
                        ARTICLE EXPERT AI OVERVIEW | Thinking...
                      </span>
                    </div>
                    <div className="rounded-2xl bg-white p-3 shadow-sm sm:p-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 w-full bg-transparent p-2 sm:p-4">
          <div className="relative rounded-2xl border border-neutral-200 bg-white shadow-lg">
            <div className="flex">
              <textarea
                className="m-2 min-h-12 grow resize-none text-xs outline-none sm:m-4 sm:min-h-16 sm:text-sm"
                placeholder="Type your question here ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                maxLength={4000}
              />
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              <div className="text-xs">{input.length}/4000</div>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 p-2 text-teal-700 shadow-md transition hover:brightness-110"
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                aria-label="Send"
                type="button"
              >
                <ArrowUp />
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center justify-between gap-2 sm:mt-4 sm:flex-row">
            <div className="text-xs text-gray-500 sm:text-sm">
              Need to start over?
            </div>
            <button
              onClick={startNewChat}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-3 py-1.5 text-xs text-teal-700 shadow-md transition hover:brightness-110 sm:px-4 sm:py-2 sm:text-base"
              type="button"
            >
              Start a new chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
