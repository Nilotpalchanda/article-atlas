'use server';

export async function loadMorePrompts({ limit = 9, page = 1 }) {
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
