//FUNCTIONs to handle contact details and validate the input

const sendMail = require ('./sendmail');
const validator = require ('validator');

vaildateContactForm = function(tel, email, cb){
    let msg = '';
    
    if(validator.isNumeric(tel, {no_symbols : false})){
        
        if(validator.isEmail(email)){
            
            return cb(null)

        } else {
            msg = 'Please enter a valid email address'
            return cb(msg);
        }

    } else {
        msg = 'Telephone number must be numerical (It is ok to add a + sign for typing country codes)'
        return cb(msg);
    }

}

exports.handleContactForm= function(name, tel, email, message, url, cb){
    console.log(url);
    const cleanName = validator.escape(name);
    const cleanMessage = validator.escape(message);
    vaildateContactForm(tel, email, function(msg){
        if(msg){
            return cb(msg)
        } else{
            sendMail(cleanName, tel, email, cleanMessage)
            return cb("Thank you " + name + " for your enquiry to The Pop-up Wedding Creche, we'll be in contact soon")
        }
    })
    
    

}