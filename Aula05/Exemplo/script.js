// let data = (new Date()).toLocaleDateString();
// let btn = document.querySelector("button");
// btn.onclick = () => {
//     btn.innerText = data;
// }

document.querySelector("button").onclick = () => {
    let valor = document.querySelector("input").value;
    if(valor.length > 0) {
        if(valor%2==0) {
            document.querySelector("#resposta").innerHTML = "O valor é par!";
        } else {
            document.querySelector("#resposta").innerHTML = "O valor é ímpar!";
        }
    }
}