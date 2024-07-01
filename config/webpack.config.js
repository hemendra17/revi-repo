const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Check for NODE_ENV and set default to 'development'
const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

// Paths
const rootPath = process.env.PWD || path.resolve(__dirname, '../');
const distPath = path.resolve(rootPath, './dist/');

module.exports = {
    mode: mode, // Set mode directly
    devtool: isProduction ? false : 'eval-source-map',
    entry: './src/index.jsx',
    output: {
        filename: './[name].[hash].bundle.js',
        chunkFilename: './[name].[hash].bundle.js',
        path: distPath,
    },
    target: mode === 'development' ? 'web' : 'browserslist',
    devServer: {
        contentBase: distPath,
        publicPath: '/',
        hot: true,
        compress: true,
        port: 8080,
        watchOptions: {
            poll: 500,
            aggregateTimeout: 600
        },
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        publicPath: '../fonts'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ? {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '/' }
                    } : 'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath: 'img'
                    }
                }]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: [
                            ['@babel/plugin-transform-runtime', { regenerator: true }],
                            ['@babel/plugin-syntax-dynamic-import', {}]
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            Config: path.resolve(__dirname, '../src/_configs/'),
            Common: path.resolve(__dirname, '../src/_common/'),
            Hand: path.resolve(__dirname, '../src/_handlers/'),
            Comass: path.resolve(__dirname, '../src/_configs/assets/_common_assets/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Revi',
            filename: 'index.html',
            template: path.resolve(rootPath, './src/_static/index.html'),
            minify: isProduction
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(rootPath, './src/_static/Revi_Logo_R_32.png'), to: distPath },
                { from: path.resolve(rootPath, './src/_static/Revi_Logo_R_64.png'), to: distPath },
                { from: path.resolve(rootPath, './src/_static/.well-known'), to: ".well-known/" },
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
    ]
};
