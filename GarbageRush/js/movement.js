import { createTrash, setCheckScoreFalse, checkScore } from "./spawn.js";
import { checkTrash,setTimer } from "./scoreTimer.js";

createTrash();
let drag = document.getElementById("basura");
let map = document.getElementById("map");
let currentDroppable = null;
drag.addEventListener('mousedown', mousedown);
let score;
setTimer(60);
// setTimer(10);

function mousedown(e) {
    
    //Posicio actual del mouse/cursor
    let prevX = e.clientX;
    let prevY = e.clientY;

    //Actives els events de mousemove i moseup
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);

    function mousemove(e) {
        //Nova posicio actual del mouse
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        //Moviment
        drag.style.left = drag.offsetLeft - newX + "px";
        drag.style.top = drag.offsetTop - newY + "px";

        //Colisions
        //Left
        if (drag.offsetLeft <= 0) {
            drag.style.left = 0;
        }
        //Top
        if (drag.offsetTop <= 0) {
            drag.style.top = 0;
        }
        //Right
        if (drag.offsetLeft + drag.offsetWidth > map.offsetWidth) {
            drag.style.left = map.offsetWidth - drag.offsetWidth + "px";
        }
        //Bottom
        if (drag.offsetTop + drag.offsetHeight > map.offsetHeight) {
            drag.style.top = map.offsetHeight - drag.offsetHeight + "px";
        }

        //Entrar en contacte la brossa amb el contenidor
        drag.hidden = true;
        let elemBelow = document.elementFromPoint(prevX, prevY);
        drag.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.dropzone');

        if (currentDroppable != droppableBelow) {
            currentDroppable = droppableBelow;
            if (currentDroppable != null) {
                if (checkScore) {
                    score = 0;
                    score = checkTrash(drag, droppableBelow);
                    document.getElementById("puntuacion").innerHTML = "PUNTUACIÓN: " + score;
                    setCheckScoreFalse();
                }
                drag.remove();
            }
        }

        //Tornem a indicar l'actual posicio del mouse
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
        let drag = document.getElementById("basura");
        if (drag == undefined) {
            newTrash();
        }
        //Desactives els events mousemove i mouseup
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
    }

    //Es crea la nova brossa després de eliminar-se
    function newTrash() {
        createTrash();
        drag = document.getElementById("basura");
        drag.addEventListener('mousedown', mousedown);
    }
}