export const VIEW_CURRENT_ARTICLES_METADATA = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: "Current Articles | ArticleAtlas",
  description: "Discover our most current and trending articles curated just for you. Stay updated with the latest insights and stories.",
  keywords: [
    "current articles",
    "trending articles",
    "articleatlas",
    "latest articles",
    "insights",
    "stories"
  ],
  openGraph: {
    title: "Current Articles | ArticleAtlas",
    description: "Discover our most current and trending articles curated just for you.",
    url: `${process.env.SITE_URL}/currentarticles`,
    images: [
      {
        url: "/og-image.png",
        width: 225,
        height: 225,
        alt: "Current Articles ArticleAtlas",
      },
    ],
    siteName: "ArticleAtlas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Articles | ArticleAtlas",
    description: "Discover our most current and trending articles curated just for you.",
  },
}