const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer : {
    static : {
      directory : path.join(__dirname, 'dist') // O diretorio exato para rodar o devserver
    },
    compress: false, // para compactar o file em zip
    port: 8000 // numero da porta do devserver
  },
  entry : {
    index: './src/js/index.js'
  },
  mode : 'production' , // production / development
  output : {
    filename : '[name].js'
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