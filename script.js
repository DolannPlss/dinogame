const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo')

let pulando= false

let position = 0;
function handlekeyup(event){
    
    if (event.keyCode === 32){
        if (!pulando){
            pulo();
        }
    }
}
function pulo(){
    pulando = true;
    let intervaloPulo= setInterval(() =>{
        if (position >= 150){
         clearInterval(intervaloPulo);
          let intervaloQueda = setInterval(() => {
            if (position <= 0){
                clearInterval(intervaloQueda)
                pulando = false;
            } else{ 
                position -=20;
                dino.style.bottom = position + 'px';
            }
            }, 20);   
        }else{
        position += 20;
        dino.style.bottom = position + 'px';
        }
    } ,20);
}

function criarCacto(){
        const cacto = document.createElement('div');
        let cactoPosi = 1000
        let randomTime = Math.random() * 6000;


        cacto.classList.add('cacto');
        cacto.style.left = 1000 + 'px';
        fundo.appendChild(cacto);

        let intervaloesquerdo = setInterval(() => {
           
            if (cactoPosi < -60 ) {
                clearInterval(intervaloesquerdo);
                fundo.removeChild(cacto);
            }else if ( cactoPosi > 0 && cactoPosi < 60 && position <60) {
                clearInterval(intervaloesquerdo);
                document.body.innerHTML= '<h1 class="game-over">Fim de jogo</h1>';
            }else {
                cactoPosi-=10;
                cacto.style.left = cactoPosi + 'px';
            }
        }, 20);

        setTimeout(criarCacto, randomTime);
    }
    criarCacto();
document.addEventListener('keyup', handlekeyup);