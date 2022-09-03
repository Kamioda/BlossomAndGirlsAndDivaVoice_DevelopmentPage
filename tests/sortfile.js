const sortFile = require('../sortfile.js');
const assert = require('assert');
const fs = require('fs');

describe('sortFile', () => {
    before(() => {
        if (!fs.existsSync('./files/')) fs.mkdirSync('./files/');
        if (!fs.existsSync('./files/BA9189358FEE4EDA86457051E1EA455C/')) fs.mkdirSync('./files/BA9189358FEE4EDA86457051E1EA455C/');
        if (!fs.existsSync('./files/testfile01')) fs.writeFileSync('./files/testfile01', 'HelloWorld');
        if (!fs.existsSync('./files/testfile02')) fs.writeFileSync('./files/testfile02', 'HelloWorld');
    });
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
        const result = sortFile(
            {
                fieldname: '',
                originalname: 'helloworld.txt',
                encoding: '',
                mimetype: '',
                destination: '',
                filename: 'testfile01',
                path: './files/testfile01',
                size: 0,
            },
            null
        );
        const pattern = new RegExp('^[0-9A-Z]{32}$');

        assert.equal(pattern.test(result), true);
        assert.equal(fs.existsSync('./files/' + result + '/helloworld.txt'), true);
    });

    // 第１引数の値が正常（追加）
    it('file info is valid(append)', () => {
        const result = sortFile(
            {
                fieldname: '',
                originalname: 'helloworld.txt',
                encoding: '',
                mimetype: '',
                destination: '',
                filename: 'testfile02',
                path: './files/testfile02',
                size: 0,
            },
            'BA9189358FEE4EDA86457051E1EA455C'
        );
        assert.equal(result, 'BA9189358FEE4EDA86457051E1EA455C');
        assert.equal(fs.existsSync('./files/BA9189358FEE4EDA86457051E1EA455C/helloworld.txt'), true);
    });

    after(() => {
        if (fs.existsSync('./files/testfile')) fs.unlinkSync('./files/testfile', 'HelloWorld');
    });
});
