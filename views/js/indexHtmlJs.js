




// JS for scrolling gallery 
let scrollcontainer = document.querySelectorAll(".gallery-container");
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');



for(let i= 0 ; i < scrollcontainer.length; i++){
    let item = scrollcontainer[i];
   
    item.addEventListener('wheel', (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY
    item.style.scrollBehavior = 'auto';
    })
}


nextBtn.addEventListener('click', ()=> {
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft += 600;
})

backBtn.addEventListener('click', ()=> {
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft -= 600;
})

// function to clear form after post
function clearData(){
    document.getElementById('contactForm').reset();
  }

//Js for contact form api/post details

urlContact = 'http://localhost:4000/contact'
let modalContainer = document.getElementById('modal-p')
let modalDiv= document.getElementById('modal');

const postContactForm = async (name, tel, email, message) => {

    modalContainer.innerText = ''

    const data = JSON.stringify({
        'name': name,
        'telephone': tel,
        'email': email,
        'message': message
    })

    try{
        const response = await fetch(urlContact, {
            method: 'POST',
            credentials: 'include',
            body: data,

            headers: {
                'Content-type': 'application/json',  
            }
        })

       
        if(response.ok){
            const jsonResponse = await response.json();
            modalContainer.innerText = jsonResponse;
            clearData();
           
        } else {
            modalContainer.innerText = 'Problem with server'
        }

    }

    catch(error){

        console.log('There is an error...', error);
        modalContainer.innerText = error

    }

   
    modalDiv.style.display = 'block';

}


  

//JS for contact button/ modal message

const contactButton = document.getElementById('contact-button')

const closeButton = document.getElementById('close-modal');


contactButton.addEventListener('click', (e) =>{
    const name = document.getElementById('name').value;
    const tel = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    e.preventDefault();
   
    postContactForm(name, tel, email, message);
   
})

closeButton.addEventListener('click', () =>{
    modalDiv.style.display = 'none';
})



