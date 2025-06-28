import { getCategoriesList } from '@/app/actions';
import ThreeDots from '@/components/ThreeDots';
import Link from 'next/link';

interface Category {
  category: string;
  categoryFrom: string;
}

interface QueryProps {
  query?: string;
  selectedFilter?: string;
}

export default async function CategoryList(query: QueryProps) {
  const { query: searchQuery, selectedFilter } = query;
  const categories = await getCategoriesList(searchQuery || '');

  const allCategory: Category = {
    category: 'All',
    categoryFrom: searchQuery || '',
  };
  const categoryList = searchQuery ? [allCategory, ...categories] : categories;

  const baseStyle =
    'inline-block cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold shadow transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm';
  const activeStyle =
    'scale-105 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg ring-2 shadow-blue-200';
  const inactiveStyle = 'bg-white text-black hover:bg-blue-50 hover:shadow-md';

  return (
    <section className="relative mb-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Topics
          <div className="mx-auto mt-1 h-1 w-16 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </h2>
      </div>

      <div className="relative flex w-full flex-wrap items-center gap-2 px-2 sm:gap-3 sm:px-0 md:gap-4">
        {categoryList.map(({ category, categoryFrom }: Category) => {
          const isAll = category === 'All';
          const isActive = isAll
            ? selectedFilter === 'All' || !selectedFilter
            : selectedFilter === category;

          return (
            <Link
              key={category}
              href={{ pathname: `/${categoryFrom}`, query: { f: category } }}
              prefetch
              className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              {category}
            </Link>
          );
        })}

        {!searchQuery && (
          <div className="relative ml-auto">
            <ThreeDots
              options={[
                { label: 'Option 1' },
                { label: 'Option 2' },
                { label: 'Option 3' },
              ]}
            />
          </div>
        )}
      </div>
    </section>
  );
}
