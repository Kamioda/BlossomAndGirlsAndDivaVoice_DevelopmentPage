const express = require('express');
const path = require('path');
const multer = require('multer');
const sortFile = require('./sortfile.js');
const inspector = require('./fileinspector.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./serverconfig.json'));
const upload = multer({ dest: path.dirname(__dirname).replace(/\\/g, '/') + '/files/' });
const app = express();

app.post('/api/upload', upload.array('files'), (req, res) => {
    let id = null;
    if (req.files == null || req.files.length === 0) return res.sendStatus(400);
    if (inspector.inspectMimeTypeAll(req.files)) {
        inspector.deleteAll(req.files);
        return res.sendStatus(400);
    }
    req.files.forEach(f => (id = sortFile(f, id)));
    console.log(id);
    res.send(id);
});

app.use(express.static(path.dirname(__dirname).replace(/\\/g, '/') + '/wwwroot'));
app.listen(process.env.HTTP_PLATFORM_PORT || config.port);
