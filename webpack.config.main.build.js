/*
 * @Author: Chosen
 * @Date: 2019-06-15 13:33:01
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-16 13:08:37
 * @Description: production configuration
 */

const path = require('path');
const merge = require('webpack-merge');
const base = require("./webpack.config.main.base");
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
  const mode = env.NODE_ENV === 'dev' ? 'development' : 'production';
  return merge.smart(base, {
    mode,
    output: {
      publicPath: './',
      filename: 'bundle/[id].[hash:4].js',
      chunkFilename: 'bundle/[id].[chunkhash:6].js'
    },

    optimization: {
      minimizer: [
        // 压缩 js
        new TerserPlugin({
          test: /\.js$/i,
          cache: path.resolve(__dirname, '.cache'),
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true
            },
            output: {
              comments: false
            }
          }
        }),

        // 压缩分离的 css
        new OptimizeCSSAssetsPlugin({
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }]
          }
        })
      ]
    },

    plugins: [
      new CleanWebpackPlugin(["dist", ".analysis"]),

      new HtmlWebpackPlugin({
        inject: 'body',
        title: 'webpack-react:pro',
        favicon: 'favicon.ico',
        filename: 'index.html',
        template: 'tmpl/index.pro.html'
      }),

      new CopyWebpackPlugin([
        // dll
        {
          from: 'dll/*.js',
          to: '',
          toType: 'file'
        },
        // static
        {
          from: 'static/css/*.min.css',
          to: '',
          toType: 'file'
        },
        {
          from: 'static/fonts',
          to: 'static/fonts',
          toType: 'dir'
        },
        {
          from: 'static/images/outer',
          to: 'static/images/outer',
          toType: 'dir'
        },
        {
          from: 'static/lib',
          to: 'static/lib',
          toType: 'dir'
        }
      ])
    ]
  });
}
