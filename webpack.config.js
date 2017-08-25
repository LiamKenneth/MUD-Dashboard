const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const HOST = "localhost";
const PORT = "8181";


const config = {
  devtool: 'source-map',
  context: __dirname, // `__dirname` is root of project and `src` is source
  entry:
  [
    './src/index.tsx',
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
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      { test: /\.ts?$/, loader: "awesome-typescript-loader" },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.(sass|scss)$/, use: ExtractTextPlugin.extract({
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
  externals: {
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
    'react-addons-test-utils': 'react-dom', // <- added this
  },
};

module.exports = config;
