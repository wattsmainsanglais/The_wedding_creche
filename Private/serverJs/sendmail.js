const nodemailer = require('nodemailer');
require('dotenv').config();


function sendMail(name, tel, email, message){

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        /*secure: true,*/
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    })

    let mailOptions = {
        from: email,
        to: process.env.USER,
        subject: 'New enquiry',
        text: 'New equiry from...  ' + name + ', telephone: ' + tel + ' message: ' + message 
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(mailOptions)
        }
    })

}

module.exports = sendMail;

