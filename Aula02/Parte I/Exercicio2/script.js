// Faça um programa em javascript, implementando uma função que receba um numero e retorne o fatorial deste número. 
// Importante testar a função, informando um numero a ser calculado o fatorial.
let a = prompt('Entre com um número: ');
a = Number(a);

let fatorial = (x) => {
    let res;
    if(x < 0 || x == 1) {
        return -1
    } else {
        for(let i=x-1; i>=1; i--) {
            x *= i;
        }
        return x;
    }
}

alert(fatorial(a))