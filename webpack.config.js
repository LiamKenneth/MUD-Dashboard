const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const HOST = "127.0.0.1";
const PORT = "9000";

const devServerUrl = "http://localhost:" + PORT + "/";

const config = {
  devtool: 'source-map',
  context: __dirname, // `__dirname` is root of project and `src` is source
  entry:
  [
    './src/index.js',
    './src/ui/styles.scss'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader', 'eslint-loader'] },
      { test: /\.jsx$/, exclude: /node_modules/, loader: ['babel-loader', 'eslint-loader'] },
      {
        test: /\.(sass|scss)$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: "dist/",
    noInfo: true,
    inline: true,
    compress: true,
    port: PORT,
    host: HOST,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // Output file name.
      template: './public/index.html', // Use our HTML file as a template for the new one.
      inject: 'body',
      alwaysWriteToDisk: true,
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
      },
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'styles.bundle.css'}),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin({
  outputPath: path.resolve(__dirname, 'dist')
})
  ],
};

module.exports = config;
