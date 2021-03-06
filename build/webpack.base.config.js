const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!postcss-loader'
      })
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1'
          + '&localIdentName=[name]__[local]___[hash:base64:5]'
          + '!postcss-loader!sass-loader'
      })
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }]
  },
  stats: {
    colors: true
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './index.html'
    }, {
      from: './manifest.json'
    }, {
      from: './favicon.ico'
    }, {
      from: './service-worker.js'
    }, {
      from: './images/',
      to: './images/'
    }]),
    new ExtractTextPlugin('style.css')
  ]
};
