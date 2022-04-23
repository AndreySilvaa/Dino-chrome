var game = document.getElementById("game")
var dino = document.getElementById("dino")
var cactu = document.getElementById("cactu")
const btjump = document.getElementById("btjump")

// PULO DO DINO
document.addEventListener("keydown", (Event) => {
    let tecla = Event.keyCode

    if(tecla == 38){
        if(!dino.classList.contains("pulo")){
            dino.classList.add("pulo")
        }
        
        if(window.innerWidth < 500){
            setTimeout(() =>{
                dino.classList.remove("pulo")
            }, 1000)
        }else{
            setTimeout(() =>{
                dino.classList.remove("pulo")
            }, 500)
        }
    }
})

// TESTANDO SE O CACTO BATEU NO DINO
setInterval(() => {
    if(dino.offsetTop >= 140 && cactu.offsetLeft <= 30 && cactu.offsetLeft >= 0){
        alert("Você Perdeu!!!")
        cactu.classList.remove("move")
        setTimeout(() => {
            cactu.classList.add("move")
        },1000)
    }
}, 10)


//COLOCAR IMG DE FUNDO

game.style.backgroundImage = "url('fundo2.jpg')";

if(window.innerWidth < 700){
    game.style.backgroundImage = "url('fundo.jpg')";
}


// RESPONSIVIDADE

// PULO

btjump.addEventListener("touchstart", () =>{
    if(!dino.classList.contains("pulo")){
        dino.classList.add("pulo")
        setTimeout(() =>{
            dino.classList.remove("pulo")
        }, 1000)
    }
})