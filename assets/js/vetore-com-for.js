function exemploVetorComFor(){
    //Solicitar o nome de 3 pessoas

    let nomes = [];

    //i = i + 1;
    //i += 1;
    //i++;

    for(let i = 0; i < 3; i += 1){
        nomes.push(prompt("Digite o nome"));
    }

    for(let i = 0; i < 3; i += 1){
        alert(nomes[i]);
    }
}

function exemplo02Media(){
    let alunos = [];
    let notas1 = [];
    let notas2 = [];

    for (let i = 0; i < 3; i += 1) {
        let nomeAluno = prompt("Digite o nome do aluno");
        let nota1 = parseFloat(prompt("Digite a nota 1"));
        let nota2 = parseFloat(prompt("Digite a nota 2"));

        alunos.push(nomeAluno);
        notas1.push(nota1);
        notas2.push(nota2);
    }

    //Apresentar a média de cada aluno
    for (let i = 0; i < 3; i += 1){
        let nota1 = notas1[i];
        let nota2 = notas2[i];
        let media = (nota1 + nota2) / 2

        let status = "";
        if(media < 7){
            status = "Reprovado";
        }else{
            status = "Aprovado";
        }

        alert(alunos[i] + " tem a média: " + media + " status é: " + status);
    }
}