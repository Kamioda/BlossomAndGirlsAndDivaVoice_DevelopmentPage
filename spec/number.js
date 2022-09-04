const s = require('@json-spec/core');

module.exports = s.spec(num => typeof num === 'number');
