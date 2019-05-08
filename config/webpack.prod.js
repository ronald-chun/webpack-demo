const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
require("@babel/polyfill");


module.exports = {
    mode: 'production',
    entry: {
        app: [
            "@babel/polyfill",
            './src/js/index.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/page1.html',
            filename: 'page1.html',
            inject: 'body',
        }),
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            }
        ]
    }
};