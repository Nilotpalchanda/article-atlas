export const ABOUT_SCREEN_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: 'About Us | ArticleAtlas',
  description:
    'Learn more about our blog, our mission, and the team behind ArticleAtlas.',
  keywords: ['About', 'Blog', 'Team', 'Mission', 'ArticleAtlas'],
  openGraph: {
    title: 'About Us | ArticleAtlas',
    description: 'Discover the story and people behind ArticleAtlas.',
    type: 'website',
    url: `${process.env.SITE_URL}/about`,
    images: [
      {
        url: '/og-image.png',
        width: 225,
        height: 225,
        alt: 'About ArticleAtlas',
      },
    ],
  },
};
