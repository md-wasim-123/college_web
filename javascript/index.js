const corros = document.querySelector('.corros')
const menu = document.querySelector('.menu');
const nuvbar = document.querySelector('.nav');

menu.addEventListener('click', function () {
    menu.style.display = 'none';
    corros.style.display = 'block';
    nuvbar.classList.toggle('show');
});

corros.addEventListener('click', function () {
    nuvbar.classList.remove('show');
    menu.style.display = 'block';
    corros.style.display = 'none';

})


