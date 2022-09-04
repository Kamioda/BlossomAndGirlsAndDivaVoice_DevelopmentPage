const s = require('@json-spec/core');
const fileSpec = require('./file.js');

module.exports = s.array(x => s.isValid(fileSpec, x));
