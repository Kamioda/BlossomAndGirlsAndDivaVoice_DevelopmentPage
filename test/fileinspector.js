const assert = require('assert');
const inspector = require('../fileinspector.js');

const correctPattern = [
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
        mimetype: 'audio/webm',
        destination: '',
        filename: '',
        path: '',
        size: 0,
    }
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
    }
];

describe('file inspector', () => {
    it('all audio file', () => {
        assert.equal(inspector.containOtherThanAudio(correctPattern), false);
    });
    it('contain other than audio', () => {
        assert.equal(inspector.containOtherThanAudio(errorPattern), true);
    });
});
