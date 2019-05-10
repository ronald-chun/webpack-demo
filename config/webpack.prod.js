const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("@babel/polyfill");

module.exports = {
    mode: 'production',
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
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                        drop_console: true // or pure_funcs: ['console.log', 'console.info']
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
        ],
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
            test: /\.json$/,
            type: 'javascript/auto',
            use: {
                loader: 'json-loader'
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    interpolate: true
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
        new CleanWebpackPlugin(),
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
