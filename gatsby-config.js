module.exports = {
  siteMetadata: {
    title: "Lemuel Flores",
    description: "Lemuel Flores - Fullstack Web Developer",
    author: `@xxRockOnxx`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Fathom server URL. Defaults to `cdn.usefathom.com`
        trackingUrl: 'lemuel-fathom.herokuapp.com',
        // Unique site id
        siteId: 'REQMN',
        // Domain whitelist
        whitelistHostnames: [
          'lemuelflores.netlify.com'
        ]
      }
    }
  ]
};
