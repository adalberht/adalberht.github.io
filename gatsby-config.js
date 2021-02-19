require(`dotenv`).config({
  path: `.env`,
});

const newsletterFeed = require(`./src/utils/newsletterFeed`);

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const withDefaults = require(`./utils/default-options`);

const options = withDefaults(require("./options"));
const { mdx = true } = options;
const { feed = true, feedTitle = "Blog by Albertus Angga R." } = options;
const coreOptions = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: options.postsPath,
        path: options.postsPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: options.pagesPath,
        path: options.pagesPath,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "autolink-headers",
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
  ].filter(Boolean),
};

module.exports = {
  ...coreOptions,
  siteMetadata: {
    siteTitle: "Albertus Angga Raharja",
    siteTitleAlt: `A blog by Albertus Angga R.`,
    siteHeadline: "A blog by Albertus Angga R.",
    defaultTitle: `Albertus Angga Raharja`,
    siteUrl: "https://albertus.dev",
    siteDescription:
      "Software Engineer. Writes about my journey as a New Grad/Junior Eng in Southeast Asia.",
    siteLanguage: "en",
    siteImage: "/site-image.png",
    author: "Albertus Angga Raharja",
  },
  plugins: [
    ...coreOptions.plugins,
    feed && {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed(feedTitle),
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
  ].filter(Boolean),
};
