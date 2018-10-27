const webpack = require('webpack');
const pathLib = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: pathLib.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
        inline: false,
        contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader' 
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
