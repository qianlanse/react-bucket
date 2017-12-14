const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader?modules&localIdentName=[local]-[hash:base64:5]'
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    devServer: {
        port: 8090,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '127.0.0.1'
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: true
        })
    ]
}

module.exports = merge({
    customizeArray(a, b, key) {
        if (key === 'entry.app') {
            return b
        }
        return undefined
    }
})(commonConfig, devConfig)