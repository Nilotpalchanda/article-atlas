import React from 'react';
import Image from 'next/image';

export const ArticleSkeleton = () => (
  <div className="px-4 md:px-0">
    {/* Main Content Section */}
    <div className="mb-10 text-left">
      <h1 className="mb-2 text-xl font-bold uppercase text-black">
        Current Articles
      </h1>
      <div className="mt-4 h-1 w-48 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>

    {/* Article Skeleton Loader */}

    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(12)].map((_, idx) => (
        <div
          key={idx}
          className="w-full rounded-lg border border-transparent bg-white shadow-lg"
        >
          <div className="relative h-32 w-full rounded-t-lg bg-gray-300"></div>
          <div className="p-4">
            <div className="mb-1 flex items-center text-xs text-gray-400">
              <span className="h-3 w-20 animate-pulse rounded bg-gray-300"></span>
              <div className="ml-2 flex">
                <span className="h-3 w-10 animate-pulse rounded bg-gray-300"></span>
              </div>
            </div>
            <div className="mb-1 h-5 w-3/4 animate-pulse rounded bg-gray-300"></div>
            <div className="mb-1 h-3 w-5/6 animate-pulse rounded bg-gray-300"></div>
            <div className="mt-auto flex items-center gap-2">
              <span className="h-4 w-20 animate-pulse rounded bg-gray-300"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="container mx-auto max-w-6xl flex-grow px-0 md:px-4">
      {/* Banner Section */}
      <div className="relative mb-10 h-48 w-full overflow-hidden sm:h-64 md:h-80">
        <Image
          src="/current-articles.webp"
          alt="Current Articles Banner"
          width={1200}
          height={800}
          priority
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-extrabold uppercase text-white drop-shadow-lg sm:text-4xl md:text-5xl">
            Current Articles
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base font-medium text-white/90 sm:text-lg md:text-xl">
            Discover our most popular and trending articles curated just for
            you.
          </p>
        </div>
      </div>
      <ArticleSkeleton />
    </div>
  );
}
