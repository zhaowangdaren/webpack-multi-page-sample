const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/pages/index.js',
    pageB: './src/pages/pageB.js'
  },
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['pageB'],
      filename: 'pageB.html',
      template: './src/pageB.html'
    })
  ]
}