const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");


exports.createPages = ({ graphql, boundActionCreators }) => {
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
  if (stage === "build-html") {
    config.loader("null", {
      test: /react-responsive-modal/,
      loader: "null-loader",
    }); 
  }
};