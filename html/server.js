const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const sendMail = require('./public/js/djemaildev');
const app = express();
const httpPort = 80;
const httpsPort = 443;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Production Creds
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/djwebdev.net/privkey.pem', 'utf8' ),
    cert: fs.readFileSync('/etc/letsencrypt/live/djwebdev.net/cert.pem', 'utf8')
}

// Local Creds
// const options = {
//      key: fs.readFileSync('./creds/key.pem', 'utf8' ),
//      cert: fs.readFileSync('./creds/server.crt', 'utf8')
// }

// Send Email method from djemaildev.js
app.post('/email', (req, res) => {
    const { email, name, message } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, name, message, function (err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email Submitted');
        return res.json({ message: 'Email Submitted' });
    });
});

app.use(function (req, res, next) {
    if (!req.secure) {
        return res.redirect(['https://djwebdev.net']);
    }
    next();
});
app.use('/', express.static('public'));

http.createServer(app).listen(httpPort);
console.log('Express server running on http port: ', httpPort);
https.createServer(options, app).listen(httpsPort);
console.log('Express server running on https port: ', httpsPort);
