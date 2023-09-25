const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer : {
    static : {
      directory : path.join(__dirname, 'dist')
    }
  },
  entry : {
    index: './src/js/index.js'
  },
  mode : 'production' ,
  output : {
    filename : '[name].min.js'
  },
  module : {
    rules : [{
      test : /\.css/i ,
      use : [miniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins : [
    new miniCssExtractPlugin()
  ]
}