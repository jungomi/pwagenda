const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

baseConfig.module.loaders = baseConfig.module.loaders.filter(loader => {
  return !loader.test.toString().includes('css');
});
const devConfig = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.output.publicPath
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!postcss-loader'
      })
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap&modules&importLoaders=1'
          + '&localIdentName=[name]__[local]___[hash:base64:5]'
          + '!postcss-loader!sass-loader'
      })
    }]
  }
});

module.exports = devConfig;
