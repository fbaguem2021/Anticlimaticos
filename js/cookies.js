function crearCookie(cookiename, cookievalue) {
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = `expires=${d.toUTCString()}`;

    document.cookie = `${cookiename}=${cookievalue}; expires=${expires}, 1 Jan 2023 00:00:00 UTC; path=/`
}
function buscarCookie(cname) {
    var aCookies = document.cookie.split(";");
    var contador;
    var posicionSignoIgual;
    var nombreCookie;
    var valorCookie;
    for (contador = 0; contador < aCookies.length; contador++) {
      posicionSignoIgual = aCookies[contador].indexOf("=");
      nombreCookie = aCookies[contador].substring(0, posicionSignoIgual).replace(" ", "");
      if (nombreCookie == cname) {
        valorCookie = aCookies[contador].substring(posicionSignoIgual + 1);
      }
    }
    return valorCookie;
  }
function borrarCookie(cookiename) {
    document.cookie = `${cookiename}=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function comprobarCookies() {
    var cookie, games = ['Astral Runner', 'Garbage Rush', 'Oil Platform Pipe Game', 'Fire Canoneer'];
    for (const game of games) {
        cookie = buscarCookie(game);
        if (cookie != undefined) {
            borrarCookie(game);
        }
    }
}