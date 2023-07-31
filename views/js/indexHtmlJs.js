

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

