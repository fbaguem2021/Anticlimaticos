// desactiva la opción de arrastrar
window.ondragstart = function() {return false}
const rellenoPower = $('.line');
var stopAnimation = false;
let currentlevel="level1";
let time = 2;
let score = getScore(currentlevel);

const timer = startGame();
// ===================== varias =====================
function startGame() {
    startAnimation();
    return setTimer(currentlevel);
}
function getScore(level) {
    return { "level1": 500, "level2": 1000, "level3": 1500, "level4": 2000, "level5": 2500 }[level];
}
// =================== game timer ===================
function setTimer(level) {
    const timerlbl = document.getElementById("timer");
    const scorelbl = document.getElementById('score');
    const diff = score / time;
    timerlbl.innerHTML = `Tiempo: ${time}s`;
    const t = setInterval(function () {
        time--;
        score-=diff;
        timerlbl.innerHTML = `Tiempo: ${time}s`;
        scorelbl.innerHTML = `Puntuación: ${score}`;
        if ( time == 0  || score == 0) {
            clearInterval(t);
            stopAnimation = true;
        }
    }, 1000);
    return t;
}
// ===================== cannon =====================
const cannonData = {
    css : getComputedStyle(document.documentElement),
    fullcannon: document.getElementById("cannon"),
    cannon_svg: document.getElementById("cannon-body"),
    wheel_svg: document.getElementById("wheel"),
    wheel_components: document.getElementsByClassName("wheel"),
    wheelspan: document.getElementById("wheelspan"),
    rotateCannon: function(deg) {
        this.cannon_svg.style.transform = `rotate(${deg})`;
    },
    initCannon: function(fullSize, deg="0deg") {
        this.cannon_svg.width = fullSize;
        this.cannon_svg.height = fullSize;
        this.wheel_svg.width = (fullSize/2);
        this.wheel_svg.width = (fullSize/2);
        this.wheelspan.style.width = (fullSize/2)+"px";
        this.wheelspan.style.height = (fullSize/2)+"px";
        this.rotateCannon(deg);
    }
};
cannonData.initCannon(75);
// ==================== powerbar ====================
// funcion asincrona para la animación de la powerbar
async function startAnimation() {
    // console.log("Starting animation");
    stopAnimation = false;
    
    await animateLine("increase", 0);
}
// Añadido evento al pulsar el espacio
window.addEventListener("keydown", (key) => {
    console.log("hola");
    if (stopAnimation == false && key.code == "Space") {
        rellenoPower.stop();
        stopAnimation = true;

        if ( currentlevel != "endgame" || currentlevel != "gameover") {
            createDestino(getPercentage());
            //createDestino(1);
            parabola(cannon, fire, destinationPoint);
        }
    }
});

function animateLine(action, position) {
    if (action == "increase") {
        position++;
    } else if (action == "decrease") {
        position--;
    }
    setTimeout(() => {
        rellenoPower.animate({
    	    'left': `${position}%`,
        }, {
    	    duration: 1,
            complete: function() {
                if (position == 100) {
                    action = "decrease";
                } else if (position == 0) {
                    action = "increase";
                }
                if (stopAnimation == false) {
                    animateLine(action, position);
                } 
                // else {
                //     console.log("Ending animation")
                // }
            }
        });
    }, 25);
}
function getPercentage() {
    var p = document.getElementById("line").style.left;
    p = p.slice(0, -1);
    return parseInt(p)/100;
}
function getPowerValue() {
    var toreturn =  rellenoPower.style.left;
    return (function(percentage) {
        return parseInt(percentage.slice(0, -1)) / 100
    })(toreturn);
}
// ====================== game ======================
const bodywidth = 1125;
// const bodywidth = document.body.offsetWidth;
const bodyheight= 562.5;
const cannon = document.getElementById("cannon");
const fire = document.getElementById("fire");
const destinationPoint = document.getElementById("destinationPoint");
var bullets = 5;

var parabola = (function () {
  return function(self, target, destination) {
    var circle = document.createElement("div");
    circle.id = "circle";
    circle.style.display = "none";
    document.body.appendChild(circle);

    //createDestino();

    var a, b, c, y, sum, t, canion, fuego, destino, circulo;
    canion = { 
        x1: ( self.offsetLeft + self.clientWidth ), y1: ( self.offsetTop + self.offsetHeight / 2 ) 
    };
    fuego = { 
        top: target.offsetTop, 
        bottom: target.offsetTop + target.clientHeight, 
        left: target.offsetLeft, 
        right: target.offsetLeft + target.clientWidth 
    };
    destino = {
        x2: destination.offsetLeft + destination.clientWidth /2, y2: destination.offsetTop,
        top: destination.offsetTop, 
        bottom: destination.offsetTop + destination.clientHeight, 
        left: destination.offsetLeft, 
        right: destination.offsetLeft + destination.clientWidth 
    };
    a = 0.001;
    b = (canion.y1 - destino.y2 - a*(canion.x1**2 - destino.x2**2)) / (canion.x1 - destino.x2);
    c = canion.y1 - a * canion.x1**2 - b * canion.x1;

    //console.log(`a: ${a}, b: ${b}, c: ${c}`);

    sum = canion.x1;

    t = setInterval(function () {
        circle.style.display = "block";
        y = a * sum**2 + b * sum + c;
        circle.style.top = y + "px";
        circle.style.left = sum + "px";

        // sum++;
        sum+=3;
        circulo = { x: sum, y: y, left: sum, top: y };
        //console.log(" ======================== ");
        //showCircleData(circle);
        if (circulo.x>=fuego.left && circulo.x<=fuego.right && circulo.y>=fuego.top) {
            clearInterval(t);
            clearInterval(timer);
            // document.body.removeChild(circle);
        } else if ( outOfBounds(circle, fuego) ) {
            clearInterval(t);

            bullets--;
            document.getElementById("lblBullet").innerHTML = "Disparos restantes: "+bullets;
            if (bullets == 0) {
                currentlevel = "gameover"
                completeLevel(currentlevel);
            } else {
                startAnimation();
            }
            document.body.removeChild(circle);
        } 
    }, 1);
  };
})();
function outOfBounds(circulo, fuego) {
    var limitHeight = fuego.bottom - circulo.clientHeight;
    var limitWidth  = bodywidth;
    //return getFloat(circulo.style.top) >= bodyheight || getFloat(circulo.style.left) >= bodywidth;
    return getFloat(circulo.style.top) >= limitHeight || getFloat(circulo.style.left) >= limitWidth;
}
function getFloat(num) {
    return parseFloat(num.slice(0, -1));
}
function createDestino(percentage="") {
    if (percentage=="") {
        var XPos = (cannon.offsetLeft + cannon.offsetWidth);
        // var destino = (bodywidth - XPos ) * 0.75 ;
        var destino = (bodywidth - XPos ) * 0.75 ;
        destinationPoint.style.left = `${destino}px`;
    } else {
        var XPos = (cannon.offsetLeft + cannon.offsetWidth);
        // var destino = (bodywidth - XPos ) * 0.75 ;
        var destino = (bodywidth - XPos ) * percentage ;
        // destinationPoint.style.left = `${destino}px`;

        destinationPoint.style.left = `${ ( XPos + destino ) }px`;
    }
}
function completeLevel(currlevel) {
    switch(currlevel) {
        case "level1":
            bullets =5;
            document.getElementById("lblBullet").innerHTML = "Disparos restantes: "+bullets;
            currentlevel = "level2";
            document.querySelector("#fire").name = "level2";
            startAnimation();
            break;
        case "level2":
            bullets =5;
            document.getElementById("lblBullet").innerHTML = "Disparos restantes: "+bullets;
            currentlevel = "level3";
            document.querySelector("#fire").name = "level3";
            startAnimation();
            break;
        case "level3":
            bullets =5;
            document.getElementById("lblBullet").innerHTML = "Disparos restantes: "+bullets;
            currentlevel = "level4";
            document.querySelector("#fire").name = "level4";
            startAnimation();
            break;
        case "level4":
            bullets =5;
            document.getElementById("lblBullet").innerHTML = "Disparos restantes: "+bullets;
            currentlevel = "level5";
            document.querySelector("#fire").name = "level5";
            startAnimation();
            break;
        case "level5":
            currentlevel = "endgame";
            break;
        case "gameover":
            alert("Has gastado todas las balas. Fin del juego");
            break;
    }
}
function showCircleData(cir) {
    console.log(
        `circle.offsetLeft: ${cir.offsetLeft}\n` +
        `circle.style.left: ${cir.style.left}\n` +
        `circle.offsetTop:  ${cir.offsetTop}\n`  +
        `circle.style.top:  ${cir.style.top}`
    );
}