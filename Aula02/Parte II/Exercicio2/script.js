//Construa uma função que receba um array de numeros inteiros e retorne um array contendo os fatoriais destes números.
// const fatorial = (x) => {
//     let res;
//     if(x < 0 || x == 1) {
//         return -1
//     } else {
//         for(let i=x-1; i>=1; i--) {
//             x *= i;
//         }
//         return x;
//     }
// }



let a = 10

const arrayTamanho = () => {
    const array = [];
    for(let i=1; i<=a; i++) {
        let aleatorio = Math.floor(Math.random() * 99 + 1)
        array.push(aleatorio)
    }
    return array
}

let array = [];
array = arrayTamanho();

const fatorialArray = (array) => {
    let tamanhoArray = array.length;
    let res = [];

    for(let i=tamanhoArray-1; i>=1; i++) {
        let x = array[i] *= i;
        res.push(x)
    }
    return res;
}