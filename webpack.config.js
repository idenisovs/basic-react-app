const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.join(__dirname, 'sources');
const TARGET_DIR = path.join(__dirname, 'target');

module.exports = {
    entry: path.join(SOURCE_DIR, 'index.js'),
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: TARGET_DIR,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(SOURCE_DIR, 'index.html'),
            favicon: path.join(SOURCE_DIR, 'favicon.ico')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: TARGET_DIR
    }
};