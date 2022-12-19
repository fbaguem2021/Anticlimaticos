const popup = document.getElementById("popup");
const popup_h = document.getElementById("popup__head");
const popup_t = document.getElementById("popup__text");
showPopUP(true);
function showPopUP(tutorial=false) {
    if (tutorial) {
        popup.style.display = "";
        loadTutorial();
        document.querySelector("[name=close]").onclick= ()=> cerrar();
    } else {
        popup.style.display = "";
        loadEndGame();
        document.querySelector("[name=quit]").onclick=  ()=> salir();
        document.querySelector("[name=repeat]").onclick=()=> repetir();
        guardarPuntuacion()
    }
    
}
function loadTutorial() {
    popup_h.innerHTML="Instrucciones del Juego"
    popup_t.innerText=
            "La barra que se encuentra en la parte superior izquierda,"
            +" determina la fuerza del proyectil\n"
            +"Para disparar una bala, solo se ha de pulsar la tecla espaciadora.";
    document.getElementById("popup__tuto-buttons").style.display = "";
    document.getElementById("popup__game-buttons").style.display = "none";
}
function loadEndGame() {
    popup_h.innerHTML= "Fin del Juego";
    if (currentlevel == "endgame") {
        popup_t.innerText=
            "Has apagado todos los incendios antes de que se acabara el tiempo y la munición.\n"
            +"Tu puntuaciñon es de: "+currentScore+" puntos"
    } else if (currentlevel == "gameover" && bullets == 0) {
        popup_t.innerText=
            "Has utilizado todos los disparos y no has dado al objetivo.\n"
            +"Tu puntuación es de: "+currentScore+" puntos"
    } else if (currentlevel == "gameover" && time == 0) {
        popup_t.innerText=
            "Se ha acabado el tiempo y no has podido apagar el incendio.\n"
           +"Tu puntuación es de: "+currentScore+" puntos";
    }
    document.getElementById("popup__game-buttons").style.display = "";
    document.getElementById("popup__tuto-buttons").style.display = "none";
}
function salir() {
    document.getElementById("popup__game-buttons").style.display = "none";
    popup.style.display = "none";
    window.location="/landingPage/index.php";
}
function repetir() {

    document.getElementById("popup__game-buttons").style.display = "none";
    popup.style.display = "none";
    location.reload();
}
function cerrar() {
    document.getElementById("popup__tuto-buttons").style.display = "";
    popup.style.display ="none";
    startGame();
}
function guardarPuntuacion() {
    let cookieval = `${currentScore}_4`;
    if (buscarCookie('Fire Canoneer') == undefined) {
        crearCookie('Fire Canoneer', cookieval);
    } else {
        let cookieScore = buscarCookie('Fire Canoneer');
        const cookieScoreOld = cookieScore.slice(0, -2);

        if (score > cookieScoreOld) {
            crearCookie('Fire Canoneer', cookieval);
            console.log(cookieval);
        }
    }
}