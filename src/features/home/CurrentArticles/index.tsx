import { getCurrentArticles } from '@/app/actions';
import LargeVerticalCard from '@/components/card/LargeVerticleCard';
import Link from 'next/link';
import React from 'react';

interface ArticlePick {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

const CurrentArticles: React.FC = async () => {
  const { articles: picks } = await getCurrentArticles({
    limit: 3,
    page: 1,
    filterValue: '',
  });

  return (
    <section className="mb-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Current Articles
          <div className="mx-auto h-1 w-40 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </h2>
        <Link href="/currentarticles" className="text-sm text-black">
          View all
          <div className="mx-auto h-1 w-13 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </Link>
      </div>
      {picks && picks.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((pick: ArticlePick) => (
            <LargeVerticalCard key={pick.id} article={pick} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No articles available at the moment.</p>
      )}
    </section>
  );
};

export default CurrentArticles;
