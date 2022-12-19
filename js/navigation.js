// document.getElementById("nav-promocion")
//     .onclick = () => window.scrollTo(0, document.getElementById("promocion").offsetTop - 90);
// document.getElementById("nav-registro")
//     .onclick = () => window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
// if (document.getElementById("nav-btn")!=null) {
//     document.getElementById("nav-btn-login")
//         .onclick = () => {
//             window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
//             iniciarSesion();
//         }
//     document.getElementById("nav-btn-register")
//         .onclick = () => {
//             window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
//             register();
//         }
//     document.getElementById("nav-btn-register")
// } else {
//     document.getElementById("nav-user-score")
//         .onclick = () => window.scrollTo(0, document.getElementById("scoreboard").offsetTop - 97);
// }
// document.getElementById("nav-juegos")
//  .onclick= ()=>window.scrollTo(0, document.getElementById("juego").offsetTop-100);
// document.getElementById("nav-puntuaciones")
//     .onclick = () => window.scrollTo(0, document.getElementById("scoreboard").offsetTop - 97);
// document.getElementById("nav-equipo")
//     .onclick = () => window.scrollTo(0, document.getElementById("equipo").offsetTop - 75);
const nav_promocion   = ()=> window.scrollTo(0, document.getElementById("promocion").offsetTop - 90);
const nav_registro    = ()=> window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
const nav_user_score  = ()=> window.scrollTo(0, document.getElementById("scoreboard").offsetTop - 97);
const nav_juegos      = ()=> window.scrollTo(0, document.getElementById("juego").offsetTop- 130);
const nav_puntuaciones= ()=> window.scrollTo(0, document.getElementById("scoreboard").offsetTop - 140);
const nav_equipo      = ()=> window.scrollTo(0, document.getElementById("equipo").offsetTop - 75);
const nav_btn_login   = ()=> {
                       window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
                       iniciarSesion();
}
const nav_btn_register= ()=> {
                       window.scrollTo(0, document.getElementById("registro").offsetTop - 76);
                       register();
}