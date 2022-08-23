import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { VueLoaderPlugin } from 'vue-loader';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
	entry: { main: './src/app.js' },
	output: {
		path: `${__dirname}/dist`,
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['*', '.js', '.vue', 'scss'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.m?js/,
				type: 'javascript/auto',
			},
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'vue-style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	devServer: {
		static: {
			directory: __dirname + 'dist',
		},
		compress: true,
		port: 1395,
	},
};
