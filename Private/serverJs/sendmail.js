const nodemailer = require('nodemailer');
require('dotenv').config();

const clientText = `We are now into the busy wedding season and our small team are out focusing our attention on high quality childcare for the children we are looking after. We have intermittent access to emails and our time in the office is now limited until the end of September.

Rest assured, if you are enquiring for 2025, we have received your email and will get back to you, as soon as we are back in the office in October, to give your message the attention it deserves. In the meantime please view the attachments to read more about our services and to ensure we have all the details we need to provide you with a quote.

If your enquiry is for this Summer we are fully booked for large groups, however would be happy to discuss childcare for 1 or 2 children if we have availability.

Many thanks for your patience at this busy time and we look forward to discussing how we can help you.

Best wishes,

Harriet and Sinead`


function sendMail(name, tel, email, message){
    console.log(process.env.HOST)
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
            
        },
    })
    // transporter 2 is for testing
    let transporter2 = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
           user: 'marjory.bosco18@ethereal.email',
            pass: 'd3G4sKKTm2Jw5pJt7H'
        }
    });



    let mailOptions = {
        from: email,
        to: process.env.USER,
        subject: 'New enquiry',
        text: 'New enquiry from...  ' + name + ', telephone: ' + tel + ' message: ' + message + ' email: ' + email
    }

    let mailOptionsClient = {
        from: process.env.USER,
        to: email,
        subject: 'Thank you for you enquiry',
        text: 'Thank you ' + name + ' for your message. ' + clientText,
        attachments: [
            {
                filename: 'New-Enquiry-1.png',
                path: 'https://www.thepopupweddingcreche.fr/images/New-Enquiry-2.png'
            },
            {
                filename: 'New-Enquiry-2.png',
                path: 'https://www.thepopupweddingcreche.fr/images/New-Enquiry-2.png'
            }

        ]
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(mailOptions)
        }
    })

    transporter.sendMail(mailOptionsClient, function(error, info) {
        if (error) {
            console.log('client' + error)
        } else {
            console.log('sent to client')
        }
    })

    

}

module.exports = sendMail;

