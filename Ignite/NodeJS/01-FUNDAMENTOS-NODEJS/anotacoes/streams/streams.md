# Streams

Um dos conceitos que fez do Node ser o gigante que é hoje e conseguir resolver problemas que outras tecnologias, ou não resolviam, ou resolviam de forma complexa, pois trouxe essa forma de criar essa funcionalidade de forma muito mais direta e simplista, com o mesmo grau ou maior qualidade que outras tecnologias.

## Expandindo

Ao ouvirmos o termo, a primeira coisa que pensamos é "Netflix", "Spotify", ou algum outro exemplo de stream de dados (seja de músicas, vídeos, filmes, etc.) e entender o conceito por trás disso é o que de fato nos faz entender os Streams do Node.

Quando começamos a assistir um vídeo, filme ou ouvir uma música por algum aplicativo de streaming, assistimos e ouvimos do começo ou de onde paramos, mesmo que o o recurso não esteja carregado por completo ainda podemos consumi-lo. Esse é o conceito do Stream.

O conceito é poder consumir pequenas partes de alguma coisa, poder trabalhar e usufruir "daquilo" sem que o arquivo ou os arquivos que envolvem aquela mídia estejam carregados por completo.

O Node nos permite fazer isso de maneira simples e performática, e para começarmos iremos sair dos casos de uso do mundo real: iremos fazer uma importação de clientes via CSV (Excel).

## A importação de um CSV

Através de uma rota POST, por exemplo, um usuário poderia enviar um arquivo CSV de qualquer tamanho (se for permitido pelo servidor) para nosso back-end o processar e guardar.

O problema está justamente em como fazemos o processamento dessa requisição e não, necessariamente, no tamanho do arquivo que o usuário envia. A rota de exemplo poderia ser `/upload import.csv`.

Se não estivermos usando o esquema de Streams, o node irá ler esse arquivo de 1GB, depois realizar cada uma das operações de escrita no banco de dados e isso irá consumir muito tempo e recursos computacionais; numa rede de 10MB/s irá levar por volta de 100 segundos somente para a leitura e então fazer as inserções no banco de dados.

Quando aplicamos o esquema de Streams com Node podemos: enquanto fazemos o upload do arquivo a cada 10MB/s, podemos no primeiro segundo já processar as inserções no banco de dados dos dados que já foram lidos pelo sistema, antes de esperar toda a leitura e envio do arquivo de 100 segundos. É uma forma de processamento em tempo real, podendo até ser chamado de concorrência dependendo do contexto, é a leitura e escrita não bloqueante, uma vez que nenhuma das operações bloqueia o restante do funcionamento da aplicação.

Estamos falando de Readable Streams e Writable Streams. Voltando ao caso do envio de músicas do Spotify ou vídeo da Netflix, estamos enviando para o Front-End aos poucos as informações dos dados que queremos transmitir, estamos enviando Writable Streams, enviando informação aos poucos. No caso do Upload, que o usuário nos mandou um arquivo de 1GB, estamos lendo o arquivo aos poucos, uma Readable Stream.

> No NodeJS, toda porta de entrada e saída é automáticamente uma Stream, e isso é super importante de entender. O `req` e `res` de uma rota são Streams no final das contas, ou seja, quando fazemos uma requisição HTTP para um servidor Node nós podemos mantê-la aberta e enviar/receber os dados aos poucos. Não obrigatóriamente precisamos devolver respostas ou receber requisições de forma total, podemos fazer isso aos poucos.
