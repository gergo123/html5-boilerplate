const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = function (devMode) {
    return {
        mode: "development",
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            assetModuleFilename: 'resources/[hash][ext][query]'
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
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx"],
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
