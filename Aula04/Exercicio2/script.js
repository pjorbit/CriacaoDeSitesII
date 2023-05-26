//Faça um programa em Javascript que altere a cor de fundo da pagina a cada 10 segundos.

// const corAleatoria = () => {
//     const array = [];
//     for(let i=0; i<=3; i++) {
//         let aleatorio = Math.floor(Math.random() * 10)
//         array.push(aleatorio)
//     }
//     return array
// }

// console.log(corAleatoria());

let body = document.body;

let trocaBG = () => {
    let i = Math.floor(Math.random() * arrayColor.length);
    body.style.background = arrayColor[i];
}

let arrayColor = ['#fff', '#101010', '#101634'];
setInterval(trocaBG, 1000)