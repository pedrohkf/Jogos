const div = document.querySelector('.container');
const carregando = document.querySelector('.carregando');
const inicio = document.querySelector('.jogar');
const intro = document.querySelector('.intro')

setTimeout(function(){
    document.querySelector('.audio').play();
}, 100);

setTimeout(function jogar() {
    div.style.backgroundColor = 'rgb(109, 109, 109)';
    inicio.style.display = 'flex';
    intro.style.display= 'none';
}, 12000);
