//Gerar um array contendo todos os números ímpares encontrados no intervalo de 0 a 100. 
//Posteriormente exibir no console todos os números encontrados, assinalando de alguma forma aqueles divisíveis por 7 (sete).

const paresVector = () => {
    const arrayUm = []
    for(let i=0; i<=100; i++) {
        if(i % 2 !== 0) {
            arrayUm.push(i)
            if(i % 7 === 0) {
                arrayUm.push(`${i}`);
            }
        }
    }
    return arrayUm
}

console.log(paresVector());