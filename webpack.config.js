var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    devtool: "inline-sourcemap",
    entry: './main.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:/.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass-loader?sourceMap")
            },           
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};