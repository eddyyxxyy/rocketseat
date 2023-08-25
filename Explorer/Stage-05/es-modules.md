# ES Modules _(import & export)_

Os ES Modules faz parte da sintaxe que entrou em vigor no JS à partir do EcmaScript 6 (ES6).

Eles, ES Modules, disponibilizam qualquer tipo de dado entre arquivos, ou seja: a troca de códigos entre arquivos JS, separando e por consequência isola os códigos.

Dessa forma, entendemos que podemos separar os códigos em diversos arquivos e podemos então isolar escopos de código.

## Preparando o ambiente para usar ES Modules

Numa nova pasta vamos criar os arquivos:

- `index.html`, `main.js` e `utils.js`.

Então estruturamos nosso HTML no arquivo `index.html` e adicionamos nosso script JS `main.js` por meio de uma tag `<script>`.

E, agora a parte mais importante, **habilitamos a tag `<script>` para utilizar a sintaxe do ES Modules**, da seguinte forma:

```html
<script src="./main.js" type="module"></script>
```

### `import` e `export` simples

Podemos importar qualquer arquivo e ele será executado imediatamente, assim como uma função é executada:

```js
// utils.js
const message = "mensagem"; // A declaração dessa constante fica isolada no arquivo util.js, não é possível usá-la em outro arquivo da forma que está.
alert(message); // E a chamada da função alert() também.

// main.js
import "./utils.js"; // Aqui é importado o arquivo utils.js e executa tudo lá dentro, as declarações e execuções de função
```

### Default `import` e `export`

Podemos exportar qualquer tipo de dado e, ao importar, podemos dar qualquer nome aos dados:

```js
// utils.js
export default "algum dado";

// ou, para um dado já existente
const text = "alguma coisa";
export default text;

// main.js
import qualquerNome from "./utils.js";
```

> Somente 1 `default` por arquivo.

### Named export

Dessa forma exportamos uma variável, função, classe, etc. e, ao importar, devemos utilizar o mesmo nome.

```js
// utils.js
export const today = Date.now();

// exportando um valor já existente
const double = (number) => number * 2;
export { double };

// exportando diversos
// export { today, double }

// main.js
import { today } from "./utils.js";
```

### Misto (`named` e `default`)

Poderemos usar um `default export` por arquivo e um (ou mais) `named export`.

```js
//utils.js
const date = new Date();
const greeting = (name) => `hello ${name}`;

export default function (argument) {
  console.log(date, greeting(argument));
}

export { date, greeting };

// main.js
import funcaoPadrao, { date, greeting } from "./utils.js";
```

### `import as`

É possível renomear um ou mais dados que foram exportados.

```js
// utils.js
export function sum(a, b) {
  return a + b;
}

// main.js
import { sum as soma } from "./utils.js";
```

### `import * as`

Podemos importar todos os named exports e dar um nome padrão.

```js
//utils.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => a / b;
// ou
// export { sum, multiply, subtract, divide }

//main.js
import * as calculator from "./utils.js";
```
