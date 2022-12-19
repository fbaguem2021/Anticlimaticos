document.addEventListener("DOMContentLoaded", function (event) {
  let $magic = document.getElementById("mag");
  console.log($magic);
  let magicWHalf = $magic.offsetWidth / 2;
  let Fondo = document.getElementById("escena");

  Fondo.addEventListener('mousemove', (e) => {
    //console.log('X: '+e.clientX);
    //console.log('Y: '+e.clientY);
    //console.log("Client Y:"+e.clientY+"/Client X: "+e.clientX);

    if (screenY < 1000) {
      document.documentElement.style.setProperty('--cX', (e.clientX - 320) + 'px');
      document.documentElement.style.setProperty('--cY', (e.clientY - 570 + scrollY) + 'px');
    }

    //$magic.style.left = e.clientX - magicWHalf;
    //$magic.style.top = e.clientY - magicWHalf;

  });

  Fondo.addEventListener('mouseover', (event) => {
    Fondo.style.cursor = "none";
    //console.log("Entra");

  });
  Fondo.addEventListener('mouseout', (event) => {
    Fondo.style.cursor = "visible";
    //console.log("Sale");

  });

  window.addEventListener('scroll', (event) => {
    //console.log('Scroll x'+ scrollX+"/"+"Scroll Y"+ scrollY);

  });

});

