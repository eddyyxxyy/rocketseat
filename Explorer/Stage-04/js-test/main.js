alert("Hello world!");

const x = 2;
const y = 2;

console.log(x + y);

typeof x == "number"
  ? console.log("É um número")
  : console.log("Não é um número");

const z = "Edson";

typeof z == "string"
  ? console.log("É uma string")
  : console.log("Não é uma string");

const a = true;

typeof a == "boolean"
  ? console.log("É um booleano")
  : console.log("Não é um booleano");

console.log(x - y);
console.log(x * y);
console.log(x / y);

function isEven(number) {
  return number % 2 === 0 ? "É par" : "É ímpar";
}

console.log(isEven(x));
