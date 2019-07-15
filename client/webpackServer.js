const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const webpackConfig = require("./webpack.config");

const devServerConfig = {
  hot: true,
  inline: true,
  host: "localhost",
  // proxy: {
  //   "/api/*": "http://localhost:3000"
  // },
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
};

const port = 5500;

webpackDevServer.addDevServerEntrypoints(webpackConfig, devServerConfig);

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, devServerConfig);

server.listen(port, "localhost", () => {
  console.log("start listening port", port)
});