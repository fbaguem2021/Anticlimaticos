function update(e) {
  var x = e.clientX;
  var y = e.clientY;
  document.documentElement.style.setProperty('--cX', x + 'px');
  document.documentElement.style.setProperty('--cY', y + 'px');
  //document.documentElement.style.setProperty('--visi', 'visible');

}
document.addEventListener('mousemove', update);
//IniciarJuego();

function getActualLevel() {
  return (ActualLevel +1) * 100;
}

var ActualLevel = -1;
function InicializarJuego(num) {
  let waves = new Audio("./audio/wind.mp3");
  waves.play();


  ActualLevel = num;

  let but = document.getElementById("btn-" + ActualLevel);
  but.removeAttribute("disabled");

  document.getElementsByClassName("Score")[0].innerHTML = "PUNTUACION: " + (ActualLevel + 1) * 100;
  let gameSelected = GetListaNiveles()[num];

  let DivJoco = document.getElementById('TheGame');
  DivJoco.innerHTML = CrearFilasYColumnas(gameSelected);
  DivJoco.style.visibility = "visible";

  let DivAnim = document.getElementById('TheAnimation');
  DivAnim.innerHTML = CrearFilasYColumnasE();

  let DivBackGround = document.getElementById('TheBackground');
  DivBackGround.innerHTML = CrearCasillasDeFondo();

  let elemento = document.getElementById('Minicio');
  elemento.style.visibility = "hidden";

  let SwitchButt = document.getElementById("flexSwitchCheckDefault").checked;
  if (SwitchButt) {
    SetDifModeDif();
  }


}
function IniciarMenu() {
  SetDifModeFac();
}
function PausarJuego() {
  SetDifModeFac();
  let frame = document.getElementById("PauseMenu");
  frame.style.visibility = "visible";
}
function renudarJuego() {
  let stone = new Audio("./audio/stone.mp3");
  stone.play();
  let SwitchButt = document.getElementById("flexSwitchCheckDefault").checked;
  if (SwitchButt) {
    SetDifModeDif();
  }
  let frame = document.getElementById("PauseMenu");
  frame.style.visibility = "hidden";
}
function VolveralMenu() {
  let stone = new Audio("./audio/stone.mp3");
  stone.play();
  let frame1 = document.getElementById("PauseMenu");
  frame1.style.visibility = "hidden";

  let frame2 = document.getElementById("victory");
  frame2.style.visibility = "hidden";

  let frame = document.getElementById("Minicio");
  frame.style.visibility = "visible";
}

function SetDifModeDif() {
  document.documentElement.style.setProperty('--visi', 'none');
  document.documentElement.style.setProperty('--backgroun', `radial-gradient(
      circle 10vmax at var(--cX) var(--cY),
      rgba(7, 58, 168, 0) 0%,
      rgba(5, 108, 192, 0.596) 60%,
      rgba(0,0,0,.95) 130%
    )`);
}
function SetDifModeFac() {
  document.documentElement.style.setProperty('--visi', 'visible');
  document.documentElement.style.setProperty('--backgroun', 'transparent');
}

function SiguienteNivel() {
  let stone = new Audio("./audio/stone.mp3");
  stone.play();
  console.log("sigyuenye");
  let fondo = document.getElementById("victory").style.visibility = "hidden";
  InicializarJuego(ActualLevel + 1);

  // let cookieval1 = `${(ActualLevel) * 100}_3`;
  // if (buscarCookie('Oil Platform Pipe Game') === undefined) {
  //   crearCookie('Oil Platform Pipe Game', cookieval1);
  // } else {
  //   let cookieScore = buscarCookie('Oil Platform Pipe Game');
  //   const cookieScoreOld = cookieScore.slice(0, -2);

  //   if ((ActualLevel) * 100 > cookieScoreOld){
  //     crearCookie('Oil Platform Pipe Game', cookieval1);
  //     console.log(cookieval1);
  //   }
  // }

}
