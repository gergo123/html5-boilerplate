const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = function (devMode) {
    return {
        mode: "development",
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            static: './dist',
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ],
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js"],
        },
        plugins: [new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/index.html'
        })].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    }
};

module.exports = (env, argv) => {
    return config(argv.mode !== 'production');
};
