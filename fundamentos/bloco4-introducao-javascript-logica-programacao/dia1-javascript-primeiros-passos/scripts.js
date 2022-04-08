const a = 9;
const b = 4;

// Programa 1
console.log("Programa 1")

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// Programa 2
console.log("Programa 2")

if (a > b) {
  maior = a;
} else {
  maior = b;
}
console.log(maior)

// Programa 3
console.log("Programa 3")

const c = 10;
if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}
console.log(maior)

// Programa 4
console.log("Programa 4")

const d = -1
if (d > 0) {
  console.log("positive")
} else if (d < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// Programa 5
console.log("Programa 5")

const angulo1 = 35;
const angulo2 = 90;
const angulo3 = 55;

if ((angulo1 + angulo2 + angulo3) === 180) {
  console.log("true")
} else {
  console.log("false")
}

// Programa 6
console.log("Programa 6")

let pecaXadrez = "cavalo".toLowerCase();
switch (pecaXadrez) {
  case "dama":
  console.log("Estrela");
  break;
case "cavalo":
  console.log("Em L");
  break;
case "rei":
  console.log("Em quadrado");
  break;
case "peão":
  console.log("Apenas para frente (e consegue comer uma peça próxima em diagonal)");
  break;
case "torre":
  console.log("Horizontal e vertical apenas)");
  break;
case "bispo":
  console.log("Diagonais)");
  break;            
default:
  console.log("ERRO! Podia ser até uma boa jogada, porém essa peça não existe no xadrez XD")
}

// Programa 7
console.log("Programa 7")

let notaAluno = "71";
if (notaAluno < 0 || notaAluno > 100){
  console.log("Opa, acho que você teve um erro em sua nota")
} else if (notaAluno >= 90){
  console.log("A")
} else if (notaAluno >= 80){
  console.log("B")
} else if (notaAluno >= 70){
  console.log("C")
} else if (notaAluno >= 60){
  console.log("D")
} else if (notaAluno >= 50){
  console.log("E")
} else {
  console.log("F")
}

// Programa 8
console.log("Programa 8")

const e = 9;
const f = 10;
const g = 11;
if (e % 2 === 0 || f % 2 === 0 || g % 2 === 0){
  console.log(true);
} else {
  console.log(false);
}

// Programa 9
console.log("Programa 9")

const h = 8;
const i = 7;
const j = 6;
if (h % 2 === 1 || i % 2 === 1 || j % 2 === 1){
  console.log(true);
} else {
  console.log(false);
}

// Programa 10
console.log("Programa 10")

const custoProduto = 15;
const porcentagemDeImposto = custoProduto * 0.2;

const venda = 30;
const totalDeVendas = 1000;

const custoComImposto = custoProduto + porcentagemDeImposto;
const lucroProduto = venda - custoComImposto;
const lucroTotal = lucroProduto * totalDeVendas;

if (custoProduto < 0 || venda < 0){
  console.log("Ocorreu um erro ")
} else {
  console.log(lucroTotal)
}

// Programa 11
console.log("Programa 11")

const salarioBruto = 15000.10;
const aliquotaINSS1 = salarioBruto * 0.08;
const aliquotaINSS2 = salarioBruto * 0.09;
const aliquotaINSS3 = salarioBruto * 0.11;
const aliquotaINSS4 = 570.88;

if (salarioBruto <= 1556.94){
 salarioBase = salarioBruto - aliquotaINSS1;
  console.log(salarioBase)
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
 salarioBase = salarioBruto - aliquotaINSS2;
  const valorIR1 = (salarioBase * 0.075) - 142.80;
 if (salarioBase < 1903.98) {
   console.log(salarioBase)
 } else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  console.log(salarioBase - valorIR1)
 }
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
 salarioBase = salarioBruto - aliquotaINSS3;
  const valorIR1 = (salarioBase * 0.075) - 142.80;
  const valorIR2 = (salarioBase * 0.15) - 354.80;
  const valorIR3 = (salarioBase * 0.225) - 636.13;
  const valorIR4 = (salarioBase * 0.275) - 869.36;
 if (salarioBase <= 2826.65) {
  console.log(salarioBase - valorIR1)
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
 console.log(salarioBase - valorIR2)
  } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    console.log(salarioBase - valorIR3)
  } else if (salarioBase > 4664.68) {
    console.log(salarioBase - valorIR4)
  }
} else if (salarioBruto > 5189.82){
  salarioBase = salarioBruto - aliquotaINSS4;
  const valorIR4 = (salarioBase * 0.275) - 869.36;
  console.log(salarioBase - valorIR4)
} 

