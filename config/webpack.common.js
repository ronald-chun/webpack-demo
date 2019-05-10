const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("@babel/polyfill");

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            './src/js/index.js',
            './src/scss/style.scss'
        ],
        page1: './src/js/page1.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './config'
                        }
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    interpolate: true,
                }
            }]
        }, {
            test: /\.(eot|otf|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts/',
                    publicPath: `fonts/`,
                    name: '[name].[ext]'
                }
            }
        }, {
            test: /\.svg$/,
            use: 'base64-image-loader'
        }, {
            test: /\.(gif|jpe?g|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    publicPath: `images/`,
                    name: '[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/page1.html',
            filename: 'page1.html',
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css?_=[hash]'
        }),
    ],
};
