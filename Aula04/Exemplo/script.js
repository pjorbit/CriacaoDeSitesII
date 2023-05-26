// document.querySelector('#demo').innerText = 'Sextouuu';
// console.log(document.querySelector('#demo').innerHTML);

let body = document.body;

let h1 = document.createElement("h1");
h1.append(document.createTextNode('Sextooo'));
body.appendChild(h1);

let div = document.createElement('div');


let img = document.createElement('img');
img.setAttribute('src', './02june22_basket_icon_04-removebg-preview.png');
div.appendChild(img);
body.appendChild(div);

img.setAttribute('style', "filter: drop-shadow(0 0 5px #101010");