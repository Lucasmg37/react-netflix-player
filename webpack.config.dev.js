// webpack.config.dev.js
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    example: ['webpack/hot/dev-server', './example/index.js'],
  },
  output: {
    filename: 'example/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './example',
  },
};
