// Modelo de Objeto para Pessoa
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = parseInt(idade); // Convertendo a idade para número
    }
}

// Função para comparar idades
function compararIdades(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        return `${pessoa1.nome} ${pessoa1.sobrenome} é mais velho(a) que ${pessoa2.nome} ${pessoa2.sobrenome}`;
    } else if (pessoa1.idade < pessoa2.idade) {
        return `${pessoa2.nome} ${pessoa2.sobrenome} é mais velho(a) que ${pessoa1.nome} ${pessoa1.sobrenome}`;
    } else {
        return `${pessoa1.nome} ${pessoa1.sobrenome} e ${pessoa2.nome} ${pessoa2.sobrenome} têm a mesma idade`;
    }
}

// Inicializando lista de pessoas
const pessoas = [];

// Manipulação do DOM para exibir os registros e comparações
const form = document.getElementById('formPessoa');
const listaPessoas = document.getElementById('listaPessoas');
const comparacoesDiv = document.getElementById('comparacoes');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo dados do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const idade = document.getElementById('idade').value;

    // Criando um novo objeto Pessoa
    const novaPessoa = new Pessoa(nome, sobrenome, idade);
    pessoas.push(novaPessoa);

    // Adicionando nova pessoa à lista na página
    const li = document.createElement('li');
    li.textContent = `${nome} ${sobrenome}, ${idade} anos`;
    listaPessoas.appendChild(li);

    // Exibindo comparações
    comparacoesDiv.innerHTML = ''; // Limpando comparações anteriores
    for (let i = 0; i < pessoas.length; i++) {
        for (let j = i + 1; j < pessoas.length; j++) {
            const comparacao = document.createElement('p');
            comparacao.textContent = compararIdades(pessoas[i], pessoas[j]);
            comparacoesDiv.appendChild(comparacao);
        }
    }

    // Limpando formulário
    form.reset();
});