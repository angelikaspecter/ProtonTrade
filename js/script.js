let btnMenu = document.querySelector("#btn_menu");
let btnClose = document.querySelector("#btn_close");

btnMenu.onclick = function () {
    document.querySelector(".nav--mobile").classList.toggle('hide');
}
btnClose.onclick = function () {
    document.querySelector(".nav--mobile").classList.toggle('hide');
}