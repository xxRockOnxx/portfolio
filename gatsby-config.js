module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: "Lemuel Flores",
    description: "Lemuel Flores - Fullstack Web Developer",
    author: `@xxRockOnxx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        // https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
        siteUrl: process.env.URL,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        // Fathom server URL. Defaults to `cdn.usefathom.com`
        trackingUrl: "lemuel-fathom.herokuapp.com",
        // Unique site id
        siteId: "REQMN",
        // Domain whitelist
        whitelistHostnames: ["lemuelflores.netlify.com"],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
