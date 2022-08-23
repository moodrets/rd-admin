const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.argv.includes('development');
const isProd = process.argv.includes('production');

// filename: (pathData) => {
// 	return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
// },

module.exports = {
	mode: isDev ? 'development' : 'production',
	cache: false,
	context: path.resolve(__dirname),
	entry: { admin: `./src/admin.js` },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		clean: true,
		publicPath: '/',
	},
	resolve: {
		extensions: ['*', '.js', '.vue', 'scss', 'css'],
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /(node_modules)/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { sourceMap: isDev ? true : false } },
					{ loader: 'postcss-loader', options: { sourceMap: isDev ? true : false } },
					{ loader: 'sass-loader', options: { sourceMap: isDev ? true : false } },
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		}),
		new webpack.WatchIgnorePlugin({
			paths: [/\.js$/],
		}),
	],
	devServer: {
		client: {
			overlay: true,
			progress: true,
		},
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 1313,
		compress: true,
		historyApiFallback: true,
	},
};
