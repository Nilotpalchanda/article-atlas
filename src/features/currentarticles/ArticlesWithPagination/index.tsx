'use client';

import { useState, useCallback } from 'react';
import { getCurrentArticles } from '@/app/actions';
import { VerticalCard } from '@/components/card/VerticalCard';

interface Article {
  id: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  duration: string;
  rating: number;
  articleId: string;
}

interface ArticlesWithPaginationProps {
  initialArticles?: Article[];
  initialHasMore?: boolean;
  totalCount?: number;
  filterValue?: string;
}

export default function ArticlesWithPagination({
  initialArticles = [],
  initialHasMore = false,
  totalCount = 0,
  filterValue = '',
}: ArticlesWithPaginationProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const data = await getCurrentArticles({
        limit: 8,
        page: nextPage,
        filterValue,
      });
      setArticles((prev) => [...prev, ...data.articles]);
      setHasMore(data.hasMore);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, hasMore, currentPage, filterValue]);

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <VerticalCard key={article.id} {...article} />
        ))}
      </div>

      {hasMore && (
        <div className="mb-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="min-h-[40px] w-[200px] cursor-pointer bg-white px-3 py-2 text-sm font-medium shadow-sm transition-shadow hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoadingMore ? (
              <span className="flex items-center justify-center gap-2">
                <span className="border-gradient-to-r h-4 w-4 animate-spin rounded-full border-2 border-t-transparent from-blue-400 via-purple-400 to-pink-400"></span>
                Loading...
              </span>
            ) : (
              'Load more articles'
            )}
          </button>
        </div>
      )}

      {!hasMore && articles.length > 0 && (
        <div className="mb-12 text-center">
          <p className="text-gray-500">
            You&apos;ve reached the end! All {totalCount} articles loaded.
          </p>
        </div>
      )}
    </>
  );
}
