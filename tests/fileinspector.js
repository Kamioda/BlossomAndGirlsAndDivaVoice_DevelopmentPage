const inspector = require('../fileinspector.js');
const assert = require('assert');
const fs = require('fs');

const correctPattern = [
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/aac',
        destination: '',
        filename: '',
        path: './files/aaa',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/mp4',
        destination: '',
        filename: '',
        path: './files/bbb',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/mpeg',
        destination: '',
        filename: '',
        path: './files/ccc',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/ogg',
        destination: '',
        filename: '',
        path: './files/ddd',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/wav',
        destination: '',
        filename: '',
        path: './files/eee',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/webm',
        destination: '',
        filename: '',
        path: './files/fff',
        size: 0,
    },
];

const errorPattern = [
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/aac',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/mp4',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/mpeg',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/ogg',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: 'audio/wav',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    },
    {
        fieldname: '',
        originalname: '',
        encoding: '',
        mimetype: '',
        destination: 'text/plain',
        filename: '',
        path: '',
        size: 0,
    },
];

describe('file inspector', () => {
    before(() => {
        if (!fs.existsSync('./files/')) fs.mkdirSync('./files/');
        correctPattern.forEach(c => fs.writeFileSync(c.path, 'Hello World!'));
    });
    it('all audio file', () => {
        assert.equal(inspector.containOtherThanAudio(correctPattern), false);
    });
    it('contain other than audio', () => {
        assert.equal(inspector.containOtherThanAudio(errorPattern), true);
    });
    it('delete all 1', () => {
        inspector.deleteAll(correctPattern);
        assert.equal(
            correctPattern.some(c => fs.existsSync(c.path)),
            false
        );
    });
    before(() => {
        correctPattern.forEach(c => fs.writeFileSync(c.path, 'Hello World!'));
        fs.unlinkSync('./files/bbb');
    });
    it('delete all 2 / noexcept check', () => {
        inspector.deleteAll(correctPattern);
        assert.equal(
            correctPattern.some(c => fs.existsSync(c.path)),
            false
        );
    });
});
