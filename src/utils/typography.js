import Typography from 'typography';


const typography = new Typography({
  title: 'Minimal',
  baseFontSize: '16px',
  baseLineHeight: 1.42,
  scaleRatio: 3.157,
  headerFontFamily: 'Iosevka Web, monospace',
  bodyFontFamily: 'Iosevka Web, monospace',
  headerWeight: 700,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});


// Hot reload typography in development.
//if (process.env.NODE_ENV !== 'production') {
//  typography.injectStyles();
//}


export default typography;
