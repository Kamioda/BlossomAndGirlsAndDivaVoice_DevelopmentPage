const s = require('@json-spec/core');

// @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number  }} FileInformation


module.exports = s.object({
    required: {
        fieldname : typeof(fieldname) === 'string',
        originalname : typeof(originalname) === 'string',
        encoding : typeof(encoding) === 'string',
        mimetype : typeof(mimetype) === 'string',
        destination : typeof(destination) === 'string',
        filename : typeof(filename) === 'string',
        string : typeof(string) === 'string',
        size : typeof(size) === 'number'
    }
});
