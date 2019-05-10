const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
    },
    plugins: [
        new webpack.DefinePlugin({
            apiBaseUrl: JSON.stringify('http://localhost:3000')
        })
    ]
});
