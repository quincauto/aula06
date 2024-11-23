# Documentação dos Exercícios de Introdução ao JavaScript


Neste exercício, eu manipulei um array usando métodos comuns de arrays, como `push()`, `pop()` e `indexOf()`.

```javascript
let numbers = [10, 20, 30, 40, 50];

// Usando o método .push() para adicionar o número 60 ao final do array
numbers.push(60);
console.log('Array após o push: ', numbers);

// Usando o método .pop() para remover o último elemento do array
numbers.pop();
console.log('Array após o pop: ', numbers); 

// Usando o método .indexOf() para encontrar a posição do número 30
let index = numbers.indexOf(30);
console.log('Posição do número 30: ', index);
Explicação:
Eu criei um array chamado numbers com os valores [10, 20, 30, 40, 50].
Usei o método .push(60) para adicionar o número 60 ao final do array e imprimi o array atualizado no console.
Depois, utilizei o método .pop() para remover o último valor do array (no caso, 60) e imprimi o array modificado.
Usei o método .indexOf(30) para encontrar a posição do número 30 dentro do array e imprimi o índice retornado.
Exercício 2: Condicionais
Aqui, eu escrevi um código que utiliza condicionais if-else para verificar a temperatura e imprimir mensagens baseadas no valor da variável temperature.

javascript
Copiar código
let temperature = 35;

if (temperature > 40) {
    console.log("Está muito quente!"); 
} else if (temperature > 30) {
    console.log("Está quente!"); 
} else {
    console.log("Está frio!"); 
}
Explicação:
Declarei uma variável temperature com o valor 35.
Escrevi uma estrutura condicional if-else para verificar:
Se a temperatura for maior que 40, imprime "Está muito quente!".
Se a temperatura for maior que 30 (e menor ou igual a 40), imprime "Está quente!".
Se a temperatura for 30 ou menor, imprime "Está frio!".
Exercício 3: Loops e Manipulação de Strings
Neste exercício, eu utilizei loops for e while para realizar operações repetitivas e manipular uma string.

javascript
Copiar código
let phrase = "JavaScript is fun!";

// Usando um loop for para imprimir cada caractere da string
for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}

// Contando quantas vezes a letra 'a' aparece na string
let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a' || phrase[i] === 'A') {
        counter++;
    }
}
console.log(counter);

// Usando um loop while para imprimir números de 1 a 10
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
Explicação:
Usei um loop for para iterar sobre cada caractere da string phrase e imprimir cada caractere no console.
Criei uma variável counter para contar quantas vezes a letra 'a' (tanto maiúscula quanto minúscula) aparece na string phrase. Ao final, imprimi o contador.
Utilizei um loop while para imprimir os números de 1 a 10 no console.
Exercício 4: Escopo de Variáveis
Aqui, explorei o conceito de escopo de variáveis, declarando variáveis com o mesmo nome em diferentes escopos e observando como elas se comportam.

javascript
Copiar código
let x = 100;

function testScope() {
    let x = 50;
    console.log(x);

    if (true) {
        let x = 30;
        console.log(x);
    }
}

testScope();
console.log(x);
Explicação:
Declarei uma variável x com o valor 100 no escopo global.
Dentro da função testScope(), declarei uma nova variável x com o valor 50 e a imprimi.
Dentro da função, criei um bloco if e declarei outra variável x com o valor 30 e a imprimi.
Chamei a função testScope() e, em seguida, imprimi o valor da variável x fora da função para mostrar como o escopo de variáveis funciona.
Dentro da função e dentro do bloco if, o valor da variável x será local e, portanto, o que será impresso será 50 e 30, respectivamente.
Fora da função, o valor da variável global x será impresso como 100, já que a variável global não é afetada pelas declarações locais dentro da função
