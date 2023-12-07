// webpack.config.js
const path = require("path");

module.exports = {
  mode: "production", // ou 'production'
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
