const s = require('@json-spec/core');
const stringSpec = require('../string.js');
const numberSpec = require('../number.js');

// @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number  }} FileInformation

module.exports = s.object({
    required: {
        fieldname: stringSpec,
        originalname: stringSpec,
        encoding: stringSpec,
        mimetype: stringSpec,
        destination: stringSpec,
        filename: stringSpec,
        path: stringSpec,
        size: numberSpec,
    },
});
