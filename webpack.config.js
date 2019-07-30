const path = require("path");

module.exports = {
    entry: "./public/Javascript/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, "./public/Javascript"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: path.join(__dirname, "node_modules")
            }
        ]
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    },
    devtool: "source-map"
}