const myName = "Gabriel";
const birthCity = "Mauá";
const birthYear = 1998;

console.log(myName)
console.log(birthCity)
console.log(birthYear)

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge)

const base = 5;
let height = 8;
const area = base * height;
console.log(area);

const nota = 49.8;
if (nota >= 80){
  console.log('Parabéns, você foi aprovado');
} else if (nota >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}

const comida = 'pão na chapas';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const currentHour = 23;
let message = '';
if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!'
}  else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém passado'
} else {
  message = 'Essa hora não tem no dia'
}

console.log(message)

let weekDay = 'domingo';

if (weekDay  === 'segunda-feira' || weekDay  === 'terça-feira' || weekDay  === 'quarta-feira' || weekDay  === 'quinta-feira' || weekDay  === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else if (weekDay  === 'sábado' || weekDay  === 'domingo') {
  console.log('FINALMENTE, descanso UwU')
} else {
  console.log('Opa, esse dia não existe')
}

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


let estadoSeletivo = 'reprovadas';
switch (estadoSeletivo) {
  case "aprovada":
    console.log("Você foi aprovado!");
    break;
  case "lista":
    console.log("Você está na lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovado!");
    break;
  default:
    console.log("não se aplica");
    break;
}