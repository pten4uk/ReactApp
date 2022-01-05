const cssPlugin = require('mini-css-extract-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [new cssPlugin(), new htmlPlugin({
        template: "./src/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: cssPlugin.loader,
                    options: {
                        esModule: true
                    }
                }, "css-loader", "sass-loader"],
            }
        ]
    }
}