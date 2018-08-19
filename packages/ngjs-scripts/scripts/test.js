"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

const fs = require("fs");
const path = require("path");
const jest = require("jest");
const paths = require("../config/paths");

const {
  // chalkError,
  chalkSuccess
  // chalkWarning,
  // chalkProcessing
} = require("./utils/chalkConfig");

const resolve = relativePath => path.resolve(__dirname, "..", relativePath);

const setupTestsFile = fs.existsSync(paths.testsSetup)
  ? "<rootDir>/src/setupTests.js"
  : resolve("config/jest/jestSetup.js");

const rootDir = path.resolve(paths.appSrc, "..");
const srcRoots = paths.srcPaths;
const toRelRootDir = f => "<rootDir>/" + path.relative(rootDir || "", f);

const jestConfig = {
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  setupFiles: [resolve("config/polyfills.js")],
  setupTestFrameworkScriptFile: setupTestsFile,
  testMatch: [
    "**/__tests__/**/*.{js,jsx,mjs}",
    "**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  // where to search for files/tests
  roots: srcRoots.map(toRelRootDir),
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|mjs)$": resolve("config/jest/babelTransform.js"),
    "^.+\\.css$": resolve("config/jest/cssTransform.js"),
    "^(?!.*\\.(js|jsx|mjs|css|json|graphql)$)": resolve(
      "config/jest/fileTransform.js"
    )
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "mjs"
  ]
};

const argv = [];
argv.push("--config", JSON.stringify(jestConfig));
// argv.push('--env', testEnvironment);
jest.run(argv);
// { onlyChanged: true }
// jest.runCLI(jestConfig, [paths.appSrc], function(success) {
//   console.log(chalkSuccess(success));
// });
