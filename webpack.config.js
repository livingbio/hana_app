var webpack = require('webpack');

module.exports = {
    devtool: "#inline-source-map",
    entry: {
        vendors: ['react', 'jquery', 'redux', 'react-redux','redux-thunk', 'react-dom'],
        login: "./www/js/pages/login.jsx"
    },
    output: {
        path: './www/dist',
        filename: "[name].bundle.js"
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
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendors", /* filename= */"vendor.bundle.js")
    ],
    resolve: {
        // extensions: ['', 'js', 'jsx', 'node', 'json'],
        moduleDirectories: ['node_modules', 'bower_components', 'shared'],
        root: './www/js'
    }
};
