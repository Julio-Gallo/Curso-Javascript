//calcucar vetorial de um número:
function fatorial(n) {// função vetorial de um número que vai retornar o fatorial deste número:
    let fat = 1
    for(let c = n; c > 1; c--/*contator começando em n e enquanto contador for maior que 1 contador perde 1*/ ) {
        fat *=c// fatorial recebe fatorial * contador
    }
    return fat
}
console.log(fatorial(5))// mostre na tela o fatoril de 5