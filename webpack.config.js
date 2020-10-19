const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: ['./src/index.js','./src/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPligin ({
            template: path.resolve(__dirname, 'src/index.html'),
        })
    ]
};