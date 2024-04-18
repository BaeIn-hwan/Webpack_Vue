const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "main.ts"),

  resolve: {
    extensions: [".js", ".vue", ".json", ".ts", "tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Minimal Vue Webpack",
      favicon: path.resolve(__dirname, "./public/favicon.svg"),
      template: path.resolve(__dirname, "index.html"),
    }),
    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
