'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
const browserSync = require('browser-sync');
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/webpack.config.dev');

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(),

      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: config.output.publicPath,

        // These settings suppress noisy webpack output so only errors are displayed to the console.
        noInfo: true,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          modules: false,
          entrypoints: false,
          chunks: false,
          chunkModules: false,
          hash: false,
        },

        // for other settings see
        // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler),
    ],
  },
  // proxy: {
  // target: process.env.PROXY_URL,
  // },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: ['src/*.html'],
});
