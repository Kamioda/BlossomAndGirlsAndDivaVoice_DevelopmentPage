const s = require('@json-spec/core');

module.exports = s.spec(str => typeof str === 'string' && str.length > 0);
