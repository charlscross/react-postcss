var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')

var parentDir = path.join(__dirname, './');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: parentDir + 'styles',
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]--[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {

        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin([{ from: path.resolve(path.join(parentDir, 'index.html')) }])
    ]
}