export let checkScore;
export function setCheckScoreFalse() {
    checkScore = false;
}
function getRandom(min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

function createImg(nameClass, urlImg) {
    const trashImage = document.createElement("div");
    trashImage.setAttribute("id", "basura");
    trashImage.setAttribute("class", nameClass);
    trashImage.style.backgroundImage = "url(" + urlImg + ")";
    trashImage.style.backgroundSize = "cover";
    trashImage.style.backgroundPosition = "center";
    trashImage.style.height = "190px";
    trashImage.style.width = "170px";
    trashImage.style.position = "absolute";
    trashImage.style.cursor = "pointer";
    trashImage.style.zIndex = "100";
    return trashImage;
}


function selectRandomImg(nameClass) {
    let images;
    let path = "assets/img/trash/";
    let yellowImage = [path + "plastic.png", path + "bolsa.png", path + "refrescos.png", path + "pajitas.png"];
    let blueImage = [path + "paper.png", path + "caja.png", path + "huevera.png", path + "ecobolsa.png"];
    let greenImage = [path + "bottle.png", path + "botella.png", path + "bote.png", path + "copa.png"];
    let brownImage = [path + "platano.png", path + "organico.png", path + "manzana.png", path + "corcho.png"];
    if (nameClass === "basuraAzul") {
        images = blueImage;
    } else if (nameClass === "basuraVerde") {
        images = greenImage;
    } else if (nameClass === "basuraAmarillo") {
        images = yellowImage;
    } else {
        images = brownImage;
    }
    let random = Math.floor(Math.random() * images.length);
    return images[random];
}

function selectRandomClass() {
    let nameClass = ["basuraAzul", "basuraVerde", "basuraMarron", "basuraAmarillo"];
    let random = Math.floor(Math.random() * nameClass.length);
    return nameClass[random];
}

//Crea la brossa amb un imatge i classe determinada i la posiciona al mapa
export function createTrash() {
    let map = document.getElementById("map");
    let trashImage;
    let nameClass = selectRandomClass();
    let urlImg = selectRandomImg(nameClass);
    trashImage = createImg(nameClass, urlImg);

    let mapWidth = map.offsetWidth;
    let mapHeight = map.offsetHeight;

    let widthObject = trashImage.style.width; //"170px"
    let width = widthObject.substring(0, widthObject.length - 2); //"170"

    let heightObject = trashImage.style.height; //"190px"
    let height = heightObject.substring(0, heightObject.length - 2); //"190"

    let randomTop = getRandom(0, (mapHeight - height) / 2);
    let randomLeft = getRandom(0, mapWidth - width);

    trashImage.style.left = randomLeft + "px";
    trashImage.style.top = randomTop + "px";
    map.appendChild(trashImage);
    checkScore = true;
}

