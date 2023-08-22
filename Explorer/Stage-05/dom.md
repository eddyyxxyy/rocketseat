# O que é a DOM?

- Document Object Model:
  - modelagem do documento como objeto JavaScript.
- Representação do HTML em objetos JavaScript:
  - atributos (propriedades) e métodos (funcionalidades).
- Criado pelo navegador (browser):
  - é uma interface (API) usada no navegador.

> Mas o que é uma interface (API)? Se trata do termo abreviado em inglês para Application Programming Interface, ou seja: um conjunto de serviços/funções que foram implementadas em um programa de computador que são disponibilizados para que outros programas/aplicativos possam utiliza-los diretamente de forma simplificada.

Para fazermos o JS conversar/manipular o HTML precisamos fazer uso da DOM.

## Para que serve?

O JS usará essa API para:

- Se conectar ao HTML:
  - a DOM não é o JavaScript.
- Manipular o HTML com JS:
  - modificar o HTML, suas tags e conteúdos, estilos e até disparar ações.

## Dev Tools

Através das ferramentas do desenvolvedor, `Dev Tools`, do seu navegador podemos observar e interagir com a DOM.

Temos dois objetos principais na DOM:

- `window`: objeto global presente em qualquer página no navegador;
  - Funções como `alert()` e `prompt()` estão presentes aqui.
- `document`: a representação em objeto JS do documento HTML.
  - Funções como `querySelector()`, `createElement()` e outras mais, estão presentes aqui.
