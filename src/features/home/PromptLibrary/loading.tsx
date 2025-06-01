export function PromptLibrarySkeleton() {
  return (
    <section className="max-w-6xl">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Prompt Library</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-h-[140px] rounded-lg border bg-white p-4">
            <div className="mb-3 h-6 w-16 animate-pulse rounded-full bg-gray-200"></div>
            <div className="mb-2 h-5 w-full animate-pulse rounded bg-gray-200"></div>
            <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
