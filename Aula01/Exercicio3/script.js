let num = Number(prompt('Entre com um número: '));
let divisiveeis = 0

function primos() {
    for(i=1;i<=num;i++){
        if(num%i===0) {
            divisiveeis++
        }
    }
    if(divisiveeis===2) {
        document.write('Seu número é primo')
    } else {
        document.write('Seu número não é primo')
    }
}

primos();