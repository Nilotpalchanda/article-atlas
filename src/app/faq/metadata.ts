export const FAQ_SCREEN_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: 'FAQ | ArticleAtlas',
  description:
    'Find answers to the most commonly asked questions about our blog platform.',
  keywords: ['FAQ', 'Frequently Asked Questions', 'Help', 'Support', 'Blog'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions',
    description: 'Get answers to your questions about our blog platform.',
    url: `${process.env.SITE_URL}/faq`,
    images: [
      {
        url: '/og-image.png',
        width: 225,
        height: 225,
        alt: 'FAQ ArticleAtlas',
      },
    ],
    type: 'website',
  },
};
