//Faça um programa mostre a data atual no formato 'dd/mm/aaaa', em uma div da página.

const hoje = new Date();
let body = document.body;
let demo = document.querySelector('#demo');
let p = document.createElement('p');

p.append(document.createTextNode(hoje.toLocaleDateString('pt-BR')))
demo.appendChild(p);
body.appendChild(demo);
