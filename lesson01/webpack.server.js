const path = require('path');
const externals = require('webpack-node-externals');

// 服务端webpack
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.jsx',
  externals: [externals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
            ]
          ]
        }
      }
    ]
  }
}