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
        test: /\.js$/,
        exclude: ['node-modules'],
        use: 'babel-loader',
      }
    ]
  }
}