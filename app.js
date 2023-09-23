const express = require('express');
const app = express();
require('dotenv').config;
const bodyParser = require ('body-parser')

const nodemailer = require('nodemailer');
const sendMail = require('./Private/serverJs/sendmail');
const validator = require('validator');
const handler = require('./Private/serverJs/handleContact')

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
        "default-src 'self'; font-src 'self' https://fonts.gstatic.com ; img-src 'self' 'unsafe-inline' ; script-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com ; style-src 'self'; frame-src 'self'; connect-src http://localhost:4000 https://theweddingcreche-production.up.railway.app/ ; worker-src blob:; child-src blob:"
    );
    res.setHeader('X-Content-Type-Options', 'nosniff');
  
  
    const allowedOrigins = ['https://theweddingcreche-production.up.railway.app/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
  
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

const port = process.env.PORT || 4000;

app.use(express.static('views'))

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    
    
    res.render('../views/index');
});


app.get('/fr', (req, res) => {
    res.render('../views/fr');
})

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