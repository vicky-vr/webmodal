var modalBg = document.querySelector('.modal-bg');
var modalBtn = document.querySelector('.modal-btn');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', () =>{
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',() =>{
    modalBg.classList.remove('bg-active');
})