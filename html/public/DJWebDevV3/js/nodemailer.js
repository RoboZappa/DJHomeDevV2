require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASS,
  },
});
const options = {
  from: process.env.OUTLOOK_EMAIL,
  to: "info@djwebdev.net",
  subject: "Message from DJWebDev.net",
  text: "Wow, what a test",
};

const sendNodeMail = (email, name, message) => {
  options.subject = `Email from Name: ${name} Email: ${email} via DJWebDev.net`;
  options.text = message;

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
    return info;
  });
};

module.exports = sendNodeMail;
