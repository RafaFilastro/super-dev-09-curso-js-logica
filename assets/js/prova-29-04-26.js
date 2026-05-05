function analisarNomeProduto() {
    let nomeProduto = prompt("Digite o nome do produto").trim();
    let nomeProdutoMaisculas = nomeProduto.toUpperCase();
    // 0123456
    // Abacate
    // 7 - 1 => e

    alert(
        "Nome em maiúsculas: " + nomeProdutoMaisculas +
        "\nNome em minúsculas: " + nomeProduto.toLowerCase() +
        "\nQuantidade de caracteres: " + nomeProduto.length +
        "\nPrimeira letra: " + nomeProduto[0] +
        "\nÚltima letra: " + nomeProduto[nomeProduto.length - 1]
    )
}

function verificarFrasePromocional() {
    let frase = prompt("Digite a frase de promoção da loja").trim();

    let contemPalavraDesconto = false;
    if (frase.toLowerCase().includes("desconto")) {
        contemPalavraDesconto = true;
    }

    let comecaComPromocao = "Não";
    if (frase.toLowerCase().startsWith("promoção")) {
        comecaComPromocao = "Sim";
    }

    let terminaComExclamacao = false;
    if (frase.endsWith("!")) {
        terminaComExclamacao = true;
    }

    frase = frase.replace("barato", "econômico");

    alert(
        "Contém a palavra desconto: " + contemPalavraDesconto +
        "\nComeça com promoção: " + comecaComPromocao +
        "\nTermina com exclamação: " + terminaComExclamacao +
        "\nFrase final: " + frase
    )
}

function calcularCompraCliente() {
    let nomeCliente = prompt("Digite o nome do cliente");
    let nomeProduto = prompt("Digite o nome do produto");
    let quantidadeComprada = parseInt(prompt("Digite a quantidade comprada")); // 6
    let precoUnitario = parseFloat(prompt("Digite o preço unitário")); // 10

    // Calcular o valor total da compra
    let valorTotalCompra = quantidadeComprada * precoUnitario;
    // Forma 1: Calcular 10% de desconto, descobrindo o valor do desconto de 10% e calculando o total
    let desconto = valorTotalCompra * 0.10; // 6
    let totalPagarForma1 = valorTotalCompra - desconto; // 60 - 6
    // Forma 2: Calcular o totalPagar substraindo os 10%
    // 1.0 (100%) - 0.1 (10%) => 0.9 (90%)
    let totalPagarForma2 = valorTotalCompra * 0.9;

    alert(
        "Nome Cliente: " + nomeCliente.toUpperCase() +
        "\nNome Produto: " + nomeProduto.toLowerCase() +
        "\nQuantidade: " + quantidadeComprada +
        "\nPreço unitário: " + precoUnitario +
        "\nValor total: " + valorTotalCompra +
        "\nValor com desconto (Forma 1 de calcular): " + totalPagarForma1 +
        "\nValor com desconto (Forma 2 de calcular): " + totalPagarForma2
    )
}

function cadastrarTresFilmes() {
    // ✅ 3 filmes, while
    // ✅ nome, duracao
    // somar total dos filmes
    // quantidadeMaior120
    // mediaDuracaoFilmes
    // filmeMaiorDuracao, nome

    let indice = 0; // serve como quantidade
    let somaTotalDuracoes = 0;
    let quantidadeDuracaoMaior120Minutos = 0;
    let nomeFilmeMaiorDuracao = "";
    let maiorDuracao = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome do filme");
        let duracao = parseInt(prompt("Digite a duração do filme"));

        if (duracao >= 120) {
            quantidadeDuracaoMaior120Minutos = quantidadeDuracaoMaior120Minutos + 1;
        }

        if (duracao > maiorDuracao) {
            maiorDuracao = duracao;
            nomeFilmeMaiorDuracao = nome;
        }

        somaTotalDuracoes = somaTotalDuracoes + duracao;

        indice = indice + 1;
    }

    let mediaDuracoes = somaTotalDuracoes / indice;

    alert(
        "Quantidade de filmes cadastrados: " + indice +
        "\nSoma total das durações: " + somaTotalDuracoes +
        "\nMédias das durações: " + mediaDuracoes +
        "\nQuantidade de filmes com duração maior ou igual a 120 minutos: " + quantidadeDuracaoMaior120Minutos +
        "\nFilme '" + nomeFilmeMaiorDuracao + "' tem a maior duração de " + maiorDuracao + " minutos"
    );
}

function relatorioNotasAlunos() {
    let quantidadeAlunosTurma = parseInt(prompt("Digite a quantidade de alunos da turma"));

    let quantidadeAlunosAprovados = 0, quantidadeAlunosReprovados = 0;
    let somaMedias = 0, maiorMedia = 0, menorMedia = 9999999999999;
    let nomeAlunoMaiorMedia = "";

    for (let indice = 0; indice < quantidadeAlunosTurma; indice = indice + 1) {
        let nome = prompt("Digite o nome do aluno");
        let nota1 = parseFloat(prompt("Digite a nota 1"));
        let nota2 = parseFloat(prompt("Digite a nota 2"));

        let media = (nota1 + nota2) / 2;

        if (media >= 7) {
            quantidadeAlunosAprovados = quantidadeAlunosAprovados + 1;
        } else {
            quantidadeAlunosReprovados = quantidadeAlunosReprovados + 1;
        }

        somaMedias = somaMedias + media;

        if (media > maiorMedia) {
            maiorMedia = media;
            nomeAlunoMaiorMedia = nome;
        }

        if (media < menorMedia) {
            menorMedia = media;
        }
    }

    let mediaGeralTurma = somaMedias / quantidadeAlunosTurma;

    alert(
        "Quantidade de alunos: " + quantidadeAlunosTurma + "\n" +
        "Aprovados: " + quantidadeAlunosAprovados + "\n" +
        "Reprovados: " + quantidadeAlunosReprovados + "\n" +
        "Soma das médias: " + somaMedias.toFixed(2) + "\n" +
        "Média geral da turma: " + mediaGeralTurma.toFixed(2) + "\n" +
        "Maior média: " + maiorMedia.toFixed(2) + "\n" +
        "Aluno com maior média: " + nomeAlunoMaiorMedia + "\n" +
        "Menor média: " + menorMedia.toFixed(2)
    );
}

function relatorioProdutosPorCategoria() {
    let quantidadeCadastrar = parseInt(prompt("Digite a quantidade para cadastrar"));

    let quantidadeLimpeza = 0, quantidadeTecnologia = 0, quantidadeAlimentos = 0;
    let somaPrecos = 0, maiorPreco = 0, menorPreco = 99999;
    let nomeMaiorPreco = "", nomeMenorPreco = "";

    for (let i = 0; i < quantidadeCadastrar; i = i + 1) {
        let nome = prompt("Digite nome do produto").trim();
        let categoria = prompt("Digite a categoria").trim();
        let preco = parseFloat(prompt("Digite o preço"));

        if (categoria.toLowerCase() === "limpeza") {
            quantidadeLimpeza = quantidadeLimpeza + 1;
        } else if (categoria.toLowerCase() === "alimento") {
            quantidadeAlimentos = quantidadeAlimentos + 1;
        } else if (categoria.toLowerCase() === "tecnologia") {
            quantidadeTecnologia = quantidadeTecnologia + 1;
        }

        if (preco > maiorPreco) {
            maiorPreco = preco;
            nomeMaiorPreco = nome;
        }

        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenorPreco = nome;
        }

        somaPrecos = somaPrecos + preco;
    }

    let media = somaPrecos / quantidadeCadastrar;

    alert(
        "RELATÓRIO FINAL\n\n" +
        "Quantidade cadastrada: " + quantidadeCadastrar + "\n\n" +
        "Produtos de Limpeza: " + quantidadeLimpeza + "\n" +
        "Produtos de Alimentos: " + quantidadeAlimentos + "\n" +
        "Produtos de Tecnologia: " + quantidadeTecnologia + "\n\n" +
        "Soma dos preços: R$ " + somaPrecos.toFixed(2) + "\n" +
        "Média dos preços: R$ " + media.toFixed(2) + "\n\n" +
        "Produto mais caro: " + nomeMaiorPreco + " (R$ " + maiorPreco.toFixed(2) + ")\n" +
        "Produto mais barato: " + nomeMenorPreco + " (R$ " + menorPreco.toFixed(2) + ")"
    );
}

function sistemaCadastroValido() {
    debugger
    let quantidadeFuncionarios = parseInt(prompt("Digite a quantidade de funcionários"));
    let quantidadeAtendentes = 0, quantidadeGerentes = 0, quantidadeVendedores = 0;
    let somaSalarios = 0;
    let maiorSalario = 0;
    let menorSalario = 999999;
    let nomeMaiorSalario = "";
    let nomeMenorSalario = "";
    let maiorIdade = 0;
    let menorIdade = 0;


    for (let indice = 0; indice < quantidadeFuncionarios; indice = indice + 1) {
        let nome = prompt("Digite o seu nome").trim();
        while ((nome === "") || (nome.length < 3)) {
            nome = prompt("Digite o seu nome novamente");
        }
        let idade = parseInt(prompt("Digite a sua idade"));
        while ((idade < 16) || (idade > 100)) {
            idade = parseInt(prompt("Digite a idade novamente"));
        }
        let cargo = prompt("Digite o seu cargo");
        while ((cargo.toLowerCase() !== "atendente") && (cargo.toLowerCase() !== "gerente") && (cargo.toLowerCase() !== "vendedor")) {
            cargo = prompt("Digite um cargo válido [atendente, gerente, vendedor]");
        }
        let salario = parseFloat(prompt("Digite o seu salário"));
        while (salario <= 0) {
            salario = parseFloat(prompt("Digite o salário novamente"));
        }
        if (cargo === "atendente") {
            quantidadeAtendentes = quantidadeAtendentes + 1;
        } else if (cargo === "gerente") {
            quantidadeGerentes = quantidadeGerentes + 1;
        } else {
            quantidadeVendedores = quantidadeVendedores + 1;
        }
        if(salario > maiorSalario){
            maiorSalario = salario
            nomeMaiorSalario = nome
        }
        if(salario < menorSalario){
            menorSalario = salario
            nomeMenorSalario = nome
        }
        if(idade >= 18){
            maiorIdade = maiorIdade +1;
        }else{
            menorIdade = menorIdade +1;
        }
        
        somaSalarios = somaSalarios + salario;  

    }

    let mediaSalario = somaSalarios / quantidadeFuncionarios;

    alert("A quantidade total de funcionarios cadastrados: " + quantidadeFuncionarios +
        "\nA quantidade de atendentes: " + quantidadeAtendentes +
        "\nA quantidade de gerentes: " + quantidadeGerentes +
        "\nA quantidade de vendedores: " + quantidadeVendedores +
        "\nA soma dos salários R$:" + somaSalarios.toFixed(2) +
        "\nA media dos salários R$: " + mediaSalario.toFixed(2) +
        "\nQuantidade de maiores de Idade: " + maiorIdade + 
        "\nQuantidade de menores de Idade: " + menorIdade +
        "\n" + nomeMaiorSalario + " é o funcionario com o maior salario R$: " + maiorSalario.toFixed(2) +
        "\n" + nomeMenorSalario + " é o funcionario com o menor salario R$: " + menorSalario.toFixed(2)
    )

}