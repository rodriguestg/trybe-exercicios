let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EXERCICIO 1

for (let numerosImpressos = 0; numerosImpressos < numbers.length; numerosImpressos += 1){
  console.log(numbers[numerosImpressos])
}

// EXERCICIO 2

let soma = 0
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma)

// EXERCICIO 3

mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica)

// EXERCICIO 4

if (mediaAritmetica > 20){
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

// EXERCICIO 5
let maiorValor = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if(maiorValor < numbers[i]){
      maiorValor = numbers[i];
  }
}
console.log(maiorValor)

// EXERCICIO 6
let valorImpar = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 === 1) {
      valorImpar += 1;
  } 
}
if (valorImpar === 0) {
  valorImpar = "nenhum valor ímpar encontrado";
}
console.log(valorImpar)

// EXERCICIO 7
let menorValor = numbers[0];
for(let i = 1; i < numbers.length; i += 1) {
    if(numbers[i] < menorValor){
      menorValor = numbers[i];
  }
}
console.log(menorValor)

// EXERCICIO 8
let numero1 = 0;
let de1a25 = [];
let limitador = 26;
for(let i = 0; i < limitador; i += 1) {
  numero1 += 1;
  if (numero1 < limitador) {
    de1a25.push(numero1);
  }
}
console.log(de1a25)

// EXERCICIO 9
let numeroDividido = 0;
let dividido2 = [];
for(let i = 0; i < de1a25.length; i += 1) {
  numeroDividido = de1a25[i] / 2;
    dividido2.push(numeroDividido);
}
console.log(dividido2)

// BÔNUS 3
let numbersX = [];
let numeroMultiplicado = 0;
for(let i = 0; i < numbers.length; i += 1) {
  let multiplicador = numbers[i + 1];
  let multiplicador2 = 2;
  let numeroMultiplicado = numbers[i] * multiplicador;
  let numeroFinal = numbers[i] * multiplicador2;
  if ((i + 1) === numbers.length) {
    numbersX.push(numeroFinal);
  } else {
    numbersX.push(numeroMultiplicado);
  }
}
console.log(numbersX)

// BÔNUS 1
for (let i = 1; i < numbers.length; i += 1) {
    for (let i2 = 0; i2 < i; i2 += 1) {
      if(numbers[i] > numbers[i2]){
        let position = numbers[i];
        numbers[i] = numbers[i2];
        numbers[i2] = position;
    }
  }
}
console.log(numbers)

// BÔNUS 2
for (let i = 1; i < numbers.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if(numbers[i] < numbers[i2]){
      let position = numbers[i];
      numbers[i] = numbers[i2];
      numbers[i2] = position;
  }
}
}
console.log(numbers)
