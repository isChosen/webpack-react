const os = require("os");
const path = require("path");
const webpack = require("webpack");
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"), // 绝对路径
    filename: "bundle/[name].[hash:4].js",
    chunkFilename: 'bundle/[name].[chunkhash:6].js'
  },

  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
      minSize: 20000, // 20k
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      cacheGroups: {
        libs: {
          name: 'vendor-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 5,
          chunks: 'initial'
        },
        antd: {
          name: 'vendor-antd',
          test: /[\\/]node_modules[\\/]@?ant.*[\\/]/,
          priority: 10,
          chunks: 'async'
        },
        lodash: {
          name: 'vendor-lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 15,
          chunks: 'async'
        },
        echarts: {
          name: 'vendor-echarts',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          priority: 20,
          chunks: 'async'
        },
        axios: {
          name: 'vendor-axios',
          test: /[\\/]node_modules[\\/]axios[\\/]/,
          priority: 25,
          chunks: 'async'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?|es6$/,
        exclude: /node_modules/,
        use: "happypack/loader?id=jsx"
      },

      /* vendor 样式不需要模块化 */
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          "happypack/loader?id=cssInNodeModules"
        ]
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          "happypack/loader?id=lessInNodeModules"
        ]
      },

      /* 自定义样式 模块化 */
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "happypack/loader?id=cssExcNodeModules"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "happypack/loader?id=lessExcNodeModules"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 4096,
          fallback: "file-loader",
          name: '[name][hash:4].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    modules: [path.resolve(__dirname, 'node_modules')],
    mainFields: ['browser', 'module', 'main'],
    alias: {
      "@component": path.resolve(__dirname, "src/components"),
      "@common": path.resolve(__dirname, "src/components/common"),
      "@image": path.resolve(__dirname, "static/images"),
      "@util": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store")
    }
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(), // scope hoisting

    // 分离样式
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      chunkFilename: "css/[name].[contenthash:6].css"
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/react.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/react_router.manifest.json')
    }),

    new HappyPack({
      id: 'jsx',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: HappyThreadPool
    }),

    new HappyPack({
      id: 'cssInNodeModules',
      loaders: ['css-loader', 'postcss-loader'],
      threadPool: HappyThreadPool
    }),

    new HappyPack({
      id: 'lessInNodeModules',
      loaders: ['css-loader', 'postcss-loader', 'less-loader'],
      threadPool: HappyThreadPool
    }),

    new HappyPack({
      id: 'cssExcNodeModules',
      loaders: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]-[hash:base64:4]'
          }
        },
        'postcss-loader'
      ],
      threadPool: HappyThreadPool
    }),

    new HappyPack({
      id: 'lessExcNodeModules',
      loaders: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 2,
            localIdentName: '[local]-[hash:base64:4]'
          }
        },
        'postcss-loader',
        'less-loader'
      ],
      threadPool: HappyThreadPool
    })

  ]
};
