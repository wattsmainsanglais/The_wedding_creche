const express = require('express');
const app = express();
require('dotenv').config;
const bodyParser = require ('body-parser')

const nodemailer = require('nodemailer');
const sendMail = require('./Private/serverJs/sendmail');
const validator = require('validator');

const port = process.env.PORT || 4000;

app.use(express.static('views'))

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    
    res.render('../views/index');
});

app.post('/contact', (req, res, next) =>{
    console.log(req.body);

    let msg = JSON.stringify('Thanks ' + req.body.name + ' email has been sent to ' + req.body.email)
    res.status(201).send(msg);

})

app.listen(port, () => {
    console.log('Server is listening on Post 4000');

})