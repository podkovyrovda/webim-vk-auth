const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public')
    },

    externals: {
        vkopenapi: 'VK'
    },

    devtool: 'cheap-eval-source-map', // remove for build
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                ]
            }
        ],
    }
};