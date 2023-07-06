const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new HtmlWepackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
    new WebpackBundleAnalyzer(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|png|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
    compress: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
};
