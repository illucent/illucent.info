const path = require(`path`)
const glob = require(`glob`)


const PATHS = {
	src: path.join(__dirname, `src`),
}


module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/layouts/index.css'],
  extractors: [
    {
        // Custom extractor to allow special characters (like ":") in class names
        // See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
        extractor: class {
          static extract(content) {
            return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      extensions: [ `html`, `js` ],
    },
  ],
  whitelist: ['body', 'html'],
  whitelistPatterns: [ /body/, /headroom/, /ReactModal/, /ril/ ], // adjust for each project
}
