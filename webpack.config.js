const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLPath = path.resolve(__dirname, "index.html");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: HTMLPath
    })
  ]
};
