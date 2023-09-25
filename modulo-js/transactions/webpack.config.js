const path = require('path')

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
      use : ['style-loader', 'css-loader']
    }]
  }
}