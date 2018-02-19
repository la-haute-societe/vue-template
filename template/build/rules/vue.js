const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config) => {

    const vueConfig = {
        test:    /\.vue$/,
        loader:  'vue-loader',
        options: {
            loaders: {},
            postcss: [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie > 8']
                })
            ]
        }
    };

    return vueConfig;

};
