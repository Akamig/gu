const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './gu.js',
  target: "web",
  mode: "production",
  output: {
    filename: 'gu.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
};
