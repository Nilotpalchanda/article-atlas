export const PROMPTS_SCREEN_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: 'Prompts | ArticleAtlas',
  description:
    'Explore a variety of writing prompts to inspire your next blog post on our platform.',
  keywords: ['Prompts', 'Writing Prompts', 'Inspiration', 'Blog', 'Ideas'],
  openGraph: {
    title: 'Prompts - Writing Inspiration',
    description:
      'Discover creative writing prompts to spark your imagination on ArticleAtlas.',
    url: `${process.env.SITE_URL}/prompts`,
    images: [
      {
        url: '/og-image.png',
        width: 225,
        height: 225,
        alt: 'Prompts ArticleAtlas',
      },
    ],
    type: 'website',
  },
};
