// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './esm/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ReactNetflixPlayer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
  externals: {
    react: 'commonjs react',
  },
};
