'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
const webpack = require('webpack');
const fs = require('fs-extra');

const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');

const {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing,
} = require('./utils/chalkConfig');

fs.emptyDirSync(paths.appBuild);

console.log(
  chalkProcessing('Generating minified bundle. This will take a moment...'),
);

webpack(config).run((error, stats) => {
  if (error) {
    // so a fatal error occurred. Stop here.
    console.log('error');
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson({}, true);

  if (stats.hasErrors()) {
    return jsonStats.errors.map(err => console.log(chalkError(err)));
  }

  console.log(
    `Webpack stats: ${stats.toString({
      // chunks: false, // Makes the build much quieter
      colors: true, // Shows colors in the console
    })}`,
  );

  if (stats.hasWarnings()) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  // if we got this far, the build succeeded.
  console.log(
    chalkSuccess(
      `Your app is compiled in production mode in ./build. It's ready to roll!`,
    ),
  );

  return 0;
});
