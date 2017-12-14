const path = require('path')
const webpack = require('webpack')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config')

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash:5].css',
    allChunks: true
})

const buildConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },{
                        loader: 'postcss-loader'
                    },{
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'build'], {
            exclude: ['api']
        }),
        new UglifyjsWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        extractSass
    ]
}

module.exports = merge(commonConfig, buildConfig)