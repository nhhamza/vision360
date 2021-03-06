const eslint = require('eslint');
const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter('stylish'),
          emitWarning: process.env.NODE_ENV !== 'production'
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|mp4|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../'
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../'
            }
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath
    },
    open: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.jsx', '.js', '.css', '.scss']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ]
};
