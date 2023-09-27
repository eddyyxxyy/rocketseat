/*
 * Sendo sucinto, o Buffer é a representação de
 * um espaço na memória do computador, usado especificamente
 * para tranzitar os dados de forma extremamente rápida.
 *
 * Ou seja, os dados armazenados no Buffer são feitos e
 * armazenados para serem tratados e enviados para algum outro
 * lugar e logo removidos.
 *
 * Os Buffers nos proporcionam ler dados, os tratar e os salvar
 * em memória de maneira muito performática.
 *
 * O Node utiliza esse modelo de Buffer pois ler as informações
 * em sua forma binária, que é como o Buffer armazena os dados
 * que recebe, do que um texto (String). Podemos consumir os
 * pedaços (chunks) de um Buffer.
 */

const buf = Buffer.from('ok');

console.log(buf); // <Buffer 6f 6b> -> Hexadeximal
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 111, 107 ] } -> Binário
console.log(buf.toString()); // ok -> String
