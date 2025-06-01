'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles } from 'lucide-react';
import { getChatHistory } from '@/app/actions';

export default function SearchController() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/chat?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleBadgeClick = (badgeText: string) => {
    router.push(`/chat?q=${encodeURIComponent(badgeText)}`);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSearch}>
          <div className="flex items-center rounded-full bg-white px-4 py-2 shadow-lg">
            <Search className="mr-2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Ask anything about articles, topics, or keywords"
              className="flex-1 border-none bg-transparent focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 p-1 transition hover:brightness-110"
              aria-label="Suggest a question"
              title="Suggest a question"
              tabIndex={-1}
              disabled
            >
              <Sparkles className="h-5 w-5 text-white" />
            </button>
          </div>
        </form>
      </div>
      <TryAsk onBadgeClick={handleBadgeClick} />
    </>
  );
}

type TryAskProps = {
  onBadgeClick: (query: string) => void;
};

type Prompt = { id: number; question: string };

const TryAsk: React.FC<TryAskProps> = ({ onBadgeClick }) => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getChatHistory().then((data) => {
      if (active) {
        setPrompts(
          (data || []).map((item: { id: string; question: string }) => ({
            id: Number(item.id),
            question: item.question,
          })),
        );
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mb-12 flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row sm:flex-wrap">
        <span className="text-sm text-black">Try asking:</span>
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-full bg-white px-4 py-1.5 text-xs shadow-lg"
          >
            <div className="h-4 w-69 rounded bg-gray-300"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!prompts.length) return null;

  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row sm:flex-wrap">
        <span className="text-sm text-black">Try asking:</span>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {prompts.map((prompt, idx) => (
            <button
              key={Number.isNaN(prompt.id) ? `prompt-${idx}` : prompt.id}
              className="cursor-pointer rounded-full bg-white px-4 py-1.5 text-xs shadow-md transition-shadow hover:bg-gradient-to-r hover:from-blue-100 hover:via-cyan-100 hover:to-teal-100 hover:shadow-md"
              onClick={() => onBadgeClick(prompt.question)}
              type="button"
            >
              {prompt.question}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
