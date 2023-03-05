//Contrua uma função que gere um array de numeros inteiros aleatorios. 
//É necessário informar a função a quantidade de numeros inteiros que o array deve conter.

let a = prompt('Entre com o tamanho do array: ');
a = Number(a);

const arrayTamanho = () => {
    const array = [];
    for(let i=0; i<=a; i++) {
        let aleatorio = Math.floor(Math.random() * 10)
        array.push(aleatorio)
    }
    return array
}
