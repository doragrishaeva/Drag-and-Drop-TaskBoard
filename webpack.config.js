const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@components': path.resolve(__dirname, 'src/components'),
      'styles': path.resolve(__dirname, 'src/styles/common.scss'),
      '@icons': path.resolve(__dirname, 'src/styles/icons')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 80,
    open: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      favicon: './src/styles/favicon.ico'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
      test: /\.scss$/,
      include: path.join(__dirname, 'src'),
      exclude: /\.custom.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              exportLocalsConvention: 'camelCaseOnly',
              localIdentName: '[name][local]__[hash:base64:5]',
            }
          }
        },
        'sass-loader'
      ]
      },
      {
        test: /\.custom.scss$/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
