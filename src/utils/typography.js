import Typography from 'typography';


const typography = new Typography({
  title: 'Minimal',
  baseFontSize: '16px',
  baseLineHeight: 1.4142,
  scaleRatio: 3.157,
  headerFontFamily: 'Iosevka Web, monospace',
  bodyFontFamily: 'Iosevka Web, monospace',
  headerWeight: 700,
});


// Hot reload typography in development.
//if (process.env.NODE_ENV !== 'production') {
//  typography.injectStyles();
//}


export default typography;
