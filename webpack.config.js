const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        port: 9000,
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
    },
};
