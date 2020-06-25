const path = require('path');

const postCSSPlugins = [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                            plugins: postCSSPlugins
                        }
                    }
                ]
            }
        ]
    }
};
