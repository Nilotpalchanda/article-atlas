import Link from 'next/link';
import { getPromptLibrary } from '@/app/actions';
import { ArrowUpRight } from 'lucide-react';

interface Prompt {
  category: string;
  description: string;
  title: string;
}

export default async function PromptLibrary() {
  const { prompts } = await getPromptLibrary({ limit: 4 });

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Prompt Library</h2>
          <div className="w-35 mx-auto h-1 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
        <Link href="/prompts" className="text-sm text-black flex flex-col items-end">
          <span>View all</span>
          <div className="w-13 h-1 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {prompts.map((prompt: Prompt) => (
          <div
            className="cursor-pointer rounded-lg bg-white p-4 transition-shadow hover:shadow-md"
            key={prompt.title}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="inline-block rounded-md bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-2 py-1 text-xs font-medium text-blue-700 shadow-sm">
                {prompt.category}
              </span>
              <Link
                href={`/chat?prompt=${encodeURIComponent(prompt.title)}`}
                aria-label={`Use prompt: ${prompt.title}`}
                title={`Use prompt: ${prompt.title}`}
              >
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">{prompt.title}</h3>
            <p className="line-clamp-2 text-sm text-gray-600">
              {prompt.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
