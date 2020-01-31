const path = require('path');

const outputDir = path.resolve(__dirname, 'build/');
module.exports = {
  entry: path.resolve(__dirname, 'app/js/myjs.js'),
  output: {
    path: outputDir,
    filename: 'myjs.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader'],
    }],
  },
};
