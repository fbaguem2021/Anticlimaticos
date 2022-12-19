
function Listenerclick(valor1, valor2) {

    let elementId = "td-" + valor1 + "-" + valor2;
    let CasillaSelecionada = document.getElementById(elementId);
    //window.alert(CasillaSelecionada.getAttribute("src"));
    let stone = new Audio("./audio/stone.mp3");
    let Rachet = new Audio("./audio/LlaveInglesa.wav");
    let manibela = new Audio("./audio/Manibela.mp3");
    switch (CasillaSelecionada.getAttribute("src")) {
        case "./media/ButPause.png":
            PausarJuego();
            stone.play();
            break;
        case "./media/boardTiles_01.png":
            stone.play();
            break;
        case "./media/pipeStart_01.png":
            manibela.play();
            TrigerChekear();
            break;
        case "./media/pipe_end.png":
            manibela.play();
            TrigerChekear();
            break;
        case "./media/pipe_corner_bottom_left.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_corner_top_left.png");
            Rachet.play();
            break;

        case "./media/pipe_corner_top_left.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_corner_top_right.png");
            Rachet.play();
            break;

        case "./media/pipe_corner_top_right.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_corner_bottom_right.png");
            Rachet.play();
            break;

        case "./media/pipe_corner_bottom_right.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_corner_bottom_left.png");
            Rachet.play();
            break;

        case "./media/pipe_horizontal.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_vertical.png");
            Rachet.play();
            break;

        case "./media/pipe_vertical.png":
            CasillaSelecionada.setAttribute("src", "./media/pipe_horizontal.png");
            Rachet.play();
            break;

    }


}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function CrearCasillasDeFondo() {
    let out = "";
    out += (`<table>`);

    for (cnt = 0; cnt < 11; cnt++) {
        out += (`<tr>`);
        for (cnt2 = 0; cnt2 < 11; cnt2++) {

            out += ('<td>');
            out += (`<div class="backgroundTiles">`);

            out += ('</div>');
            out += (' </td>');

        }
        out += (`</tr>`);
    }
    out += (`</table>`);
    return out;
}

function CrearFilasYColumnasE() {
    let out = "";

    out += (`<table>`);

    for (cnt = 0; cnt < 11; cnt++) {
        out += (`<tr>`);
        for (cnt2 = 0; cnt2 < 11; cnt2++) {

            out += ('<td>');
            out += ('<div class="block" id="ta-' + cnt + '-' + cnt2 + '">');

            out += ('</div>');
            out += (' </td>');

        }
        out += (`</tr>`);
    }
    out += (`</table>`);
    return out;

}
function CrearFilasYColumnas(Patron) {
    let out = "";

    let Linear = Array("./media/pipe_vertical.png", "./media/pipe_horizontal.png");
    let Curved = Array("./media/pipe_corner_bottom_left.png", "./media/pipe_corner_bottom_right.png", "./media/pipe_corner_top_left.png", "./media/pipe_corner_top_right.png");

    // out+='<div class="PlayPauseButton"><img src="./media/PauseButt.png" alt="" onclick="PausarJuego()"></div>';

    out += (`<table>`);
    for (cnt = 0; cnt < 11; cnt++) {


        out += (`<tr>`);
        for (cnt2 = 0; cnt2 < 11; cnt2++) {
            let ImageName = "";
            if (cnt == 0 && cnt2 == 2) {
                ImageName = "./media/pipeStart_01.png";
            }
            else if (cnt == 10 && cnt2 == 8) {
                ImageName = "./media/pipe_end.png";
            }
            else if (cnt == 0 && cnt2 == 10) {
                ImageName = "./media/ButPause.png";
            }
            else if (cnt == 0 && cnt2 < 11 || cnt2 == 0 && cnt < 11 || cnt2 == 10 && cnt < 11 || cnt == 10 && cnt2 < 11) {
                ImageName = "./media/boardTiles_01.png";
            }
            else if (Patron[cnt][cnt2] === 1 || Patron[cnt][cnt2] === 2 || Patron[cnt][cnt2] === -1) {
                let num = getRandomInt(0, Linear.length - 1);
                ImageName = Linear[num];
            }
            else if (Patron[cnt][cnt2] > 2 && Patron[cnt][cnt2] <= 6 || Patron[cnt][cnt2] === -2) {
                let num = getRandomInt(0, Curved.length - 1);
                ImageName = Curved[num];
            }
            out += ('<td>');
            out += ('<div class="imge">');

            out += ('<img ' + 'src=' + '"' + ImageName + '"' + 'id=' + 'td-' + cnt + '-' + cnt2 + ' ' + 'onclick=' + `"` + 'Listenerclick(' + cnt + ',' + cnt2 + ')' + '"' + '>');
            // document.write(`<td>`+`<img `+`src=`+`"`+ImageArray[num]+`"`+`id=`+`td-`+cnt+`-`+cnt2+` `+ `onclick(`+`Listenerclick(`+cnt+`,`+cnt2+`)` +`)`+` </td>`);
            out += ('</div>');
            out += (' </td>');

        }
        out += (`</tr>`);

    }
    out += (`</table>`);
    return out;
}

function TrigerChekear() {
    CheckingTilesForAnimation(1, 2, "abaix");

}