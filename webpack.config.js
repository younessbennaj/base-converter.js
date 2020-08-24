// Configuration file => A JS file that exports a Webpack config object with props
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    // must be an absolute path (use the Node.js path module)
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js"
    }
};