export function ArticleSkeleton() {
  return (
    <section className="mb-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Knowledge picks</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <article
            key={i}
            className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="h-48 w-[357px] animate-pulse bg-gray-300"></div>
            <div className="p-6">
              <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>
              <div className="rounde`d mb-4 h-12 w-full animate-pulse bg-gray-200"></div>
              <div className="h-5 w-20 animate-pulse rounded bg-gray-300"></div>
              <div className="mt-4">
                <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
