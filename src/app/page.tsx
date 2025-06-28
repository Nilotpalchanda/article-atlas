import { Suspense } from 'react';
import { HOME_SCREEN_METADATA } from './metadata';
import { Metadata } from 'next';
import SearchController from '@/features/home/SearchContoller';
import CurrentArticles from '@/features/home/CurrentArticles';
import PopularArticles from '@/features/home/PopularArticles';
import PromptLibrary from '@/features/home/PromptLibrary';
import CategoryList from '@/features/home/CategoryList';

export const metadata: Metadata = { ...HOME_SCREEN_METADATA };

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-6xl px-4 py-4 md:py-8">
      <div className="mb-12 text-center">
        <SearchController />
      </div>
      <Suspense>
        <CategoryList />
        <CurrentArticles />
        <PopularArticles />
        <PromptLibrary />
      </Suspense>
    </div>
  );
}
