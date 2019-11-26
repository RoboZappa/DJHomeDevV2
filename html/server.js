const express = require('express');
const http = require('http');
const sendMail = require('./public/js/djemaildev');
const app = express();

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
const server = http.createServer(app);

server.listen(8000);
console.log('Express server running');