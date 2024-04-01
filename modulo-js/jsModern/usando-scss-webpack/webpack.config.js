const path = require('path');

module.exports = {
  devServer : {
    static : {
      directory : path.resolve(__dirname, 'dist') // O diretorio exato para rodar o devserver
    }
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};