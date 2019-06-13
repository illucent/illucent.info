module.exports = {
  siteMetadata: {
    title: 'lab',
  },
plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },
],
};
