module.exports = {
    entry: "./js/entry.js",
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};
