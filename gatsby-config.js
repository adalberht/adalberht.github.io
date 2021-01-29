require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: "Albertus Angga Raharja",
    siteHeadline: "Albertus Angga R. Personal Website",
    siteTitleAlt: `Albertus Angga R. Personal Website`,
    defaultTitle: `Albertus Angga Raharja`,
    siteUrl: "https://albertus.dev",
    siteDescription:
      "Software Engineer. Writes about my journey as a New Grad/Junior Eng in Southeast Asia.",
    siteLanguage: "en",
    siteImage: "/icon.png",
    author: "Albertus Angga Raharja",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: "MMM DD 'YY",
        navigation: [
          {
            title: `🏠 Home`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/albertusdev`,
          },
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/albertusdev`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/albertusdev/`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-theme-ui",

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `albertus.dev | Albertus Angga Raharja`,
    //     short_name: `albertus.dev`,
    //     description: `Albertus Angga Raharja's personal website`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#6B46C1`,
    //     display: `standalone`,
    //     icons: [
    //       {
    //         src: `/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
