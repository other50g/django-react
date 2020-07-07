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
    }
};
