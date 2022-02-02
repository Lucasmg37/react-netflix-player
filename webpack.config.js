// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/components/ReactNetflixPlayer/index.js',
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
    react: 'react',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled-components',
    i18next: 'i18next',
    'react-i18next': 'react-i18next',
    'react-icons/fa': 'react-icons/fa',
    'react-icons/fi': 'react-icons/fi',
  },
};
