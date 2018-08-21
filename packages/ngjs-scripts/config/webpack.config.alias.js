const path = require("path");
const paths = require("./paths");

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  "@src": paths.appSrc,
  "@app": path.resolve(paths.appSrc, "app"),
  "@common": path.resolve(paths.appSrc, "app", "common"),
  "@components": path.resolve(paths.appSrc, "app", "components"),
};
