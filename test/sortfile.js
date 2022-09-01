const sortFile = require('../sortfile.js');
const assert = require('assert');
const fs = require('fs');

describe('sortFile', () => {
    // 第１引数がnullの時の挙動テスト（第２引数の値は何だとしても関係ない）
    it('first arg is null', () => {
        assert.equal(sortFile(null, null), null);
    });

    // 第１引数に与えられたファイルデータにエラーがある（第２引数の値は何だとしても関係ない）
    it('file is not found', () => {
        // このメソッドが使うのはoriginalname, filename, pathの３つだけなのでこれさえあればOK
        const result = sortFile(
            {
                fieldname: '',
                originalname: 'helloworld.txt',
                encoding: '',
                mimetype: '',
                destination: '',
                filename: 'abcdefg',
                path: './files/abcdefg',
                size: 0,
            },
            null
        );
        assert.equal(result, null);
    });

    // 第１引数の値が正常（新規）
    it('file info is valid', () => {
        if (!fs.existsSync('./files/testfile')) fs.writeFileSync('./files/testfile', 'HelloWorld');
        const result = sortFile(
            {
                fieldname: '',
                originalname: 'helloworld.txt',
                encoding: '',
                mimetype: '',
                destination: '',
                filename: 'testfile',
                path: './files/testfile',
                size: 0,
            },
            null
        );
        const pattern = new RegExp('^[0-9A-Z]{32}$');

        assert.equal(pattern.test(result), true);
        assert.equal(fs.existsSync('./files/' + result + '/helloworld.txt'), true);
    });

    // 第１引数の値が正常（追加）
    it('file info is valid', () => {
        if (!fs.existsSync('./files/testfile')) fs.writeFileSync('./files/testfile', 'HelloWorld');
        const result = sortFile(
            {
                fieldname: '',
                originalname: 'helloworld.txt',
                encoding: '',
                mimetype: '',
                destination: '',
                filename: 'testfile',
                path: './files/testfile',
                size: 0,
            },
            'BA9189358FEE4EDA86457051E1EA455C'
        );
        assert.equal(result, 'BA9189358FEE4EDA86457051E1EA455C');
        assert.equal(fs.existsSync('./files/BA9189358FEE4EDA86457051E1EA455C/helloworld.txt'), true);
    });
});
