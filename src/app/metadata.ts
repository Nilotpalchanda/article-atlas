export const HOME_SCREEN_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: 'Home | ArticleAtlas',
  description:
    'Welcome to the ArticleAtlas home page. Discover articles, tutorials, and insights.',
  keywords: ['blog', 'articles', 'tutorials', 'insights', 'home'],
  openGraph: {
    title: 'Home | ArticleAtlas',
    description: 'Discover the latest articles and tutorials on ArticleAtlas.',
    siteName: 'ArticleAtlas',
    type: 'website',
    url: `${process.env.SITE_URL}`,
    images: [
      {
        url: '/og-image.png',
        width: 225,
        height: 225,
        alt: 'ArticleAtlas Home Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | ArticleAtlas',
    description: 'Discover the latest articles and tutorials on ArticleAtlas.',
  },
};
