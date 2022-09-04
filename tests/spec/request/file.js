const fileSpec = require('../../../spec/request/file.js');
const s = require('@json-spec/core');
const assert = require('assert');

describe('file spec', () => {
    it('valid pattern', () => {
        assert.ok(
            s.isValid(fileSpec, {
                fieldname: 'aaa',
                originalname: 'aaa',
                encoding: 'utf8',
                mimetype: 'audio/aac',
                destination: './files/',
                filename: 'aaa',
                path: './files/aaa',
                size: 100,
            })
        );
    });
    it('type is invalid', () => {
        assert.ok(
            !s.isValid(fileSpec, {
                fieldname: 'aaa',
                originalname: 'aaa',
                encoding: 'utf8',
                mimetype: 'audio/aac',
                destination: './files/',
                filename: 'aaa',
                path: './files/aaa',
                size: '100',
            })
        );
    });
    it('contain null', () => {
        assert.ok(
            !s.isValid(fileSpec, {
                fieldname: 'aaa',
                originalname: 'aaa',
                encoding: null,
                mimetype: 'audio/aac',
                destination: './files/',
                filename: 'aaa',
                path: './files/aaa',
                size: 100,
            })
        );
    });
    it('contain empty item', () => {
        assert.ok(
            !s.isValid(fileSpec, {
                fieldname: 'aaa',
                originalname: '',
                encoding: 'utf8',
                mimetype: 'audio/aac',
                destination: './files/',
                filename: 'aaa',
                path: './files/aaa',
                size: 100,
            })
        );
    });
    it('exist missing item', () => {
        assert.ok(
            !s.isValid(fileSpec, {
                originalname: '',
                encoding: 'utf8',
                mimetype: 'audio/aac',
                destination: './files/',
                filename: 'aaa',
                path: './files/aaa',
                size: 100,
            })
        );
    });
});
