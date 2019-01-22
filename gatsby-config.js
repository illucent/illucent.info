module.exports = {
  siteMetadata: {
    title: 'lab',
  },
plugins: [
  'gatsby-plugin-react-helmet',
  {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Iosevka Web'],
          urls: ['/fonts/iosevka/webfont.css'],
        },
      },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },
],
};
