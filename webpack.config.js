const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({sourceMap: true})
  ]
}
