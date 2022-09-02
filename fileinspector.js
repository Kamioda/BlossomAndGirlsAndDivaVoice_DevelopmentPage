const fs = require('fs');
const MimeTypeReg = RegExp('^audio/*[a-zA-Z0-9]{1,}$');

module.exports = {
    /**
     * 投稿された全ファイルを検査する
     * @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number }[]} FileInformations
     */
    deleteAll: FileInformations => {
        FileInformations.forEach(f => {
            fs.unlink(f.path, er => {
                if (er) console.log(er);
            });
        });
    },
    /**
     * 投稿された全ファイルのMimeTypeを検査する
     * @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number }[]} FileInformations
     * @returns {boolean}
     */
    inspectMimeTypeAll: FileInformations => FileInformations.some(f => !MimeTypeReg.test(f.mimetype)),
    /**
     * 投稿された全ファイルが正常に保存されているかを検査する
     * @param {{ fieldname: string, originalname: string, encoding: string, mimetype: string, destination: string, filename: string, path: string. size: number }[]} FileInformations
     * @returns {boolean}
     */
    savedAll: FileInformations => FileInformations.some(f => !fs.existsSync(f.path))
};
