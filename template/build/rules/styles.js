const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {resolve} = require('../utils/utils');

module.exports = (config) => {

    // Build : Sortir les styles dans des fichiers
    if (config.env === 'build') {
        return {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {importLoaders: 1}
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['last 2 versions', 'ie > 8']
                            })
                        ]
                    }
                }, {
                    loader: "sass-loader"
                }],
                publicPath: '',
            })
        };
    }


    return {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Less to CSS
        }]
    };
};
