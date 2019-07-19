const {getWebpackMode} = require("../common/webpack/utils");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;
console.log("mode", getWebpackMode(env));
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `app-dist.${env}.js`,
  },
  devtool: "inline-source-map",
  mode: getWebpackMode(env),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /(\.tsx?|\.jsx?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "src", "template", "index-template.ejs"),
      inject: "body",
      // apiBasePath: JSON.stringify(process.env.API_URL),
      // isMobile: process.env.IS_MOBILE === "true"
    })
  ]
}