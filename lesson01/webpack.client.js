const path = require('path');

// 服务端webpack
module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}