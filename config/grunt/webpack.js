var RewirePlugin = require("rewire-webpack");

module.exports = {
    options: {
        module: {
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        }
    },

    app: {
        context: "./src/main",
        entry: "./index.js",
        output: {
            path: "./target",
            filename: "localisation-configuration.js"
        },
        plugins: [
            new RewirePlugin()
        ]
    },

    appTests: {
        context: "./src/test",
        entry: "./run.js",
        output: {
            path: "./target",
            filename: "tests-bundle.js"
        },
        resolve: {
            modulesDirectories: [
                './src/main',
                'node_modules'
            ]
        },
        plugins: [
            new RewirePlugin()
        ]
    }
};
