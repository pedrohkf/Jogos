
const sonic = document.querySelector('.sonic');
const motog = document.querySelector('.motog');
const restart = document.querySelector('.restart')
const moeda = document.querySelector('.moeda')
const sonicOver = document.querySelector('.sonic-morto')

moeda.classList.add('moedas');



const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);

}
const loop = setInterval(() => {

    const motogPosition = motog.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (motogPosition <= 110 && motogPosition > 0 && sonicPosition < 170) {

        motog.style.animation = '';
        motog.style.left = `${motogPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${motogPosition}px`;
        sonic.style.display = 'none';
        sonicOver.style.display = 'flex';

        restart.style.display = 'flex';

        moeda.style.animation = '';
        moeda.style.animation = 'none';
    }

}, 10);

function loop2() {
    setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 100 && motogPosition > 0 && sonicPosition < 220) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
        }

    }, 10);
};

if (window.screen.width < 1285 && window.screen.width > 1025) {
    loop2();
}

function loop4() {
    setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 100 && motogPosition > 0 && sonicPosition < 270) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moeda.style.display = 'none';

        }

    }, 10);
};

if (window.screen.width < 1025 && window.screen.width > 916) {
    loop4();
}


function loop3() {
    const loop3 = setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 46 && motogPosition > 0 && sonicPosition < 405) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moeda.style.display = 'none';
        }

    }, 10);
}

if (window.screen.width < 916 && window.screen.width > 845) {
    loop3();
}

function loop5() {
    const loop5 = setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 45 && motogPosition > 0 && sonicPosition < 306) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moeda.style.display = 'none';
        }

    }, 10);
}

if (window.screen.width < 845 && window.screen.width > 668) {
    loop5();
}

function loop7() {
    const loop5 = setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 45 && motogPosition > 0 && sonicPosition < 355) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moeda.style.display = 'none';
        }

    }, 10);
}

if (window.screen.width < 668) {
    loop7();
}

function loop8() {
    const loop5 = setInterval(() => {

        const motogPosition = motog.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (motogPosition <= 45 && motogPosition > 0 && sonicPosition < 365) {

            motog.style.animation = '';
            motog.style.left = `${motogPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${motogPosition}px`;
            sonic.style.display = 'none';
            sonicOver.style.display = 'flex';

            restart.style.display = 'flex';

            moeda.style.animation = '';
            moeda.style.animation = 'none';
            moeda.style.display = 'none';
        }

    }, 10);
}

if (window.screen.width > 668 && window.screen.width < 745) {
    loop8();
}

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);


/*etInterval(() => {
    moeda.style.width = '70px'
    moeda.style.bottom = '103px';hjvchjcvjvjvjghgjfv

}, 3000);*/












