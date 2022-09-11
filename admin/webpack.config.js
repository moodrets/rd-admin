const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const dotenvFile = dotenv.config({ path: '../.env' });

const isDev = process.argv.includes('development');
const isProd = process.argv.includes('production');
const devServerPort = dotenvFile.parsed.ADMIN_DEV_SERVER_PORT || 1345;
const devtool = isDev ? 'source-map' : false;

module.exports = {
    cache: false,
    devtool,
    context: path.resolve(__dirname),
    entry: { admin: `./src/admin.ts` },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.vue', 'scss', 'css'],
        alias: {
            '~': path.resolve(__dirname, 'src/'),
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
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
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
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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
        port: devServerPort,
        compress: true,
        historyApiFallback: true,
    },
    experiments: {
        topLevelAwait: true,
    },
};
