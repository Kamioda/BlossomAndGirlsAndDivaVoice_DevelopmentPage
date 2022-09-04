const numberSpec = require('../../spec/number.js');
const s = require('@json-spec/core');
const assert = require('assert');

describe('number spec', () => {
    it('string pattern', () => {
        assert.ok(!s.isValid(numberSpec, 'hello'));
    });
    it('number pattern', () => {
        assert.ok(s.isValid(numberSpec, 0));
    });
    it('boolean pattern', () => {
        assert.ok(!s.isValid(numberSpec, true));
    });
    it('null pattern', () => {
        assert.ok(!s.isValid(numberSpec, null));
    });
});
