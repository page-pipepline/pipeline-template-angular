const path = require('path');
const config = require('./index');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: 'production',
  entry: {
    styles: './src/styles.less',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: './',
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].chunk.[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.join(__dirname, '../tsconfig.json')
            }
          },
          'angular2-template-loader',
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        // 需要排除 src/index.html 文件, 交由 hmtl-webpack-plugin 处理
        exclude: [/src\/index\.html$/]
      },
      {
        // 全局样式需要用 style-loader
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        // 只包含需要使用 style-loader 的 less 文件
        include: path.resolve(__dirname, '../src/style.less')
      },
      {
        // 组件中使用的 style 要用 to-string-loader 来处理
        test: /\.(less)$/,
        use: [
          'to-string-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        // 排除需要使用 style-loader 的 less 文件
        exclude: path.resolve(__dirname, '../src/style.less')
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: true,
        minify: false,
        ...config.build.HWPPageBaseConfig,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
}

module.exports = webpackConfig;
