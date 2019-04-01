
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../config/webpack.dev.config.js');

const compiler = webpack(webpackConfig);

const devServerOptions = Object.assign({},  {
  hot: true,
  stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      // https://github.com/angular/angular/issues/21560
      // warningsFilter: /System.import/,
  },
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8050, 'localhost', () => {
  console.log('dev server listening on port 8050, please open http://localhost:8050');
});
