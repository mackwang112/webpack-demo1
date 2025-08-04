const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve('./static'),
          from: '**/*',
          to: path.resolve('./dist'),
          noErrorOnMissing: true
        }
      ],
    }),
  ]
};