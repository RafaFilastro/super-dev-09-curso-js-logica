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

function exercicio05(){
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