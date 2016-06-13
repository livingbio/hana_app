module.exports = {
    entry: "./js/hana.js",
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
