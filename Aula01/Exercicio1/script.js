let nome = prompt('Qual seu nome?');
let nascimento = Number(prompt('Entre com sua data de nascimento: '));

let idade = 2023 - nascimento;

document.write(`Olá ${nome} ;)\n\n`);
document.write(`sua idade é: ${idade} anos`);