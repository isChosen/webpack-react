/*
 * @Author: Chosen
 * @Date: 2019-06-15 13:33:16
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-16 13:52:26
 * @Description: development configuration
 */

const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const Mock = require("./mocks/mock");
const merge = require("webpack-merge");
const base = require("./webpack.config.main.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ({NODE_ENV = 'development'} = {NODE_ENV: 'development'}) => merge.smart(base, {
  mode: "development",
  devtool: 'eval-source-map',
  output: {
    filename: "bundle/[name].[hash:4].js",
    chunkFilename: 'bundle/[name].[chunkhash:6].js'
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?|es6$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },

  devServer: {
    hot: true,
    port: 9000,
    // https: true,
    open: "Chrome",
    host: '0.0.0.0',
    compress: true,
    useLocalIp: true,
    contentBase: __dirname,
    clientLogLevel: 'error',
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8024', // http://localhost:8024/api/**/**
        secure: false,
        changeOrigin: true
      },
      '/ai/v4/robot/inner-test/': {
        target: 'http://localhost:8024', // http://localhost:8024/ai/v4/robot/inner-test/**
        secure: false,
        changeOrigin: true
      },
      '/ai/v4/robot/pre-release/': {
        target: 'http://localhost:8022', // http://localhost:8024/ai/v4/robot/inner-test/**
        secure: false,
        changeOrigin: true
      },
      '/ai/v4/robot/pro-official/': {
        target: 'http://localhost:8021', // http://localhost:8024/ai/v4/robot/inner-test/**
        secure: false,
        changeOrigin: true
      },
      '/api': { // 本地 mock-2
        secure: false,
        changeOrigin: true,
        bypass(req, res) {
          // console.log('bypass url', req.url);
          // /api/**/**/*.json?a=1&b=asdf#hash=1234sdf
          const regExp = /^\/api(?:\/.+)*\/(.+?\.json)(?:\?.*)*$/;
          const json = `${req.url}`.match(regExp);
          if (json) {
            const jsonPath = path.join(__dirname, 'mocks', 'data', json[1]);
            if (fs.existsSync(jsonPath)) {
              const data = fs.readFileSync(jsonPath, 'utf8');
              const result = JSON.parse(data);
              res.send(result);
            } else {
              res.send({
                code: 11001010101,
                data: { msg: '没找到对应的 json 文件，请添加'}
              });
            }
          }
        }
      }
    },
    before(app, server) {
      Mock(app); // 本地 mock-1
    }
  },

  plugins: [

    new webpack.HotModuleReplacementPlugin(), // 热更新

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      title: "webpack-react:dev",
      favicon: "favicon.ico",
      filename: "index.html",
      template: "tmpl/index.dev.html"
    }),

    /* // 输出分析
    new BundleAnalyzerPlugin({
      analyzerPort: 2019,
      generateStatsFile: true,
      statsFilename: '../.analysis/stats.json'
    }) */

  ]
});
