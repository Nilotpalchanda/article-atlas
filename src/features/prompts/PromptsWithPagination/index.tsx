'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { loadMorePrompts } from '@/app/prompts/actions';

interface Prompt {
  id: number;
  title: string;
  category: string;
  prompt: string;
  description: string;
}

interface PromptsWithPaginationProps {
  initialPrompts?: Prompt[];
  initialHasMore?: boolean;
  totalCount?: number;
}

export default function PromptsWithPagination({
  initialPrompts = [],
  initialHasMore = false,
  totalCount = 0,
}: PromptsWithPaginationProps) {
  const [prompts, setPrompts] = useState<Prompt[]>(initialPrompts);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const data = await loadMorePrompts({ limit: 6, page: nextPage });
      setPrompts(prev => [...prev, ...data.prompts]);
      setHasMore(data.hasMore);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error loading more prompts:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, hasMore, currentPage]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map(prompt => (
          <div
            key={prompt.id}
            className="flex h-full flex-col rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded-md bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-2 py-1 text-xs font-medium text-blue-700 shadow-sm">
                  {prompt.category}
                </span>
              </div>
              <h2 className="mb-2 font-semibold text-gray-900">
                {prompt.title}
              </h2>
              <div className="mb-4 rounded-lg bg-gray-50">
                <p className="line-clamp-3 text-sm text-gray-700">
                  {prompt.description}
                </p>
              </div>
              <div className="mt-auto">
                <Link
                  href={`/chat?prompt=${encodeURIComponent(prompt.title)}`}
                  className="block w-full rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 text-center font-semibold text-white transition hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
                >
                  Use this prompt
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="w-[200px] min-h-[40px] px-3 py-2 text-sm font-medium bg-white disabled:opacity-60 disabled:cursor-not-allowed shadow-sm transition-shadow hover:shadow-md"
          >
            {isLoadingMore ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border-t-transparent"></span>
                Loading...
              </span>
            ) : (
              'Load more prompts'
            )}
          </button>
        </div>
      )}

      {!hasMore && prompts.length > 0 && (
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            You&apos;ve reached the end! All {totalCount} prompts loaded.
          </p>
        </div>
      )}
    </>
  );
}
