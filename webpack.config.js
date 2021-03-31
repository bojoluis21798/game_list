const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  mode: "development",
  devServer: {
    hot: true,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: path.resolve(__dirname, "./node_modules"),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
