/*
1. Criar uma função exercicio01
    Criar um vetor de perfumes
    Adicionar 4 perfumes
    Apresentar os 4 perfumes
    Alterar o nome do Segundo perfume 
    Adicionar 1 perfume
    Apagar o primeiro perfume
    Apresentar os perfumes
*/

function exercicio01() {
    let perfumes = [];
    perfumes.push("Catinga de urubu");
    perfumes.push("Asa catinguenta");
    perfumes.push("Peido de ovo");
    perfumes.push("Diarreia podre");

    alert("O primeiro perfume: " + perfumes[0] +
        "\nO segundo perfume: " + perfumes[1] +
        "\nO Terceiro perfume: " + perfumes[2] +
        "\nO Quarto perfume: " + perfumes[3]
    );

    perfumes[1] = "Catingueira fedida"
    perfumes.push("Sabooor catinga");
    perfumes.splice(0, 1)

    alert("O primeiro perfume: " + perfumes[0] +
        "\nO segundo perfume: " + perfumes[1] +
        "\nO Terceiro perfume: " + perfumes[2] +
        "\nO Quarto perfume: " + perfumes[3]
    );
}

/*
2. Criar uma função exercicio02 (n pedir para usuário)
    Criar um vetor de materias (string)
    Criar um vetor de cargaHoraria (int)
    Criar um vetor de valoresHora (float)

    Adicionar 3 matérias preenchendo para cada matéria os dados de cada vetor
    Ex.: "Geografia", 100, R$ 20.20
    materias.push("Geografia");
    // ..... 

    Apresentar todas os dados dos vetores
    Alterar o nome da segunda Matéria
    Alterar a carga horária da primeira matéria
    Apresentar todas os dados dos vetores
*/

function exercicio02() {
    let materias = [];
    let cargaHorario = [];
    let valoresHora = [];

    materias.push("Matemática");
    cargaHorario.push(320);
    valoresHora.push(23.50);

    materias.push("Artes");
    cargaHorario.push(480);
    valoresHora.push(35.78);

    materias.push("Aritimética");
    cargaHorario.push(570);
    valoresHora.push(43.57);

    alert("Primeira materia: " + materias[0] +
        "\nCarga horaria: " + cargaHorario[0] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[0].toFixed(2) +
        "\n\nSegunda materia: " + materias[1] +
        "\nCarga horaria: " + cargaHorario[1] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[1].toFixed(2) +
        "\n\nTerceira materia: " + materias[2] +
        "\nCarga horaria: " + cargaHorario[2] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[2].toFixed(2)
    );

    materias[1] = "Filosofia";
    cargaHorario[0] = 450;

    alert("Primeira materia: " + materias[0] +
        "\nCarga horaria: " + cargaHorario[0] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[0].toFixed(2) +
        "\n\nSegunda materia: " + materias[1] +
        "\nCarga horaria: " + cargaHorario[1] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[1].toFixed(2) +
        "\n\nTerceira materia: " + materias[2] +
        "\nCarga horaria: " + cargaHorario[2] + " " + "Horas" +
        "\nValor hora: R$: " + valoresHora[2].toFixed(2)
    );
}


/*
3. Criar uma função exercicio03
    Criar um vetor de destinosTuristicos
    Solicitar para o usuário o nome de 4 destinos turísticos
    Adicionar os 4 destinos no vetor
    Apresentar todos os destinos turísticos
    Solicitar para o usuário um novo nome para o segundo destino
    Alterar o segundo destino turístico
    Solicitar para o usuário mais 1 destino turístico
    Adicionar o novo destino no vetor
    Apagar o primeiro destino turístico
    Apresentar todos os destinos turísticos

*/

function exercicio03() {
    let destinosTuristicos = [];

    destinosTuristicos.push(prompt("Digite um destino turistico"));
    destinosTuristicos.push(prompt("Digite um destino turistico"));
    destinosTuristicos.push(prompt("Digite um destino turistico"));
    destinosTuristicos.push(prompt("Digite um destino turistico"));

    alert("Os quatros destinos turisticos escolhidos são:" +
        "\n" + destinosTuristicos[0] +
        "\n" + destinosTuristicos[1] +
        "\n" + destinosTuristicos[2] +
        "\n" + destinosTuristicos[3]
    );

    destinosTuristicos[1] = prompt("Digite um novo destino");
    destinosTuristicos.push(prompt("Adcione mais um destino turistico"));
    destinosTuristicos.splice(0, 1);

    alert("Os destinos atualizados são:" +
        "\n" + destinosTuristicos[0] +
        "\n" + destinosTuristicos[1] +
        "\n" + destinosTuristicos[2] +
        "\n" + destinosTuristicos[3]
    );
}


/*
4. Criar uma função exercicio04
    Criar um vetor de restaurantes
    Criar um vetor de cidades
    Criar um vetor de valoresMedios

    Solicitar para o usuário os dados de 3 restaurantes
    Para cada restaurante solicitar:
        Nome do restaurante
        Cidade onde fica localizado
        Valor médio gasto por pessoa

    Adicionar os dados nos vetores
    Apresentar todos os dados dos restaurantes
    Solicitar para o usuário um novo nome para o primeiro restaurante
    Alterar o nome do primeiro restaurante
    Solicitar para o usuário um novo valor médio para o terceiro restaurante
    Alterar o valor médio do terceiro restaurante
    Apresentar todos os dados dos restaurantes
*/

function exercicio04() {
    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Digite o nome do primeiro restaurante"));
    cidades.push(prompt("Digite a cidade que fica localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    restaurantes.push(prompt("Digite o nome do segundo restaurante"));
    cidades.push(prompt("Digite a cidade que fica localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    restaurantes.push(prompt("Digite o nome do terceiro restaurante"));
    cidades.push(prompt("Digite a cidade que fica localizado"));
    valoresMedios.push(parseFloat(prompt("Digite o valor medio gasto por pessoa")));

    alert("O primeiro restaurante: " + restaurantes[0] +
        "\nA cidade localizada: " + cidades[0] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[0].toFixed(2) +
        "\n\nO segundo restaurante: " + restaurantes[1] +
        "\nA cidade localizada: " + cidades[1] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[2].toFixed(2) +
        "\n\nO terceiro restaurante: " + restaurantes[2] +
        "\nA cidade localizada: " + cidades[1] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[2].toFixed(2)
    );

    restaurantes[0] = prompt("Digite um novo restaurante");
    valoresMedios[2] = parseFloat(prompt("Digite um novo valor medio"));

    alert("O primeiro restaurante: " + restaurantes[0] +
        "\nA cidade localizada: " + cidades[0] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[0].toFixed(2) +
        "\n\nO segundo restaurante: " + restaurantes[1] +
        "\nA cidade localizada: " + cidades[1] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[2].toFixed(2) +
        "\n\nO terceiro restaurante: " + restaurantes[2] +
        "\nA cidade localizada: " + cidades[1] +
        "\nO valor medio gasto por pessoa: R$: " + valoresMedios[2].toFixed(2)
    );
}

/*
5. Criar uma função exercicio05
    Criar um vetor de filmes
    Criar um vetor de generos
    Criar um vetor de duracoes
    Criar um vetor de duracoesHoras

    Solicitar para o usuário os dados de 4 filmes
    Para cada filme solicitar:
        Nome do filme
        Gênero do filme
        Duração em minutos

    Adicionar os dados nos vetores
    Calcular a duração do filme em horas
    Armazenar a duração em horas no vetor duracoesHoras

    Apresentar todos os dados dos filmes, incluindo a duração em minutos e em horas
    Solicitar para o usuário um novo gênero para o segundo filme
    Alterar o gênero do segundo filme
    Solicitar para o usuário uma nova duração para o primeiro filme
    Alterar a duração do primeiro filme
    Calcular novamente a duração em horas do primeiro filme
    Alterar a duração em horas do primeiro filme no vetor duracoesHoras
    Apagar o último filme de todos os vetores
    Apresentar todos os dados dos filmes
*/

function exercicio05() {
    let filmes = [];
    let generos = [];
    let duracoes = [];
    let duracoesHoras = [];

    filmes.push(prompt("Digite o nome do primeiro filme"));
    generos.push(prompt("Digite o genero do primeiro filme"));
    duracoes.push(parseInt(prompt("Digite a duração em minutos deste filme")));

    filmes.push(prompt("Digite o nome do segundo filme"));
    generos.push(prompt("Digite o genero do segundo filme"));
    duracoes.push(parseInt(prompt("Digite a duração em minutos deste filme")));

    filmes.push(prompt("Digite o nome do terceiro filme"));
    generos.push(prompt("Digite o genero do terceiro filme"));
    duracoes.push(parseInt(prompt("Digite a duração em minutos deste filme")));

    filmes.push(prompt("Digite o nome do quarto filme"));
    generos.push(prompt("Digite o genero do quarto filme"));
    duracoes.push(parseInt(prompt("Digite a duração em minutos deste filme")));

    duracoesHoras.push(parseFloat(duracoes[0] / 60));
    duracoesHoras.push(parseFloat(duracoes[1] / 60));
    duracoesHoras.push(parseFloat(duracoes[2] / 60));
    duracoesHoras.push(parseFloat(duracoes[3] / 60));


    alert("O primeiro filme: " + filmes[0] +
        "\nO genero: " + generos[0] +
        "\nA duração em minutos: " + duracoes[0] +
        "\nA duração em horas: " + duracoesHoras[0].toFixed(2) + " Horas" +
        "\nO segundo filme: " + filmes[1] +
        "\nO genero: " + generos[1] +
        "\nA duração em minutos: " + duracoes[1] +
        "\nA duração em horas: " + duracoesHoras[1].toFixed(2) + " Horas" +
        "\nO terceiro filme: " + filmes[2] +
        "\nO genero: " + generos[2] +
        "\nA duração em minutos: " + duracoes[2] +
        "\nA duração em horas: " + duracoesHoras[2].toFixed(2) + " Horas" +
        "\nO quarto filme: " + filmes[3] +
        "\nO genero: " + generos[3] +
        "\nA duração em minutos: " + duracoes[3] +
        "\nA duração em horas: " + duracoesHoras[3].toFixed(2) + " Horas"
    );

    generos[1] = prompt("Digite outro genero");
    duracoes[0] = parseInt(prompt("Digite uma nova duração"));
    duracoesHoras.push(parseFloat(duracoes[0] / 60));
    filmes.splice(3, 3);

    alert("O primeiro filme: " + filmes[0] +
        "\nO genero: " + generos[0] +
        "\nA duração em minutos: " + duracoes[0] +
        "\nA duração em horas: " + duracoesHoras[0].toFixed(2) + " Horas" +
        "\nO segundo filme: " + filmes[1] +
        "\nO genero: " + generos[1] +
        "\nA duração em minutos: " + duracoes[1] +
        "\nA duração em horas: " + duracoesHoras[1].toFixed(2) + " Horas" +
        "\nO terceiro filme: " + filmes[2] +
        "\nO genero: " + generos[2] +
        "\nA duração em minutos: " + duracoes[2] +
        "\nA duração em horas: " + duracoesHoras[2].toFixed(2) + " Horas"
    );
}



/*
6. Criar uma função exercicio06
    Criar um vetor de produtos
    Criar um vetor de quantidades
    Criar um vetor de precos
    Criar um vetor de valoresTotais

    Solicitar para o usuário os dados de 3 produtos de supermercado
    Para cada produto solicitar:
        Nome do produto
        Quantidade comprada
        Preço unitário

    Adicionar os dados nos vetores
    Calcular o valor total de cada produto
    Armazenar o valor total no vetor valoresTotais

    Apresentar todos os dados dos produtos, incluindo quantidade, preço unitário e valor total
    Solicitar para o usuário o nome de mais 1 produto
    Solicitar para o usuário a quantidade desse produto
    Solicitar para o usuário o preço unitário desse produto
    Adicionar o novo produto nos vetores
    Calcular o valor total do novo produto
    Armazenar o valor total no vetor valoresTotais

    Solicitar para o usuário um novo preço para o segundo produto
    Alterar o preço do segundo produto
    Calcular novamente o valor total do segundo produto
    Alterar o valor total do segundo produto no vetor valoresTotais

    Apagar o primeiro produto de todos os vetores
    Apresentar todos os dados dos produtos
*/

function exercicio06() {
    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotais = [];

    produtos.push(prompt("Digite o nome de um produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade")));
    precos.push(parseFloat(prompt("Digite o valor")));

    produtos.push(prompt("Digite o nome de um produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade")));
    precos.push(parseFloat(prompt("Digite o valor")));

    produtos.push(prompt("Digite o nome de um produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade")));
    precos.push(parseFloat(prompt("Digite o valor")));

    valoresTotais.push(precos[0] * quantidades[0]);
    valoresTotais.push(precos[1] * quantidades[1]);
    valoresTotais.push(precos[2] * quantidades[2]);

    alert("Produto: " + produtos[0] +
        "\nQuantidade: " + quantidades[0] +
        "\nPreço: R$ " + precos[0].toFixed(2) +
        "\nO valor total dos produtos: R$ " + valoresTotais[0].toFixed(2) +
        "\n\nProduto: " + produtos[1] +
        "\nQuantidade: " + quantidades[1] +
        "\nPreço: R$ " + precos[1].toFixed(2) +
        "\n\nO valor total dos produtos: R$ " + valoresTotais[1].toFixed(2) +
        "\n\nProduto: " + produtos[2] +
        "\nQuantidade: " + quantidades[2] +
        "\nPreço: R$ " + precos[2].toFixed(2) +
        "\nO valor total dos produtos: R$ " + valoresTotais[2].toFixed(2)

    )
}

/*
1. Criar uma função exercicio07
   Criar um vetor de nomes
   Solicitar para o usuário 3 nomes
   Adicionar os 3 nomes no vetor
   Utilizar um for para apresentar todos os nomes
*/

function exercicio07() {
    let nomes = [];

    for (let i = 0; i < 3; i += 1) {
        let nome = prompt("Digite um nome");
        nomes.push(nome);
    }

    for (let i = 0; i < nomes.length; i += 1) {
        alert("O nome é: " + nomes[i]);
    }
}



/*
2. Criar uma função exercicio08
   Criar um vetor de idades
   Solicitar para o usuário 4 idades
   Adicionar as 4 idades no vetor
   Utilizar um for para apresentar todas as idades
*/

function exercicio08() {
    let idades = [];

    for (let i = 0; i < 4; i += 1) {
        let idade = parseInt(prompt("Digite uma idade"));
        idades.push(idade);
    }

    for (let i = 0; i < idades.length; i += 1) {
        alert("A idade é: " + idades[i]);
    }
}


/*
3. Criar uma função exercicio09
   Criar um vetor de cidades
   Solicitar para o usuário 5 cidades
   Adicionar as 5 cidades no vetor
   Utilizar um for para apresentar todas as cidades
   Ao final, mostrar a quantidade de cidades cadastradas
*/

function exercicio09() {
    let cidades = [];

    for (let i = 0; i < 5; i += 1) {
        let cidade = prompt("Digite o nome de uma cidade");
        cidades.push(cidade);
    }

    for (let i = 0; i < cidades.length; i += 1) {
        alert("A cidade é: " + cidades[i]);
    }

    alert("Quantidade de cidades cadastradas: " + cidades.length);
}

/*
4. Criar uma função exercicio10
   Criar um vetor de números
   Solicitar para o usuário 5 números
   Adicionar os 5 números no vetor
   Utilizar um for para somar todos os números do vetor
   Ao final, mostrar a soma total
*/

function exercicio10() {
    let numeros = [];
    let soma = 0;

    for (let i = 0; i < 5; i += 1) {
        let numero = parseInt(prompt("Digite um número"));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i += 1) {
        soma = soma + numeros[i];
    }
    alert("A soma total dos números é: " + soma);
}

/*
5. Criar uma função exercicio11
   Criar um vetor de notas
   Solicitar para o usuário 4 notas
   Adicionar as 4 notas no vetor
   Utilizar um for para somar todas as notas
   Ao final, calcular e mostrar a média
*/

function exercicio11() {
    let notas = [];
    let soma = 0;

    for (let i = 0; i < 4; i += 1) {
        let nota = parseFloat(prompt("Digite uma nota"));
        notas.push(nota);
    }

    for (let i = 0; i < notas.length; i += 1) {
        soma = soma + notas[i];
    }
    let media = soma / notas.length;
    alert("A média das notas é: " + media.toFixed(2));
}

/*
6. Criar uma função exercicio12
   Criar um vetor de produtos
   Solicitar para o usuário 4 produtos
   Adicionar os 4 produtos no vetor
   Utilizar um for para apresentar todos os produtos
   Solicitar para o usuário um novo nome para o terceiro produto
   Alterar o terceiro produto
   Utilizar um for para apresentar novamente todos os produtos
*/

function exercicio12() {
    let produtos = [];

    for (let i = 0; i < 4; i += 1) {
        let produto = prompt("Digite o nome de um produto");
        produtos.push(produto);
    }

    for (let i = 0; i < produtos.length; i += 1) {
        alert("O produto é: " + produtos[i]);
    }

    produtos[2] = prompt("Digite um novo nome para o terceiro produto");

    for (let i = 0; i < produtos.length; i += 1) {
        alert("O produto é: " + produtos[i]);
    }
}
/*
7. Criar uma função exercicio13
   Criar um vetor de temperaturas
   Solicitar para o usuário 5 temperaturas
   Adicionar as 5 temperaturas no vetor
   Utilizar um for para descobrir a maior temperatura
   Ao final, mostrar a maior temperatura informada
*/

function exercicio13(){
    let temperaturas = [];

    for (let i = 0; i < 5; i += 1) {
        let valorTemperatura = parseFloat(prompt("Digite a temperatura"));
        temperaturas.push(valorTemperatura);
    }

    let maiorTemperatura = 0;

    for (let i = 0; i < temperaturas.length; i += 1) {
        if(temperaturas[i] > maiorTemperatura){
            maiorTemperatura = temperaturas[i];
        }
    }
    alert("A maior temperatura informada é: " + maiorTemperatura);
}

/*
8. Criar uma função exercicio14
   Criar um vetor de preços
   Solicitar para o usuário 4 preços
   Adicionar os 4 preços no vetor
   Utilizar um for para descobrir o menor preço
   Ao final, mostrar o menor preço informado
*/

function exercicio14(){
    let precos = [];

    for (let i = 0; i < 4; i += 1) {
        let valorPreco = parseFloat(prompt("Digite o preço"));
        precos.push(valorPreco);
    }

    let menorPreco = precos[0];

    for (let i = 0; i < precos.length; i += 1) {
        if(precos[i] < menorPreco){
            menorPreco = precos[i];
        }
    }
    alert("O menor preço informado é: " + menorPreco.toFixed(2));
}

/*
9. Criar uma função exercicio15
   Criar um vetor de números
   Solicitar para o usuário 6 números
   Adicionar os 6 números no vetor
   Utilizar um for para contar quantos números são pares
   Ao final, mostrar a quantidade de números pares
*/

function exercicio15() {
    let numeros = [];
    let quantidadePares = 0;

    for (let i = 0; i < 6; i += 1) {
        let numero = parseInt(prompt("Digite um número"));
        numeros.push(numero);
    }

    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] % 2 === 0) {
            quantidadePares += 1;
        }
    }
    alert("A quantidade de números pares é: " + quantidadePares);
}

/*      
10. Criar uma função exercicio16
    Criar um vetor de alunos
    Solicitar para o usuário 5 nomes de alunos
    Adicionar os 5 nomes no vetor
    Solicitar para o usuário um nome para pesquisa
    Utilizar um for para percorrer o vetor e verificar se o nome existe
    Ao final, mostrar:
    a) "Aluno encontrado" caso o nome exista
    b) "Aluno não encontrado" caso o nome não exista
*/

function exercicio16() {
    let alunos = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeAluno = prompt("Digite o nome de um aluno");
        alunos.push(nomeAluno);
    }

    let nomePesquisa = prompt("Digite um nome para pesquisa");
    let alunoEncontrado = false;

    for (let i = 0; i < alunos.length; i += 1) {
        if (alunos[i] === nomePesquisa) {
            alunoEncontrado = alunos[i];
        }
    }

    if (alunoEncontrado) {
        alert("Aluno encontrado");
    } else {
        alert("Aluno não encontrado");
    }
}