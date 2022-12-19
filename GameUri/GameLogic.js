// import { getActualLevel } from "./js.js";
function CheckingTiles(x, y, dir) {
    let ret;
    let id = "td-" + x + "-" + y;
    let tile = document.getElementById(id);
    let atrib = tile.getAttribute("src");

    console.log("------------------------------------");
    let direction = dir;
    console.log("id: " + id);
    console.log("Atribute: " + atrib);
    console.log("Direction =" + direction);


    // amun, abaix, dreta, esquerra
    if (x == 10 && y == 8) {
        ret = true;
    }
    else {
        if (direction == "adal") {
            if (atrib == "./media/pipe_corner_bottom_left.png" || atrib == "./media/pipe_corner_bottom_right.png" || atrib == "./media/pipe_vertical.png") {
                switch (atrib) {
                    case "./media/pipe_corner_bottom_left.png":
                        console.log("new dir: " + "esquerra");
                        ret = CheckingTiles(x, (y - 1), "esquerra");

                        break;
                    case "./media/pipe_corner_bottom_right.png":
                        console.log("new dir: " + "dreta");
                        ret = CheckingTiles(x, (y + 1), "dreta");

                        break;
                    case "./media/pipe_vertical.png":
                        console.log("new dir: " + "adal");
                        ret = CheckingTiles((x - 1), y, "adal");

                        break;
                }
            }
            else {
                ret = false;
            }
        }
        else if (direction == "abaix") {
            if (atrib == "./media/pipe_corner_top_left.png" || atrib == "./media/pipe_corner_top_right.png" || atrib == "./media/pipe_vertical.png") {
                switch (atrib) {
                    case "./media/pipe_corner_top_left.png":
                        console.log("new dir: " + "esquerra");
                        ret = CheckingTiles(x, (y - 1), "esquerra");
                        break;
                    case "./media/pipe_corner_top_right.png":
                        console.log("new dir: " + "dreta");
                        ret = CheckingTiles(x, (y + 1), "dreta");

                        break;
                    case "./media/pipe_vertical.png":
                        console.log("new dir: " + "abaix");
                        ret = CheckingTiles((x + 1), y, "abaix");
                        break;
                }
            }
            else {
                ret = false;
            }
        }
        else if (direction == "esquerra") {
            if (atrib == "./media/pipe_corner_bottom_right.png" || atrib == "./media/pipe_corner_top_right.png" || atrib == "./media/pipe_horizontal.png") {
                switch (atrib) {
                    case "./media/pipe_corner_bottom_right.png":
                        console.log("new dir: " + "abaix");
                        ret = CheckingTiles((x + 1), y, "abaix");
                        break;
                    case "./media/pipe_corner_top_right.png":
                        console.log("new dir: " + "adal");
                        ret = CheckingTiles((x - 1), y, "adal");
                        break;
                    case "./media/pipe_horizontal.png":
                        console.log("new dir: " + "esquerra");
                        ret = CheckingTiles(x, (y - 1), "esquerra");
                        break;
                }
            }
            else {
                ret = false;
            }
        }
        else if (direction == "dreta") {
            if (atrib == "./media/pipe_corner_top_left.png" || atrib == "./media/pipe_corner_bottom_left.png" || atrib == "./media/pipe_horizontal.png") {
                switch (atrib) {
                    case "./media/pipe_corner_top_left.png":
                        console.log("new dir: " + "adal");
                        ret = CheckingTiles((x - 1), y, "adal");
                        break;
                    case "./media/pipe_corner_bottom_left.png":
                        console.log("new dir: " + "abaix");
                        ret = CheckingTiles((x + 1), y, "abaix");
                        break;
                    case "./media/pipe_horizontal.png":
                        console.log("new dir: " + "dreta");
                        ret = CheckingTiles(x, (y + 1), "dreta");
                        break;
                }
            }
            else {
                ret = false;
            }
        }
    }

    return ret;
    //if pos == fin = true;
}



function SetearAnimacionXCasilla(x, y) {
    let SelectedAnim = document.getElementById("ta-" + x + "-" + y);

}

function CheckingTilesForAnimation(x, y, dir) {



    let ret;
    let id = "td-" + x + "-" + y;
    let tile = document.getElementById(id);
    let atrib = tile.getAttribute("src");

    let SelectedAnim = document.getElementById("ta-" + x + "-" + y);



    console.log("------------------------------------");
    console.log("Selected Anim: ");
    console.log(SelectedAnim);
    let direction = dir;
    console.log("id: " + id);
    console.log("Atribute: " + atrib);
    console.log("Direction =" + direction);


    // amun, abaix, dreta, esquerra
    if (x == 10 && y == 8) {
        let cookieval1 = `${getActualLevel()}_3`;
        if (buscarCookie('Oil Platform Pipe Game') === undefined) {
            crearCookie('Oil Platform Pipe Game', cookieval1);
        } else {
            let cookieScore = buscarCookie('Oil Platform Pipe Game');
            const cookieScoreOld = cookieScore.slice(0, -2);

            if (getActualLevel() > cookieScoreOld) {
                crearCookie('Oil Platform Pipe Game', cookieval1);
                console.log(cookieval1);
            }
        }


        ret = true;
        let Win = new Audio("./audio/win.mp3");
        Win.play();

        let fondo = document.getElementById("victory").style.visibility = "visible";
        console.log("True");
    }
    else {
        if (direction == "adal") {
            if (atrib == "./media/pipe_corner_bottom_left.png" || atrib == "./media/pipe_corner_bottom_right.png" || atrib == "./media/pipe_vertical.png") {
                switch (atrib) {
                    case "./media/pipe_corner_bottom_left.png":
                        console.log("new dir: " + "esquerra");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_bottom_left_bottom_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";

                            ret = CheckingTilesForAnimation(x, (y - 1), "esquerra");
                        }, 360);



                        break;
                    case "./media/pipe_corner_bottom_right.png":
                        console.log("new dir: " + "dreta");
                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_bottom_right_bottom_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation(x, (y + 1), "dreta");
                        }, 360);


                        break;
                    case "./media/pipe_vertical.png":
                        console.log("new dir: " + "adal");
                        SelectedAnim.style.background = "url('./media/petrollsmall/water_vertical_bottom_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x - 1), y, "adal");
                        }, 360);


                        break;
                }
            }
            else {
                ret = false;
                BorrarFilasYColumnasE();
            }
        }
        else if (direction == "abaix") {


            if (atrib == "./media/pipe_corner_top_left.png" || atrib == "./media/pipe_corner_top_right.png" || atrib == "./media/pipe_vertical.png") {
                switch (atrib) {
                    case "./media/pipe_corner_top_left.png":
                        console.log("new dir: " + "esquerra");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_top_left_top_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation(x, (y - 1), "esquerra");
                        }, 360);

                        break;
                    case "./media/pipe_corner_top_right.png":
                        console.log("new dir: " + "dreta");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_top_right_top_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation(x, (y + 1), "dreta");
                        }, 360);


                        break;
                    case "./media/pipe_vertical.png":
                        console.log("new dir: " + "abaix");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_vertical_top_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x + 1), y, "abaix");
                        }, 360);


                        break;
                }
            }
            else {
                ret = false;
                BorrarFilasYColumnasE();
            }
        }
        else if (direction == "esquerra") {
            if (atrib == "./media/pipe_corner_bottom_right.png" || atrib == "./media/pipe_corner_top_right.png" || atrib == "./media/pipe_horizontal.png") {
                switch (atrib) {
                    case "./media/pipe_corner_bottom_right.png":
                        console.log("new dir: " + "abaix");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_bottom_right_right_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x + 1), y, "abaix");
                        }, 360);

                        break;
                    case "./media/pipe_corner_top_right.png":
                        console.log("new dir: " + "adal");
                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_top_left_left_strip11.png') no-repeat center bottom";

                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x - 1), y, "adal");
                        }, 360);

                        break;
                    case "./media/pipe_horizontal.png":
                        console.log("new dir: " + "esquerra");
                        SelectedAnim.style.background = "url('./media/petrollsmall/water_horizontal_left_strip11.png') no-repeat center bottom";

                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation(x, (y - 1), "esquerra");
                        }, 360);

                        break;
                }
            }
            else {
                ret = false;
                BorrarFilasYColumnasE();
            }
        }
        else if (direction == "dreta") {
            if (atrib == "./media/pipe_corner_top_left.png" || atrib == "./media/pipe_corner_bottom_left.png" || atrib == "./media/pipe_horizontal.png") {
                switch (atrib) {
                    case "./media/pipe_corner_top_left.png":
                        console.log("new dir: " + "adal");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_top_left_left_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x - 1), y, "adal");
                        }, 360);

                        break;
                    case "./media/pipe_corner_bottom_left.png":
                        console.log("new dir: " + "abaix");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_corner_bottom_left_left_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation((x + 1), y, "abaix");
                        }, 360);

                        break;
                    case "./media/pipe_horizontal.png":
                        console.log("new dir: " + "dreta");

                        SelectedAnim.style.background = "url('./media/petrollsmall/water_horizontal_left_strip11.png') no-repeat center bottom";
                        setTimeout(function () {
                            //SelectedAnim.style.animationPlayState = "paused";
                            SelectedAnim.style.animation = "none";
                            SelectedAnim.style.backgroundPositionX = "-700px";
                            ret = CheckingTilesForAnimation(x, (y + 1), "dreta");
                        }, 360);

                        break;
                }
            }
            else {
                ret = false;
                BorrarFilasYColumnasE();
            }
        }
    }

    return ret;
    //if pos == fin = true;
}
function BorrarFilasYColumnasE() {
    let DivAnim = document.getElementById('TheAnimation');
    DivAnim.innerHTML = CrearFilasYColumnasE();
}