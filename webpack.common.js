const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Inject .js bundle into <body> of index.html
// 1st arg: obj of options (optional)
// filname option defaults to 'index.html'
// inject option defaults to true -> javascript is injected at the bottom of <body>
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
});


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
        exclude: /node-modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    HtmlWebPackPluginConfig,
  ],
}