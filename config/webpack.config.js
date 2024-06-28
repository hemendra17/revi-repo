// check for NODE_ENV
if (!process.env.NODE_ENV) {
	throw new Error('You should to specify NODE_ENV var. Try [npm run build] to build app or [npm run dev] to test it.');
}


const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// paths
const rootPath = process.env.PWD || path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, './dist/');


const config = {
	mode: process.env.NODE_ENV,
	devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
	entry: './src/index.jsx',
	output: {
		filename: './[name].[hash].bundle.js',
		chunkFilename: './[name].[hash].bundle.js',
		path: distPath,
	},
	// support HMR
	target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
	// https://webpack.js.org/configuration/dev-server/
	devServer: {
		static: {
			directory: distPath,
		},
		hot: true,
		compress: true,
		port: 8080,
		watchFiles: {
			paths: ['src/**/*'],
			options: {
				usePolling: true,
				interval: 500,
				aggregateTimeout: 600,
			},
		},
	},

	module: {
		rules: [
			// fonts
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				// type: 'asset/resource',
				use: [{
					loader: 'file-loader',
					options: {
						// path to store fonts
						outputPath: 'fonts',
						// rel path to load fonts with css request
						publicPath: '../fonts'
					}
				}]
			},
			// css
			{
				test: /\.css$/,
				use: [process.env.NODE_ENV === 'production' ? {
					loader: MiniCssExtractPlugin.loader,
					options: { publicPath: '/' }
				} : 'style-loader', 'css-loader'],
			},
			// process images should be contain to /img folder
			// small images pack to base64-encoded string
			// large file will put to /img
			// https://github.com/webpack-contrib/url-loader - using file-loader
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [{
					loader: 'url-loader', options: {
						limit: 8192,
						outputPath: 'img'
					}
				}]
			},
			// JSX support
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						// presets: ['@babel/preset-env', "@babel/react", "@babel/preset-react"],
						presets: ['@babel/preset-env', "@babel/react"],
						plugins: [
							["@babel/plugin-transform-runtime", { "regenerator": true }],
							['@babel/plugin-syntax-dynamic-import', {}]
						]
					}
				}
			},
		]
	},

	// resolve paths
	resolve: {
		alias: {
			// configs
			Config: path.resolve(__dirname, '../src/_configs/'),
			// common items
			Common: path.resolve(__dirname, '../src/_common/'),
			// handlers
			Hand: path.resolve(__dirname, '../src/_handlers/'),
			// common assets
			Comass: path.resolve(__dirname, '../src/_configs/assets/_common_assets/')
		}
	},

	plugins: [
		// create index.html
		// https://github.com/jantimon/html-webpack-plugin#options
		new HtmlWebpackPlugin({
			title: 'Revi',
			filename: 'index.html',
			template: path.resolve(rootPath, './src/_static/index.html'),
			minify: process.env.NODE_ENV === 'production'
		}),
		// logo for index.html
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(rootPath, './src/_static/Revi_Logo_R_32.png'), to: distPath },
				{ from: path.resolve(rootPath, './src/_static/Revi_Logo_R_64.png'), to: distPath },
				{ from: path.resolve(rootPath, './src/_static/.well-known'), to: ".well-known/" },

			]
		}),
		// extract css
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		// auto include dependencies
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		}),
	]
}

module.exports = config;
