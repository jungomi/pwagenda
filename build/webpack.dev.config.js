const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const devConfig = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.output.publicPath
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './src/main.css', to: 'style.css' }]),
  ]
});

for (const loader of devConfig.module.loaders) {
  if (loader.test.toString() === /\.css$/.toString()) {
    loader.loader = 'style-loader!css-loader?sourceMap!postcss-loader';
  } else if (loader.test.toString() === /\.scss$/.toString()) {
    const scssLoader = 'style-loader!css-loader?sourceMap&modules'
      + '&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      + '!postcss-loader!sass-loader';
    loader.loader = scssLoader;
  }
}

module.exports = devConfig;
