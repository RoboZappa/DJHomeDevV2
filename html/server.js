const express = require('express');
const http = require('http');
const app = express();
const httpPort = 80;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use('/', express.static('public'));

http.createServer(app).listen(httpPort);
