//FUNCTIONs to handle contact details and validate the input

const sendMail = require ('./sendmail');
const validator = require ('validator');

vaildateContactForm = function(tel, email, url, cb){
    let msg = '';
    
    if(validator.isNumeric(tel, {no_symbols : false})){
        
        if(validator.isEmail(email)){
            
            return cb(null)

        } else {
            if(url === 'https://www.thepopupweddingcreche.fr/fr'){
                msg = "S'il vous plaît, mettez une adresse email valide"
                return cb(msg);
            } else {
                msg = 'Please enter a valid email address'
                return cb(msg);
            }
            
        }

    } else {
        if(url === 'https://www.thepopupweddingcreche.fr/fr'){
            msg = 'Le numéro de téléphone doit être numérique (utilisez le signe + pour les numéros internationaux)'
            return cb(msg);

        } else {
             msg = 'Telephone number must be numerical (It is ok to add a + sign for typing country codes)'
        return cb(msg);
        }
       
    }

}

exports.handleContactForm= function(name, tel, email, message, url, cb){
    
    const cleanName = validator.escape(name);
    const cleanMessage = validator.blacklist(message, "<>[]{}" );
    vaildateContactForm(tel, email, url, function(msg){
        if(msg){
            return cb(msg)
        } else{
            sendMail(cleanName, tel, email, cleanMessage)
            if(url === 'https://www.thepopupweddingcreche.fr/fr'){
                return cb("Merci pour votre demande " + name + ". Nous vous contacterons bientôt")
            } else {
                return cb("Thank you " + name + " for your enquiry to The Pop-up Wedding Creche, we'll be in contact soon")
            }
            
        }
    })
    
    

}