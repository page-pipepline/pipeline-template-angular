const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    styles: './src/styles.globalless',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  mode: 'development',
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
        loader: 'html-loader'
      },
      {
        // 全局样式需要用 style-loader, 所以用特殊的命名 globalless
        test: /\.globalless$/,
        use: [
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
        include: path.resolve(__dirname, '../src')
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
        include: path.resolve(__dirname, '../src')
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
    })
  ],
}

module.exports = config;
