const sonic = document.querySelector('.sonic')
const silver = document.querySelector('.silver')


setTimeout(() => {
    document.querySelector('.silver').style.display='none';
}, 1600);

    setTimeout(() => {
        sonic.src = '/asstes/personagens/sonic-foguete.gif'
 }, 1700);

 setTimeout(() => {
    window.location.replace("/asstes/fase2/fase2.html");
 }, 10000);






