var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/index.jsx",
  output: {
    path: "./src/js",
    filename: "app.min.js",
  },
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader", // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
