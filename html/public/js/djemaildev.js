const sendMail = (email, name, message) => {
    const AWS = require('aws-sdk');
    AWS.config.getCredentials(function (err) {
        if (err) console.log(err.stack);
        // credentials not loaded
        else {
            console.log("Access key:", AWS.config.credentials.accessKeyId);
            console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
        }
    });
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
                    Data: message,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'DJHelloDev'
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: name
            }
        },
        Source: email
    };

    var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function (data) {
            console.log(data.MessageId);
        }).catch(
            function (err) {
                console.error(err, err.stack);
            });
    // AWS.SES.sendEmail(params, function (err, data) {
    //     if (err) console.log(err, err.stack);
    //     else console.log(data);
    // });
}

module.exports = sendMail;