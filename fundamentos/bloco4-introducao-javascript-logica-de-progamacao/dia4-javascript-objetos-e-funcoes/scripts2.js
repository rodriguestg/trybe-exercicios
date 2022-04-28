// Programa 1
console.log("Programa 1")

function operacao(a, b){
  resultado = a + b;

  // Posso substituir o + pelos outros sinais de operação.
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

  return resultado;
}
console.log(operacao(9, 4));

// Programa 2
console.log("Programa 2")

function maiorNumero(a, b){
  let maior;
  if (a > b) {
    maior = a;
  } else {
    maior = b;
  }
  return maior;
}
console.log(maiorNumero(800, 9))

// Programa 3
console.log("Programa 3")

function maiorDe3(a, b, c) {
  let maior3;
  if (a > b && a > c) {
    maior3 = a;
  } else if (b > a && b > c) {
    maior3 = b;
  } else {
    maior3 = c;
  }
  return maior3;
}
console.log(maiorDe3(100, 200, 30))

// Programa 4
console.log("Programa 4")

function positivoNegativo(d) {
  if (d > 0) {
    console.log("positive")
  } else if (d < 0) {
    console.log("negative")
  } else {
    console.log("zero")
  }
}
positivoNegativo(000)

// Programa 5
console.log("Programa 5")

function angulos(angulo1, angulo2, angulo3) {
  let somaAngulos = angulo1 + angulo2 + angulo3;
  if (somaAngulos === 180) {
    console.log("true")
  } else if (somaAngulos < 0) {
    console.log("ERRO!")
  } else {
    console.log("false")
  }
}
angulos(35, 55, 90)
