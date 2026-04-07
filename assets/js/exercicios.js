function atividade01() {
    let personagem = "Batman";
    
    alert("Personagem: " + personagem);

    let anoNascimento = 2000;
    alert("Ano de nascimento: " + anoNascimento);

    let idade = new Date().getFullYear() - anoNascimento;
    alert("Idade: " + idade);

    let altura = 1.75;
    alert("Altura: " + altura, "m");

    let peso = 70;
    alert("Peso: " + peso + "kg");

    let imc = peso / (altura * altura);
    alert("IMC: " + imc.toFixed(2));

    let categoria = "Saudável";
    alert("Categoria: " + categoria);

    let jobs = 10;
    let valorPorJob = 1547;
    let salario = jobs * valorPorJob;

    alert("Jobs: " + jobs);
    alert("Valor por job R$: " + valorPorJob(2));
    alert("Salário R$: " + salario.toFixed(2));
}