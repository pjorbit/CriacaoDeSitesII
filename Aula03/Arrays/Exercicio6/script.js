//construa uma função receba um array qualquer, e mostra no console os valores amazenados na ordem inversa.

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

console.log(array);

const inverterArray = (array) => {
    let arrayInvertido = [];
    arrayInvertido = array.reverse();
    return arrayInvertido
}

console.log(inverterArray(array));

//CONCLUIDO