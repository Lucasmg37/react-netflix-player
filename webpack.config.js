// webpack.config.js
const path = require("path");

module.exports = {
  entry: './src/components/ReactNetflixPlayer/index.js',
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "ReactNetflixPlayer.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
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