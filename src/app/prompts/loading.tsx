import React from 'react';
import Image from 'next/image';

export const ArticleSkeleton = () => (
  <div className="mx-auto max-w-6xl px-4 pb-8 md:px-0">

    {/* Article Skeleton Loader */}
    <div className="mx-auto max-w-6xl px-4 pb-8 md:px-0">

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-[357px] rounded-lg bg-white shadow-sm"
          >
            <div className="p-6">
              <div className="mb-3 h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
              <div className="mb-2 h-5 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="mb-4 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
    </div>
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="container mx-auto max-w-6xl flex-grow px-0 md:px-4">
      {/* Banner Section */}
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
          <h1 className="text-2xl font-extrabold uppercase text-white drop-shadow-lg sm:text-4xl md:text-5xl">
            Prompt Library
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base font-medium text-white/90 sm:text-lg md:text-xl">
            Discover our most current and trending promts curated just for you.
          </p>
        </div>
      </div>
      <ArticleSkeleton />
    </div>
  );
}
