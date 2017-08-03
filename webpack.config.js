var path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module:{
    rules: [
      {
         test:/\.jsx$/, 
         exclude: /node_modules|bower_components/,
         use: 'babel-loader'
      }
    ]
  }
}