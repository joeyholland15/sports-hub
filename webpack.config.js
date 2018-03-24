const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: resolve('.', 'src'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: "dist",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: resolve('.', 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-react-jsx',
              [
                'react-css-modules',
                {
                  context: resolve('.', 'src'),
                  filetypes: {
                    '.scss': {
                      syntax: 'postcss-scss',
                    }
                  },
                }
              ]
            ]
          }
        },
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};
