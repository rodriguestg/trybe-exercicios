let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vinda, " + info.personagem);

info.recorrente = 'Sim';
console.log(info);

for (let chaves in info) {
  console.log(chaves);
}

for (let valor in info) {
  console.table(info[valor]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let valor2 in info2) {
  console.log(info[valor2] + " e " + info2[valor2]);
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor['nome'] + " " + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0].titulo + "'");


leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
console.log(leitor);

console.log(leitor['nome'] + " tem " + leitor['livrosFavoritos'].length + " livros favoritos.");

function palindromo(palavra) {
  let pAoContrario = '';
  for (i = palavra.length; i > 0; i -= 1){
    pAoContrario += palavra[i - 1];
  }
    if (palavra === pAoContrario) {
      return true;
    } else {
      return false;
    }
}
console.log(palindromo('arara'));

function inteiros(array) {
  let maiorN = -9007199254740992n;
  let indice;
  for (let i = 0; i < array.length; i += 1) {
    if (maiorN < array[i]) {
        maiorN = array[i];
        indice = i;
      }
  }
  return indice;
}
console.log(inteiros([2, 3, 6, 7, 10, 1]));

function inteiros2(array2) {
  let menorN = 9007199254740992n;
  let indice;
  for (let i = 0; i < array2.length; i += 1) {
      if (array2[i] < menorN) {
        menorN = array2[i];
        indice = i;
      }
  }
  return indice;
}
console.log(inteiros2([2, 4, 6, 7, 10, 0, -3]));

function nomes(arrayDeNomes) {
  let nomeMaior = '';
  for (let i = 0; i < arrayDeNomes.length; i += 1) {
      if (arrayDeNomes[i].length > nomeMaior.length) {
        nomeMaior = arrayDeNomes[i];
      }
  }
  return nomeMaior;
}
console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function contador(listaNumeros) {
  let nRepetido = 0;
  let quantidadeDeVezes = 0;
  let somaNumeros = 0;
  for (let i = 0; i < listaNumeros.length; i += 1) {
    let qualNumero = listaNumeros[i];
    for (let i2 = 1; i2 < listaNumeros.length; i2 += 1) {
      if (qualNumero === listaNumeros[i2]) {
        quantidadeDeVezes += 1;
      }
    }
    if (quantidadeDeVezes > somaNumeros) {
      somaNumeros = quantidadeDeVezes;
      nRepetido = i;
    }
    quantidadeDeVezes = 0;
  }
  return listaNumeros[nRepetido];
}
console.log(contador([2, 3, 2, 5, 8, 2, 3]));

// Podia ter usado mais o For/In nos exercicios.


function somatorio(n) {
  let somaAdicional = 0;
  for (let i = 0; i <= n; i += 1) {
    somaAdicional += i;
  }
  return somaAdicional;
}
console.log(somatorio(5));


function verificandoString(word, ending) {
  if (word[word.length -1] === ending[ending.length - 1] && word.length > ending.length) {
  return true;
  } else {
    return false;
  }
}
console.log(verificandoString('trybe', 'be'));


let numerosRomanos2 = ['I', 'II','III', 'V', 'X', 'L', 'C', 'D', 'M']
let numericos = [1, 2, 3, 5, 10, 50, 100, 500, 1000]

let numerosR = {
   i: 1,
   v: 5,
   x: 10,
   l: 50,
   c: 100,
   d: 500,
   m: 1000
 };

function decifrandoRomano(romanos) {
  romanos = romanos.toLowerCase();
  const quantidadeDeLetra = romanos.length;
  let numeroRomano = numerosR[romanos[quantidadeDeLetra - 1]];
  let numeroDeSoma = numerosR[romanos[quantidadeDeLetra - 1]];
  for (let i = 2; i <= quantidadeDeLetra; i += 1) {
    const prox = numerosR[romanos[quantidadeDeLetra - i]];
    if (numeroRomano <= prox) {
      numeroDeSoma += prox;
    } else {
      numeroDeSoma -= prox;
    }
    numeroRomano = prox;
  }
  return numeroDeSoma;
}
console.log(decifrandoRomano('MMXVIII'));

const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  const resultado = [];
  for (let i = 0; i < vector.length; i += 1) {
    const arrayAtual = vector[i];
    for (let i2 = 0; i2 < arrayAtual.length; i2 += 1) {
      const numeroAtual = arrayAtual[i2];
      const calculoNumero = numeroAtual % 2;
      if (calculoNumero === 0) {
      resultado.push(numeroAtual)
      }
    }
  }
  return resultado
}
console.log(arrayOfNumbers(vector));

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const resultado2 = {};

for (i = 0; i < basket.length; i += 1) {
  const frutaAtual = basket[i];
    if (frutaAtual === comparador) {
      resultado2[frutaAtual] += 1;
    }
  }
  for (i = 0; i < basket.length; i += 1) {
    const comparador = basket[i];
}

