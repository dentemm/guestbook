const path = require('path');

module.exports = (env) => {

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            }]
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
        }
    }
};