const { join } = require('path');

module.exports = {
  entry: {
    background: join(__dirname, 'src/background.js'),
    content: join(__dirname, 'src/content.js'),
    data: join(__dirname, 'src/data.js'),
  },
  output: {
    path: __dirname,
    filename: 'output/[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
  devtool: 'source-map',
};