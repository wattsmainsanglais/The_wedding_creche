

let scrollcontainer = document.querySelector('.gallery-container');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollcontainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollcontainer.scrollLeft += e.deltaY
    scrollcontainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click', ()=> {
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft += 600;
})

backBtn.addEventListener('click', ()=> {
    scrollcontainer.style.scrollBehavior = 'smooth';
    scrollcontainer.scrollLeft -= 600;
})

