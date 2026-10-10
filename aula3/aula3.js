let filmes = [
    { id: 1, title: "O Senhor dos Anéis", genre: "Fantasia", year: 2001 },
    { id: 2, title: "Matrix", genre: "Ficção Científica", year: 1999 }
];

// CREATE - Cria e adiciona um filme por ultimo ao nosso array filmes através do método push()
filmes.push({ id: 3, title: "Homem aranha um novo dia", genre: "Ação/Ficção científica", year: 2026 })

// Conseguimos ver os filmes que criamos:
console.log(filmes)

// node aula2.js - para visualizar

// READ - Lista filme por filme que criamos
filmes.forEach(filme => { //forEach - semelhante ao FOR
    console.log(`Titulo do Filme: ${filme.title}, Gênero: ${filme.genre}, Ano de lannçamento: ${filme.year}`);
});

// Para cada filme, exiba as informações por filme (criamos o parametro filme, e estamos pegando os dados do array filmes e no console.log usamos ex: filme.title)

// UPDATE - Atualiza um item em especifico através do ID (utilizamos o método find que localiza o primeiro item no array que atende uma condição)

let filmeToUpdate = filmes.find(filme => filme.id === 1);
// filmes.find encontra o filme com ID igual a 1, também usamos uma arrow function
/*
    Explicação da Arrow function:

    Métodos que processam listas item por item (find, forEach, map, filter) 
    precisam de uma função como argumento para saber o que rodar em cada volta. 
*/

if(filmeToUpdate){ // Aqui faz a verificação se o filme foi encontrado antes de atualizar (o código .find pode retornar undefined) então essa verificação ve se realmente estamos alterando algo
    filmeToUpdate.genre = "Ação"; // Muda o genero para Ação
    console.log(`Filme: ${filmeToUpdate.title}, Novo gênero: ${filmeToUpdate.genre}`) // Aqui básicamente esta falando que o filme x, tem o novo genero
}

console.log (filmes) // Aqui conseguimos ver que realmente alterou o filme 1, que era Ação/Ficção científica para apenas ação

// DELETE - Removendo pelo ID
let index = filmes.findIndex(filme => filme.id === 1); // findIndex = Retorna a posição daquele filme no array (diferente do id que começa com 1, o index do array começa com [0]). 
// Basicamente: Procura o filme cujo ID é 1 e retorna a posição dele no array

if (index !== -1){  // Por quê diferente de -1?  Porque o findIndex() retorna -1 quando não encontra nenhum elemento.
    let removido = filmes.find(filme => filme.id === 1) // find() procura o primeiro filme cujo ID seja 1 e retorna o objeto completo, que fica armazenado na variável "removido"
    filmes.splice(index, 1); // Achando o index ( no nosso exemplo será [0], que é a posição onde está o filme de ID 1) ele vai remover 1 item
    /*
        Como o splice funciona: Ele precisa de duas coisas = posição do array, e quantidade de elementos.
            filmes.splice(index, 1)

            ex:
                frutas = ["Banana", "Morango", "Maçã"] lembrando que começamos a contar a partir do zero - banana = [0]
                frutas.splice(0,1)  - Aqui ta falando que vai pegar o index 0 que é a banana, e vai tirar ela (se fosse: splice(0,2) iria tirar a banana e Morango)

    */

    console.log(`\n Filme com o id ${removido.id} = ${removido.title} Removido com sucesso`) // conforme falado na linha 89 a variavel removido guarda o objeto inteiro. Com o objeto conseguimos acessar as propriedades
}

console.log(`\n Lista de Filmes atualizada: \n`)
console.log(filmes)

const express = require('express'); // Importa o Express
const app = express(); // Cria uma aplicação Express
app.use(express.json()); // Permite trabalhar com dados JSON

// Rota GET para listar todos os filmes
app.get('/read', (req, res) => {
    res.status(200).json(filmes); // Retorna o array de filmes como resposta
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));