var game = document.getElementById("game")
var dino = document.getElementById("dino")
var cactu = document.getElementById("cactu")
const tela = document.querySelector(".tela")
const btplay = document.getElementById("btplay")
const btjump = document.getElementById("btjump")
const score = document.getElementById("score")
const maxscore = document.getElementById("totalscore")
var pontos = 0
var roda = false
var frame

// WEB STORAGE
if(typeof(Storage) != "undefined"){
    console.log(localStorage.score)
    if(localStorage.score == "undefined" || localStorage.score == null){
        localStorage.score = 1      
    }

    maxscore.innerText = "Pontuação máxima: " + localStorage.score
}else{
    alert("Web Storage sem suporte.")
}


// GAME
btplay.addEventListener("click", () =>{
    roda = true
    tela.classList.add("hidden")
    dino.style.zIndex = "10"
    cactu.style.zIndex = "10"
    cactu.classList.add("move")


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
            
            if(pontos > localStorage.score){
                localStorage.score = pontos
                maxscore.innerText = "Pontuação máxima: " + localStorage.score
            }
            cancelAnimationFrame(frame)
            pontos = 0
            score.innerText = "Score: " + pontos
            roda = false
            tela.classList.remove("hidden")
            dino.style.zIndex = "-10"
            cactu.style.zIndex = "-10"
            cactu.classList.remove("move")
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

    // Score
    contagem()
    function contagem(){
        pontos++
        score.innerText = "Score:" + pontos

        frame = requestAnimationFrame(contagem)
    }

    
})