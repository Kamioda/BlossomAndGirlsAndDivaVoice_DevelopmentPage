const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const MimeTypeReg = RegExp('^audio/*[a-zA-Z0-9]{1,}$');

/**
 * ファイルを仕分けする
 * @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number  }} FileInformation
 * @param {string|null} reservedId
 * @returns {string}
 */
module.exports = (FileInformation, reservedId) => {
    if (FileInformation == null || !fs.existsSync(FileInformation.path) || !MimeTypeReg.test(FileInformation.mimetype))
        return null;
    const id = reservedId == null ? uuidv4().split('-').join('').toUpperCase() : reservedId;
    const newDir = './files/' + id + '/';
    if (!fs.existsSync(newDir)) fs.mkdirSync(newDir);
    fs.renameSync(FileInformation.path, newDir + FileInformation.originalname);
    return id;
};
