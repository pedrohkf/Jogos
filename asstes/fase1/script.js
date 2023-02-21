
const sonic = document.querySelector('.sonic');
const motog = document.querySelector('.motog');
const restart = document.querySelector('.restart')
const moeda = document.querySelector('.moeda')

moeda.classList.add('moedas');



const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
    sonic.classList.remove('jump');
    }, 500);

}
    const loop = setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','' );

        console.log(sonicPosition);

        if (motogPosition < 110 && motogPosition > 0 && sonicPosition < 160) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.src = '/asstes/personagens/sonic game over.png'
            sonic.style.width = '130px';
            sonic.style.bottom = '80px';

            restart.src = '/asstes/imgs/restart.png'
            restart.style.width = '280px';
            restart.style.left = '530px'
            restart.style.bottom = '390px'
            
            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moedas.style.animation = '';
            moedas.style.animation = 'none';
        }

    }, 10);

document.addEventListener('keydown', jump);


/*etInterval(() => {
    moeda.style.width = '70px'
    moeda.style.bottom = '103px';hjvchjcvjvjvjghgjfv

}, 3000);*/











 
