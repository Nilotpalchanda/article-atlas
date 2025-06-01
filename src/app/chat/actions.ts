'use server';

type AIResponse = {
  aiResponse?: string;
  source: {
    id: string;
    title: string;
    description: string;
    category: string;
  };
  suggestions: string[];
  lastUsedPrompts?: string[];
};

export async function getAIChatResponse(query: string): Promise<AIResponse> {
  // Fetch data from the article API
  try {
    const res = await fetch(
      `${process.env.API_DOMAIN}/atlas-api/chat?q=${encodeURIComponent(query)}`,
      {
        cache: 'no-store',
      },
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error in AI api call:::', err);
    return {
      aiResponse: '',
      source: {
        id: '',
        title: '',
        description: '',
        category: '',
      },
      suggestions: [],
    };
  }
}
