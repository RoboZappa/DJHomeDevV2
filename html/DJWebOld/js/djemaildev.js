const sendMail = (email, name, message) => {
    const AWS = require('aws-sdk');
    AWS.config.region = 'us-east-1';
    var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
    AWS.config.credentials = credentials;

    var params = {
        Destination: {
            ToAddresses: [
                'info@djwebdev.net',
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: 'Email: ' + email + ' Message: ' + message,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'DJHelloDev'
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'DJHelloDev: ' + name
            }
        },
        Source: 'info@djwebdev.net'
    };

    var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function (data) {
            console.log(data.MessageId);
        }).catch(
            function (err) {
                console.error(err, err.stack);
                submitForm();
            });
}

module.exports = sendMail;