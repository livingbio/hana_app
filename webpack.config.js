module.exports = {
    entry: "./www/js/hana.jsx",
    output: {
        path: './www/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    },
    resolve: {
        extensions: ['', 'js', 'jsx', 'node', 'json'],
        moduleDirectories: ['node_modules', 'bower_components', 'shared'],
        root: './www/js'
    }
};
