const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
            options: {
              name: 'replace-loader-test',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CopyrightWebpackPlugin({ name: 'copyright-plugin-test' })],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
