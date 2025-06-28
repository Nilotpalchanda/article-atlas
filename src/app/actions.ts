'use server';

type Prompt = {
  id: string;
  title: string;
};

export async function getCurrentArticles({
  limit = 0,
  filterValue = '',
}: {
  limit?: number;
  filterValue?: string;
}) {
  console.log(
    'Fetching current articles with limit:',
    limit,
    'and filter:',
    filterValue,
  );
  try {
    // Enforce a maximum limit to avoid fetching too many articles
    const response = await fetch(
      `${process.env.API_DOMAIN}/atlas-api/current-articles?limit=${limit}&filterValue=${encodeURIComponent(filterValue)}`,
      { cache: 'no-cache' },
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Failed to fetch current articles:', error);
    throw new Error('Unable to fetch current articles at this time.');
  }
}

export async function getPopularArticles({ limit = 0 }) {
  try {
    // Enforce a maximum limit to avoid fetching too many articles
    const response = await fetch(
      `${process.env.API_DOMAIN}/atlas-api/popular-articles?limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Failed to fetch popular articles:', error);
    throw new Error('Unable to fetch popular articles at this time.');
  }
}

export async function getPromptLibrary({ limit = 0, page = 1 }) {
  try {
    const response = await fetch(
      `${process.env.API_DOMAIN}/atlas-api/prompts-library?limit=${limit}&page=${page}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch prompt library:', error);
    throw new Error('Unable to fetch prompt library at this time.');
  }
}

export async function getChatHistory() {
  try {
    // Simulate API delay
    const response = await fetch(
      `${process.env.API_DOMAIN}/atlas-api/lastUsedPrompts`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { lastUsedPrompts } = await response.json();
    return (lastUsedPrompts as Prompt[]).map((prompt: Prompt) => ({
      id: prompt.id,
      question: prompt.title,
    }));
  } catch (error) {
    console.error('Failed to fetch chat history:', error);
    throw new Error('Unable to fetch chat history at this time.');
  }
}

export async function getCategoriesList(type?: string) {
  try {
    const baseUrl = `${process.env.API_DOMAIN}/atlas-api/categories`;
    const url = type ? `${baseUrl}?type=${encodeURIComponent(type)}` : baseUrl;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { categories } = await response.json();
    return categories;
  } catch (error) {
    console.error('Failed to fetch categories list:', error);
    throw new Error('Unable to fetch categories list at this time.');
  }
}
