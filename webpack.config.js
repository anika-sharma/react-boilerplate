const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	JS: path.resolve(__dirname, 'src/js'),
	SRC: path.resolve(__dirname, 'src')
};

module.exports = {
	entry: path.join(path.JS, 'app.js'),
	output: {
		path: paths.DIST,
		filename: 'app.bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		}),
		new ExtractTextPlugin('style.bundle.css')
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
