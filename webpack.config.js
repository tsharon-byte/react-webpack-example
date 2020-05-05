const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
console.log(isDev);
module.exports = (isDevFlag = isDev) => ({
    mode: isDevFlag ? "development" : "production",
    entry: "./src/index.jsx",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: !isDevFlag ? "[name].[hash].js" : "[name].bundle.js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
});