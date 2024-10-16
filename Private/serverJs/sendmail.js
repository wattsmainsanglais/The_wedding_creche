const nodemailer = require('nodemailer');
require('dotenv').config();




function sendMail(name, tel, email, message){
    
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

    const clientText = 
    
    `<p>Thank you ${name} for contacting us here at The Pop-Up Wedding Crèche..</p>
    <br>
    <p>We have received your email and aim to reply to you within three working days.</p>
     <br>
    <p>If this is an initial enquiry please read our information brochure attached to this email, so you can further understand our services. Please fill out our initial enquiry form which gives us the details needed to provide you with a quote ( link at the bottom of this email).</p>
     <br>
    <p>Please follow us on Instagram to see what our wonderful team have been up to: @popupweddingcreche</p>
     <br>
    <p>Thank you so much and we look forward to speaking to you,</p>
     <br>
    <p>Best wishes,</p>
     <br>
    <p>Sinead</p>
     <br>
    
    
    <p><a href='https://docs.google.com/document/d/1F4KhuIwFr9kqbjKyar5Z277YYqw3PDSV6QSyGALNgfc/edit?tab=t.0'>Link to our Initial Enquiry Form</a></p>
   


    
    `

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
        html: clientText,
        attachments: [
            {
                filename: 'service-options.pdf',
                path: 'https://www.thepopupweddingcreche.fr/images/service-options.pdf'
            },
          

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

