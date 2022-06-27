const express = require('express');
const mail = require('./public/DJWebDevV3/js/nodemailer')
const http = require('http');
const app = express();
const httpPort = 80;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use('/', express.static('public'));

app.post('/email', (req, res) => {
    console.log(req.body);

    mail(req.body.email, req.body.name, req.body.message, function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        console.log('Email Submitted');
        return res.json({ message: 'Email Submitted' });
    });
});

http.createServer(app).listen(httpPort);
