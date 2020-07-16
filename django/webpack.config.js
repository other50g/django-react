module.exports = {
    entry: './web/src/main.tsx',
    output: {
        path: `${__dirname}/web/static`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.tsx', '.json', '.jsx'
        ]
    },
    devServer: {
        contentBase: `${__dirname}/web/static`,
        inline: true,
        hot: true,
        proxy: {
            '!/web/static/**': {
                target: 'http://localhost:8000',
                changeOrigin: true
            }
        },
        port: 9000
    }
};
