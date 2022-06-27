require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN
    }
});
const options = {
    from: 'test@djwebdev.net',
    to: "info@djwebdev.net",
    subject: 'Testing Nodemailer',
    text: 'Wow, what a test'
}

// transporter.sendMail(options, function(err, info) {
//     if(err) {
//         console.log('Env', process.env.CLIENT_ID);
//         console.log(err);
//         return;
//     }
//     console.log(info.response);
// });

const sendNodeMail = (email, name, message) => {
    options.from = email;
    options.subject = `Email from ${name} via DJWebDev.net`;
    options.text = message

    transporter.sendMail(options, function (err, info){
        if(err) {
            console.log(err);
            return;
        }
        console.log("Sent: " + info.response);
    })
}

module.exports = sendNodeMail;