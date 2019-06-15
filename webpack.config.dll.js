const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  let terminal;
  const devConf = { mode: 'development' }; // development config
  const proConf = {
    // production config
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserPlugin({
          test: /\.js$/i,
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true
            },
            output: {
              comments: false
            }
          }
        })
      ]
    }
  };

  const baseConf = {
    entry: {
      react: ['react', 'react-dom'],
      react_router: ['react-router', 'react-router-dom']
    },

    output: {
      filename: '[name].dll.js',
      path: path.resolve(__dirname, 'dll'), // 绝对路径
      library: '_dll_[name]'
    },

    plugins: [
      new CleanWebpackPlugin(['dll']),
      new webpack.DllPlugin({
        context: __dirname,
        name: '_dll_[name]',
        path: path.join(__dirname, 'dll', '[name].manifest.json')
      })
    ]
  };

  // 区分环境
  if (env.NODE_ENV === 'dev') {
    terminal = { ...baseConf, ...devConf };
  } else {
    terminal = { ...baseConf, ...proConf };
  }

  return terminal;
};
