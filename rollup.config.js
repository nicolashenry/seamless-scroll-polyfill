const pkg = require('./package.json');
const year = new Date().getFullYear();

export default {
  input: 'src/seamless-scroll.js',
  output: {
    file: 'dist/seamless-scroll.js',
    format: 'iife'
  },
  globals: ['window'],
  indent: true,
  strict: false,
  banner: `/* ${pkg.title} v${
    pkg.version
  } - ${year} - Dustan Kasten, Jeremias Menichelli - MIT License */`,
  footer: '/* modified by 阿卡琳 - MIT License */'
};
