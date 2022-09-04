const stringSpec = require('../../spec/string.js');
const s = require('@json-spec/core');
const assert = require('assert');

describe('string spec', () => {
    it('string pattern', () => {
        assert.ok(s.isValid(stringSpec, 'hello'));
    });
    it('number pattern', () => {
        assert.ok(!s.isValid(stringSpec, 0));
    });
    it('boolean pattern', () => {
        assert.ok(!s.isValid(stringSpec, true));
    });
    it('null pattern', () => {
        assert.ok(!s.isValid(stringSpec, null));
    });
    it('empty string pattern', () => {
        assert.ok(!s.isValid(stringSpec, ''));
    });
});
