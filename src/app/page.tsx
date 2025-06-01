import { Suspense } from 'react';
import { HOME_SCREEN_METADATA } from './metadata';
import { Metadata } from 'next';
import SearchController from '@/shared/home/SearchContoller';
import CurrentArticles from '@/shared/home/CurrentArticles';
import PopularArticles from '@/shared/home/PopularArticles';
import PromptLibrary from '@/shared/home/PromptLibrary';

export const metadata: Metadata = { ...HOME_SCREEN_METADATA };

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="max-w-6xl px-4 py-4 md:py-8">
      <div className="mb-12 text-center">
        <SearchController />
      </div>
      <Suspense>
        <CurrentArticles />
        <PopularArticles />
        <PromptLibrary />
      </Suspense>
    </div>
  );
}
