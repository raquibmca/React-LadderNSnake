var config = {
    entry: './main.tsx',
    output: {
        path: '/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 2222
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        mainFields: ["main"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader?module=es6'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
}
module.exports = config;
