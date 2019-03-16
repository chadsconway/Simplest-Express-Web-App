const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');

// Serve up public/ftp folder
app.use(serveStatic(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendfile('./public/index.html');
})

app.listen(3005);
