const nodemailer = require('nodemailer');
require('dotenv').config();


function sendMail(email, token){

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
        from: 'hrw@hotmail.co.uk',
        to: email,
        subject: 'Thank you for your enquiry',
        text: 'Hello, Thank you for your enquiry to the Wedding creche, we will get back to asap using the contact details that you have provided. Have a good day from Harriet & Sinead at The Wedding Creche.  '
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(mailOptions)
        }
    })

}

module.exports = sendMail;

