const express = require('express');
const app = express();
require('dotenv').config;
const bodyParser = require ('body-parser')

const nodemailer = require('nodemailer');
const sendMail = require('./Private/serverJs/sendmail');
const validator = require('validator');
const handler = require('./Private/serverJs/handleContact')

const port = process.env.PORT || 4000;

app.use(express.static('views'))

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    
    
    res.render('../views/index');
});

// route for handling contact form, email will be sent to the wedding creche
app.post('/contact', (req, res, next) =>{
    
    let {name, telephone, email, message} = req.body;
    console.log(email);
    try{
    handler.handleContactForm(name, telephone, email, message, function(msg){
        res.status(201).send(JSON.stringify(msg))
        console.log(msg)
    })

    }
    catch(error) {
        console.log(error)
        res.status(201).send(JSON.stringify('Server issue, if the problem persists please contact us directly via our social media outlets'))
    }
})    
   // let msg = JSON.stringify('Thanks ' + name + ' email has been sent to ' + email)
    



app.listen(port, () => {
    console.log('Server is listening on Post 4000');

})