function q1RelatorioNumeros(){

    // Guarda o maior número
    let maior = 0;

    // Guarda o menor número
    let menor = 0;

    // Guarda a soma de todos os números
    let soma = 0;

    // Repete 5 vezes (vai pedir 5 números)
    for(let indice = 0; indice < 5; indice = indice + 1){

        // Pede um número e converte para inteiro
        let numero = parseInt(prompt("Digite um número"));

        // Se for a primeira vez (indice 0)
        if(indice === 0){

            // O primeiro número vira o maior
            maior = numero;

            // O primeiro número vira o menor também
            menor = numero;

        } else {

            // Se o número atual for maior que o maior atual
            if(numero > maior){
                // Atualiza o maior
                maior = numero;
            }

            // Se o número atual for menor que o menor atual
            if(numero < menor){
                // Atualiza o menor
                menor = numero;
            }
        }

        // Soma todos os números
        soma = soma + numero;
    }

    // Calcula a média (soma dividido por quantidade)
    let media = soma / 5;

    // Mostra tudo no final
    alert("Maior: " + maior +
          "\nMenor: " + menor +
          "\nMédia: " + media);
}

function q2ValidarNumero(){

    // Pede um número
    let numero = parseInt(prompt("Digite um número"));

    // Enquanto o número estiver ERRADO (menor ou igual a 0)
    while(numero <= 0){

        // Pede novamente
        numero = parseInt(prompt("Digite novamente (precisa ser maior que 0)"));
    }

    // Quando sair do while, significa que está correto
    alert("Número válido: " + numero);
}

function q3ContarIntervalo(){

    // Contador começa em 0
    let contador = 0;

    // Repete 5 vezes
    for(let indice = 0; indice < 5; indice = indice + 1){

        // Pede um número
        let numero = parseInt(prompt("Digite um número"));

        // Verifica se está entre 10 e 20
        if(numero >= 10 && numero <= 20){

            // Se estiver, soma +1 no contador
            contador = contador + 1;
        }
    }

    // Mostra quantos números estavam no intervalo
    alert("Quantidade: " + contador);
}

function q4TratarNome(){

    // Pede o nome completo
    let nomeCompleto = prompt("Digite o nome completo");

    // Remove espaços antes e depois
    nomeCompleto = nomeCompleto.trim();

    // Transforma em letras maiúsculas
    nomeCompleto = nomeCompleto.toUpperCase();

    // Conta quantos caracteres tem
    let quantidade = nomeCompleto.length;

    // Mostra resultado
    alert("Nome: " + nomeCompleto +
          "\nQuantidade de letras: " + quantidade);
}


function questao05(){

    // Cria um contador de tentativas (começa em 0)
    let tentativas = 0;

    // Cria a variável senha vazia (ainda não foi digitada)
    let senha = "";

    // Enquanto:
    // 1) ainda tem menos de 3 tentativas
    // E
    // 2) a senha ainda NÃO é "1234"
    while(tentativas < 3 && senha !== "1234"){

        // Pede a senha para o usuário
        senha = prompt("Digite a senha");

        // Soma +1 tentativa (conta que o usuário tentou)
        tentativas = tentativas + 1;
    }

    // Depois que sair do while, verifica:

    // Se a senha digitada for igual a "1234"
    if(senha === "1234"){

        // Mostra que acertou
        alert("Acesso liberado");

    } else {

        // Se não acertou (ou acabou as tentativas)
        alert("Acesso bloqueado");
    }
}