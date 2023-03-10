// Faça um programa em Javascript, que receba três números, e posteriormente submeta-os a uma função que retorne o resultado da soma dos mesmos.
let a = prompt('Entre com um número: ');
let b = prompt('Entre com um número: ');
let c = prompt('Entre com um número: ');

a=Number(a);
b=Number(b);
c=Number(c);

function soma(a,b, c) {
    return a + b + c;
}

alert(soma(a, b, c))

//CONCLUIDO