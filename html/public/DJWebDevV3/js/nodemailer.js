const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});
const options = {
    from: '',
    to: "info@djwebdev.net",
    subject: '',
    text: ''
}
const sendNodeMail = (email, name, text) => {
    options.from = email;
    options.subject = `Email from ${name} via DJWebDev.net`;
    options.text = text

    transporter.sendMail(options, function (err, info){
        if(err) {
            console.log(err);
            return;
        }
        console.log("Sent: " + info.response);
    })
}

module.exports = sendNodeMail;