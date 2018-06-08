const path = require('path');

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
  }
}