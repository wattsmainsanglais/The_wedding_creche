
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

//JS for contact button/ modal message

const contactButton = document.getElementById('contact-button')
const modalDiv= document.getElementById('modal');
const closeButton = document.getElementById('close-modal');

contactButton.addEventListener('click', (e) =>{
    e.preventDefault();
    modalDiv.style.display = 'block';

})

closeButton.addEventListener('click', () =>{
    modalDiv.style.display = 'none';
})



