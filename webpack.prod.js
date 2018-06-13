const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const CleanWebPackPlugin = require('clean-webpack-plugin');

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})

// Clean build directory every time we build our app.
// 1st arg: array of paths.
// 2nd arg: obj of options (optional).
const CleanWebPackPluginConfig = new CleanWebPackPlugin(['build']);

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    CleanWebPackPluginConfig,
    DefinePluginConfig
  ],
})