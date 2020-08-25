// Configuration file => A JS file that exports a Webpack config object with props
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    // must be an absolute path (use the Node.js path module)
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js"
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                //files that end with ".js"
                test: /\.js$/,
                //except in the node_modules directory
                exclude: /node_modules/,
                //Use babel loader to process them 
                use: "babel-loader"
            },
            //Rule for test files 
            {
                use: {
                    loader: "babel-loader",
                    options: {
                        //convert es module into commonJS module (needed for Jest)
                        plugins: ["@babel/plugin-transform-modules-commonjs"]
                    }
                },
                test: "/\.test.js/$"
            }
        ]
    }
};