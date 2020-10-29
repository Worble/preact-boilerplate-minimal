const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreactRefreshPlugin = require("@prefresh/webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  const babelOptions = {
    presets: ["@babel/preset-env"],
    plugins: [
      [
        require.resolve("@babel/plugin-transform-react-jsx"),
        {
          pragma: "h",
          pragmaFrag: "Fragment",
        },
      ],
      "@babel/plugin-transform-runtime",
      isDev && require.resolve("@prefresh/babel-plugin"),
    ].filter(Boolean),
  };

  return {
    devtool: isDev ? "eval-source-map" : "source-map",
    entry: [path.resolve(__dirname, "src", "index.tsx")],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: babelOptions,
            },
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: babelOptions,
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true,
      hot: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new PreactRefreshPlugin(),
    ].filter(Boolean),
  };
};
