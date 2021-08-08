const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.join(__dirname, 'sources');
const TARGET_DIR = path.join(__dirname, 'target');

module.exports = {
    entry: path.join(SOURCE_DIR, 'app.js'),
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: TARGET_DIR
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(SOURCE_DIR, 'index.html'),
            favicon: path.join(SOURCE_DIR, 'favicon.ico')
        })
    ],
    output: {
        filename: 'bundle.js',
        path: TARGET_DIR
    }
};