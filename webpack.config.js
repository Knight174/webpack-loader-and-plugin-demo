const path = require('path');

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
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
