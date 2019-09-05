module.exports = {
siteMetadata: {
    title: 'lab',
  },
plugins: [
   `gatsby-plugin-react-helmet`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-netlify-cache`,
   `gatsby-plugin-netlify`,
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
},
]
};
