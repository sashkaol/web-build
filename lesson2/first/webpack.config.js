const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'modules', 'main.js'),
    output: {
        filename: 'main.bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],    

    module: {
        rules: [
            {
                test: /\.ogg$|\.mp3$/,
                use: ['file-loader']
            }
        ]
    }
}