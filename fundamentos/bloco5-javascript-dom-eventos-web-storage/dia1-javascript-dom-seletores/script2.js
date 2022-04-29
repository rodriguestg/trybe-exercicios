let secaoLadoEsquerdo = document.getElementsByClassName("emergency-tasks");
for (let i = 0; i < secaoLadoEsquerdo.length; i += 1) {
  secaoLadoEsquerdo[i].style.backgroundColor = "salmon";
}

let titulosLadoEsquerdo = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < titulosLadoEsquerdo.length; i += 1) {
  titulosLadoEsquerdo[i].style.backgroundColor = "#ff7cf4";
}

let secaoLadoDireito = document.getElementsByClassName("no-emergency-tasks");
for (let i = 0; i < secaoLadoDireito.length; i += 1) {
  secaoLadoDireito[i].style.backgroundColor = "yellow";
}

let titulosLadoDireito = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < titulosLadoDireito.length; i += 1) {
  titulosLadoDireito[i].style.backgroundColor = "black";
}

document.getElementById("header-container").style.backgroundColor = "#2ea75e";

document.getElementById("footer-container").style.backgroundColor = "#00322b";










/* document.getElementById("page-title") = "Uma mente brilhante";
document.getElementById("second-paragraph") = "Um filme sobre uma mente extraordinária do século passado";
document.getElementById("subtitle") = "Waner Bross";

console.log(document.getElementById("page-title").innerText); */