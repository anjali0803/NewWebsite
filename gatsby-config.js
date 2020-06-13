module.exports = {
  siteMetadata: {
    title: `MatSci AI`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ai_matsci`,
    siteUrl: 'https://matsci.ai'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000966`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/matsci-logo.png`, // This path is relative to the root of the site.
      },
      
    },{
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "1234567",
          respectDNT: true,
          productionOnly: true,
      },
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
