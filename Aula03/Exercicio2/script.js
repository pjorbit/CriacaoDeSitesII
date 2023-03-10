//Construa uma função que retorne um array contendo todos os numeros pares encontrados entre 10 e 50.

const paresVector = () => {
    const arrayUm = []
    for(let i=10; i<=50; i++) {
        if(i % 2 === 0) {
            arrayUm.push(i)
        }
    }
    return arrayUm
}

console.log(paresVector());

//CONCLUIDO