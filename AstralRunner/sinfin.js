const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const obstacle2 = document.getElementById('obstacle2');
const inicio = document.getElementById('inicio');
const boton = document.getElementById('botonsito');
const boton2 = document.getElementById('botonsito2');
const score = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const final = document.getElementById('final');
const boton3 = document.getElementById('botonsito3');
const boton4 = document.getElementById('botonsito4');
const derecha = document.getElementById('derecha');
const izquierda = document.getElementById('izquierda');
let cnt = 0;

function startgame() {
    cnt = 0;
    playerstart('./media/Alien_01.png', arr);
    perder();
    inicializar();
}

function playagain() {
    cnt = 0;
    playerstart('./media/Alien_01.png', arr);
    perder();
    restart();
}

function exit() {
    // let cookieval1 = `${cnt}_1`;
    // if (buscarCookie('Astral Runner') === undefined) {
    //     crearCookie('Astral Runner', cookieval1);
    // } else {
    //     let cookieScore = buscarCookie('Astral Runner');
    //     const cookieScoreOld = cookieScore.slice(0, -2);

    //     if (cnt > cookieScoreOld) {
    //         crearCookie('Astral Runner', cookieval1);
    //         console.log(cookieval1);
    //     }

    // }
    window.location = "/landingPage/index.php";
}

function inicializar() {
    // cnt = 0;
    derecha.style.width = "39.1%";
    izquierda.style.width = "21.7%";
    inicio.style.zIndex = "-1";
    inicio.style.width = "0";
    inicio.style.height = "0";
    boton.style.fontSize = "0px";
    boton.style.padding = "0px 0px";
    boton2.style.fontSize = "0px";
    boton2.style.padding = "0px 0px";
    obstacle.style.display = "block";
    obstacle2.style.display = "block";
    obstacle.style.left = "730px";
    obstacle2.style.left = "1230px";
    obstacle.style.animation = "bloque 3s infinite linear";
    obstacle2.style.animation = "aceite 3s infinite linear";
    boton.disabled = true;
}

function restart() {
    // cnt = 0;
    derecha.style.width = "39.1%";
    izquierda.style.width = "21.7%";
    final.style.zIndex = "-1";
    final.style.width = "0";
    final.style.height = "0";
    boton3.style.fontSize = "0px";
    boton3.style.padding = "0px 0px";
    boton4.style.fontSize = "0px";
    boton4.style.padding = "0px 0px";
    obstacle.style.display = "block";
    obstacle2.style.display = "block";
    obstacle.style.left = "730px";
    obstacle2.style.left = "1230px";
    obstacle.style.animation = "bloque 3s infinite linear";
    obstacle2.style.animation = "aceite 3s infinite linear";
    boton3.disabled = true;
}

function saltar() {
    if (player.classList != "animate") {
        player.classList.add("animate");
    }

    setTimeout(function () {
        player.classList.remove("animate");
        cnt++;
        score.setAttribute("value", cnt);
        score.innerHTML = `SCORE: ${score.getAttribute("value")}`;
        if (cnt >= 10 && cnt < 20) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 2.5s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 2.5s infinite linear";
        }
        else if (cnt >= 20 && cnt < 30) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 2s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 2s infinite linear";
        }
        else if (cnt >= 30 && cnt < 40) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 1.5s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 1.5s infinite linear";
        }
        else if (cnt >= 40 && cnt < 50) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 1s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 1s infinite linear";
        }
        else if (cnt >= 50 && cnt < 100) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 0.7s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 0.7s infinite linear";
        }
        else if (cnt >= 100 && cnt < 100000) {
            obstacle.style.animation = "none";
            obstacle.style.left = "730px";
            obstacle.style.animation = "bloque 0.5s infinite linear";
            obstacle2.style.animation = "none";
            obstacle2.style.left = "1230px";
            obstacle2.style.animation = "aceite 0.5s infinite linear";
        }
    }, 500);
}

window.addEventListener("keypress", event => {
    if (event.key === " " || event.code == "Space") {
        saltar();
    }
});

function perder() {
    var lose = setInterval(function () {
        var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        var oilspill = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
        if ((blockLeft < 120 && blockLeft > 50 && playerTop >= 140) || (oilspill < 120 && oilspill > 60 && playerTop >= 120)) {
            gameover();
        }
    }, 10);
}

function gameover() {
    finalScore.setAttribute("value", cnt);
    finalScore.innerHTML = `FINAL SCORE: ${finalScore.getAttribute("value")}`;
    derecha.style.width = "20%";
    izquierda.style.width = "10%";
    obstacle.style.animation = "none";
    obstacle2.style.animation = "none";
    obstacle.style.left = "730px";
    obstacle2.style.left = "1230px";
    obstacle.style.display = "none";
    obstacle2.style.display = "none";
    final.style.zIndex = "4";
    final.style.width = "1100px";
    final.style.height = "600px";
    boton3.style.fontSize = "16px";
    boton3.style.padding = "16px 30px";
    boton4.style.fontSize = "16px";
    boton4.style.padding = "16px 30px";
    boton.disabled = false;
    boton3.disabled = false;

    let cookieval1 = `${cnt}_1`;
    if (buscarCookie('Astral Runner') === undefined) {
        crearCookie('Astral Runner', cookieval1);
    } else {
        let cookieScore = buscarCookie('Astral Runner');
        const cookieScoreOld = cookieScore.slice(0, -2);

        if (cnt > cookieScoreOld) {
            crearCookie('Astral Runner', cookieval1);
            console.log(cookieval1);
        }
    }
}

var arr = [];

arr = [
    "./media/Alien_01.png",
    "./media/Alien_02.png",
    "./media/Alien_03.png",
    "./media/Alien_04.png",
    "./media/Alien_05.png",
    "./media/Alien_06.png",
    "./media/Alien_07.png",
    "./media/Alien_08.png"
];


var i = 0;


function playerstart() {
    document.getElementById("playerrun").src = arr[i];
    i++;
    if (i == arr.length) {
        i = 0;
    }
    setTimeout(function () { playerstart(); }, 100);
}