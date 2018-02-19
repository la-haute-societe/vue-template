const webpack = require('webpack');
const path    = require('path');
const utils   = require('../utils/utils');


module.exports = (config) => {
    return {

        entry: {
            app: ['./src/main.js']
        },

        output: {
            path: config.assetsPath,
            publicPath: config.assetsPublicPath + '/',
            filename: '[name].js',
        },

        resolve: {
            extensions: ['.js', '.vue', '.json'],
            modules: [
                utils.resolve('src'),
                utils.resolve('node_modules')
            ],
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                'src': utils.resolve('src'),
                'components': utils.resolve('src/app/components'),
                'pages': utils.resolve('src/app/pages'),
                'plugins': utils.resolve('src/app/plugins'),
                'services': utils.resolve('src/app/services'),
                'static': utils.resolve('src/static'),
                'styles': utils.resolve('src/styles'),
                'sprites': utils.resolve('src/sprites'),
            }
        },

        module: {
            rules: utils.require('rules', config, [
                'images',
                'styles',
                'vue',
                'scripts',
                'fonts',
            ])
        },

        plugins: utils.require('plugins', config, [
            'spritesmith',
            'write-index',
            'create-index',
        ]),
    };
};
