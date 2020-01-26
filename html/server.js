const express = require('express');
const http = require('http');
const https = require('https');
// const forceSsl = require('express-force-ssl');
const fs = require('fs');
const sendMail = require('./public/js/djemaildev');
const app = express();
// const options = {
//     key: fs.readFileSync('./creds/key.pem', 'utf8'),
//     cert: fs.readFileSync('./creds/server.crt', 'utf8')
// }
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/djwebdev.net/privkey.pem', 'utf8'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/djwebdev.net/cert.pem', 'utf8')
// }
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    const { email, name, message } = req.body;
    console.log('Data: ', req.body);
    
    sendMail(email, name, message, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({message: err.message || 'Internal Error'});
        } 
        console.log('Email Submitted');
        return res.json({ message: 'Email Submitted'});
    });
})

app.use('/', express.static('public'));

http.createServer(app).listen(8000);
// console.log('Express http server running on port 4000');
// https.createServer(options, app).listen(8000);
console.log('Express https server running on port 8000');