function while00() {
    // Solicitar o nome de 5 animais

    // declaração da variável
    let indice = 0;

    // condição para repetir 5 vezes
    while (indice < 5) {
        let nome = prompt("Digite o nome do animal");
        alert("Quantidade de animais cadastrados: " + (indice + 1));

        // incrementar
        indice = indice + 1;
    }
}

function while01() {
    // Apresentar os números ímpares entre 1 e 10
    let indice = 1;

    while (indice <= 50) {
        // Número é ímpar se o resto da divisão é diferente de 0
        if (indice % 2 !== 0) {

            alert(indice);
        }


        indice = indice + 1;
    }
}


function while01ComecoFim() {
    // Apresentar os números ímpares entre o número desejado e fim desejado
    let comeco = parseInt(prompt("Digite o começo"));
    let final = parseInt(prompt("Digite o final"));

    let indice = comeco;

    while (indice <= final) {
        // Número é ímpar se o resto da divisão é diferente de 0
        if (indice % 2 !== 0) {

            alert(indice);
        }
        indice = indice + 1;
    }
}


function for01ComecoFim() {
    // Apresentar os números ímpares entre o número desejado e fim desejado
    let comeco = parseInt(prompt("Digite o começo"));
    let final = parseInt(prompt("Digite o final"));

    for (let indice = comeco; indice <= final; indice = indice + 1) {

        // Número é ímpar se o resto da divisão é diferente de 0
        if (indice % 2 !== 0) {

            alert(indice);
        }
    }
}

function apresentarTodosOsProdutosJuntos() {
    // Solicitar o nome de 3 produtos e apresentar junto

    let texto = "";

    for (indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite o nome do X- alguma coisa");
        texto = texto + nome + "\n";
    }

    alert("Produtos: \n" + texto);
}

function calcularMedia() {
    // Solicitar nome e preço do produto para a quantidade de produtos que o usuário desejar
    // apresentar no final a média dos preços

    let quantidadeProdutos = parseInt(prompt("Digite a quantidade de produtos"));
    let soma = 0;

    for (let i = 0; i < quantidadeProdutos; i = i + 1) {
        let nome = prompt("Digite o nome");

        let preco = parseFloat(prompt("Digite o preço"));

        soma = soma + preco;
    }

    let media = soma / quantidadeProdutos;
    alert("Média: " + media);
}

function descobrirQuantidade() {
    // Descobrir a quantidade de dev c#, javeiro, js
    // Criar 3 variáveis para armazenar as quantidades
    let devsCSharp = 0, devsJava = 0, devsJs = 0, devsOutraLinguagem = 0;

    for (let i = 0; i < 5; i = i + 1) {
        let linguagemDeProgramacaoAtual = prompt("Digite o nome da linguagem de programação que vc trampa");

        if (linguagemDeProgramacaoAtual === "c#") {
            devsCSharp = devsCSharp + 1;
        } else if (linguagemDeProgramacaoAtual === "java") {
            devsJava = devsJava + 1;
        } else if (linguagemDeProgramacaoAtual === "js" || linguagemDeProgramacaoAtual === "javascript") {
            devsJs = devsJs + 1;
        } else {
            devsOutraLinguagem = devsOutraLinguagem + 1;
        }
    }

    alert(
        "Devs C#: " + devsCSharp + "\n" +
        "Devs Java: " + devsJava + "\n" +
        "Devs JavaScript: " + devsJs + "\n" + 
        "Devs Outra Linguagem: " + devsOutraLinguagem
    );
}
