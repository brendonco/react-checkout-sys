/* global __dirname */
const path = require("path");

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, ".."));

const constants = Object.freeze({
  ABSOLUTE_BASE,
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, "node_modules"),
  BUILD_DIR: path.join(ABSOLUTE_BASE, "build"),
  DIST_DIR: path.join(ABSOLUTE_BASE, "dist"),
  SRC_DIR: path.join(ABSOLUTE_BASE, "src"),
});

module.exports = constants;
