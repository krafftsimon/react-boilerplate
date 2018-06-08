const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

// Inject .js bundle into <body> of index.html
// 1st arg: obj of options (optional)
// filname option defaults to 'index.html'
// inject option defaults to true -> javascript is injected at the bottom of <body>
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
});

// Clean build directory every time we build our app.
// 1st arg: array of paths.
// 2nd arg: obj of options (optional).
const CleanWebPackPluginConfig = new CleanWebPackPlugin(['build']);

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['node-modules'],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ],
      }
    ]
  },
  plugins: [
    HtmlWebPackPluginConfig,
    CleanWebPackPluginConfig,
  ],
}