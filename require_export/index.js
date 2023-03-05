

const logger = require("./logger")
/**
 * require finding route
 * 1. logger.js
 * 2. logger.json
 * 3. check the entry of package.json
 * 4. index.js
 */
// logger("hello");
console.log(logger.endPoint);

const server = require('server')
/**
 * require finding route
 * 'E:\\study\\node\\require_export\\node_modules',
    'E:\\study\\node\\node_modules',
    'E:\\study\\node_modules',
    'E:\\node_modules'
 */
console.log(module);