let Scrollbar = document.querySelector('.gallery');
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

Scrollbar.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    Scrollbar.scrollLeft += evt.deltaY;
    Scrollbar.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
    Scrollbar.style.scrollBehavior = 'smooth';
    Scrollbar.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
    Scrollbar.style.scrollBehavior = 'smooth';
    Scrollbar.scrollLeft -= 900;
});
