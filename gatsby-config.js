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
  ],
};
