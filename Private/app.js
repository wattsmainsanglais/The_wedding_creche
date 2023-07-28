const express = require('express');
const app = express();
require('dotenv').config;
const bodyParser = require ('body-parser')

const nodemailer = require('nodemailer');
const sendMail = require('./serverJs/sendmail');
const validator = require('validator');

const port = process.env.PORT || 4000;

app.use(express.static('../Public/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('contact', (req, res, next) =>{

})

app.listen(port, () => {
    console.log('Server is listening on Post 4000');
})