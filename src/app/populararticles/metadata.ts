export const VIEW_PARTICLES_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: "Popular Articles | ArticleAtlas",
  description: "Discover our most popular and trending articles curated just for you. Stay updated with the latest insights and stories.",
  keywords: [
    "popular articles",
    "trending articles",
    "articleatlas",
    "latest articles",
    "insights",
    "stories"
  ],
  openGraph: {
    title: "Popular Articles | ArticleAtlas",
    description: "Discover our most popular and trending articles curated just for you.",
    url: `${process.env.SITE_URL}/populararticles`,
    images: [
      {
        url: "/og-image.png",
        width: 225,
        height: 225,
        alt: "Popular Articles ArticleAtlas",
      },
    ],
    siteName: "ArticleAtlas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popular Articles | ArticleAtlas",
    description: "Discover our most popular and trending articles curated just for you.",
  },
}