function exemplo01(){
    let carros = [];
    carros.push("Bmw m3"); // indice 0, posição 1
    carros.push("Byd seal"); // indice 1, posição 2
    carros.push("Mobi"); // indice 2, posição 3
    carros.push("Chevet"); // indice 3, posição 4

    carros[3] = "chevette"
    carros.splice[2, 1]; //apagar o mobi

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros[1] + 
        "\nTerceiro: " + carros[2]
    );
}

function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    if(frequencias[0] >= 70){
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    if(frequencias[1] >= 70){
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    alert("Alunos: " + 
        "\nNome: " + alunos[0] + 
        "\nFrequencia: " + frequencias[0] + 
        "\nStatus: " + status[0] +
        "\n\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status[1]
    );
}

