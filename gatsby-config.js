module.exports = {
siteMetadata: {
    title: 'lab',
  },
plugins: [
   `gatsby-plugin-react-helmet`,
   `gatsby-plugin-sharp`,
   `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },
  {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
  },
},
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
}
]
};
