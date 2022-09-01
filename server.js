const express = require('express');
const multer = require('multer');
const sortFile = require('./sortfile.js');
const upload = multer({ dest: 'files/' });

const app = express();
app.post('/api/upload', upload.array('files'), (req, res) => {
    let id = null;
    if (req.files == null || req.files.length === 0) return res.sendStatus(400);
    req.files.forEach(f => (id = sortFile(f, id)));
    console.log(id);
    res.send(id);
});

app.use(express.static('./wwwroot'));
app.listen(process.env.HTTP_PLATFORM_PORT || 21000);
