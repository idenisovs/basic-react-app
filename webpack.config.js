const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.join(__dirname, 'sources');
const TARGET_DIR = path.join(__dirname, 'target');

module.exports = {
    entry: path.join(SOURCE_DIR, 'index.tsx'),
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join()
        }
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
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
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: TARGET_DIR
    }
};
