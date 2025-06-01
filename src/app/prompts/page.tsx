import { Suspense } from 'react';
import { PROMPTS_SCREEN_METADATA } from './metadata';
import { Metadata } from 'next';
import Image from 'next/image';
import { getPromptLibrary } from '../actions';
import { ArticleSkeleton } from './loading';
import PromptsWithPagination from '@/features/prompts/PromptsWithPagination';

export const metadata: Metadata = { ...PROMPTS_SCREEN_METADATA };
export const dynamic = 'force-dynamic';

export default function PromptsPage() {
  return (
    <div className="container mx-auto max-w-6xl flex-grow px-0 md:px-4">
      <Banner />
      <Suspense fallback={<ArticleSkeleton />}>
        <AllPrompts />
      </Suspense>
    </div>
  );
}

function Banner() {
  return (
    <div className="relative mb-10 h-48 w-full overflow-hidden sm:h-64 md:h-80">
      <Image
        src="/prompt.webp"
        alt="Prompt Library Banner"
        width={1200}
        height={800}
        priority
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-extrabold text-white uppercase drop-shadow-lg sm:text-4xl md:text-5xl">
          Prompt Library
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-base font-medium text-white/90 sm:text-lg md:text-xl">
          Discover our most current and trending prompts curated just for you.
        </p>
      </div>
    </div>
  );
}

async function AllPrompts() {
  const { prompts, hasMore, totalCount } = await getPromptLibrary({
    limit: 6,
    page: 1,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 md:px-0">
      <div className="mb-10 text-left">
        <h1 className="mb-2 text-xl font-bold text-black uppercase">
          Prompt Library
        </h1>
        <div className="mt-4 h-1 w-43 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>
      <PromptsWithPagination
        initialPrompts={prompts || []}
        initialHasMore={hasMore}
        totalCount={totalCount}
      />
    </div>
  );
}
