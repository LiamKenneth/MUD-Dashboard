const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname, // `__dirname` is root of project and `src` is source
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: "./dist",
    noInfo: true,
    compress: true,
    port: 9000,
    hot:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // Output file name.
      template: './public/index.html', // Use our HTML file as a template for the new one.
      inject: 'body',
    }),
       new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
