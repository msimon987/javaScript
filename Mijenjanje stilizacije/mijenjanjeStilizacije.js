var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

var info = document.querySelector(".info");
info.classList.add("hide");

var body = document.querySelector("body");
var sviStilovi = window.getComputedStyle(body, null);
var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
console.log(stilMarginLeft);

var pocetnaMargina = sviStilovi.getPropertyValue("margin");
console.log(pocetnaMargina);
var marginaBroj = parseInt(pocetnaMargina);
console.log(marginaBroj);

var animacija = setInterval(funcFrame, 10);

function funcFrame(){
    body.style.margin = marginaBroj ;
}