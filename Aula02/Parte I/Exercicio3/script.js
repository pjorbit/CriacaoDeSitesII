// Faça um programa em javascript, implementando uma função que converta uma temperatura em Graus Celsius para fahrenheit. 
// Importante testar a função, informando uma temperatura (ºC) a ser convertida em  fahrenheit. °F = (°C x 1,8) + 32.
let a = prompt('Entre com um número: ')
a = Number(a)

let converter = (x) => {
    let f = (x * 1.8) + 32;
    return f
}

alert(converter(a));

//CONCLUIDO