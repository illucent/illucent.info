module.exports = {
  siteMetadata: {
    title: 'lab',
  },
plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: ["gatsby-remark-copy-linked-files"],
    },
  },
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "../images/favicons/android-chrome-512x512.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }
]
};
