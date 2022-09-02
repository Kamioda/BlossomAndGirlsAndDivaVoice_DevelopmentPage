const MimeTypeReg = RegExp('^audio/*[a-zA-Z0-9]{1,}$');

/**
 * 投稿された全ファイルを検査する
 * @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number }[]} FileInformations
 * @returns {boolean}
 */
module.exports = (FileInformations) => FileInformations.some(f => !MimeTypeReg.test(f.mimetype));
