//Construa uma função que receba um array de numeros inteiros e retorne um 
//array contendo os numeros impares e divisiveis por sete, encontrados no array de entrada.

let a = 10

const arrayAleatorio = () => {
    const array = [];
    for(let i=1; i<=a; i++) {
        let aleatorio = Math.floor(Math.random() * 999 + 1)
        array.push(aleatorio)
    }
    return array
}

let array = [];
array = arrayAleatorio();

console.log(array);

const inteirosDivisiveis = (array) => {
    let arrayTamanho = array.length;
    let arrayDivisiveis = [];

    for(let i=arrayTamanho; i>=0; i--) {
        if(array[i] % 7 == 0 && array[i] % 2 == 1) {
            arrayDivisiveis.push(array[i])
        }
    }

    if(arrayDivisiveis.length) {
        return arrayDivisiveis
    } else {
        let resposta = 'Infelizmente seu array não possui números impares e divisiveis por sete!';
        return resposta
    }
}

console.log(inteirosDivisiveis(array))