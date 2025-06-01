import { Suspense } from 'react';
import ChatInterface from './@chatinterface/page';
import PromptLibrary from '@/shared/home/PromptLibrary';
import { PromptLibrarySkeleton } from '@/shared/home/PromptLibrary/loading';
import { Metadata } from 'next';
import { CHAT_SCREEN_METADATA } from './metadata';

interface ChatPageProps {
  searchParams: { q?: string; prompt?: string };
}

export const metadata: Metadata = { ...CHAT_SCREEN_METADATA };

export default async function ChatPage({ searchParams }: ChatPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialMessage = resolvedSearchParams.q ?? resolvedSearchParams.prompt ?? '';

  return (
    <div className="mx-auto mb-20 w-full max-w-6xl px-4">
      <ChatInterface initialMessage={initialMessage} />
      <Suspense fallback={<PromptLibrarySkeleton />}>
        <PromptLibrary />
      </Suspense>
    </div>
  );
}
