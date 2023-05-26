document.querySelector("button").onclick = () => {
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let resposta = (peso/(altura*altura)).toFixed(2);
    console.log(resposta)

    if(resposta<17) {
        document.querySelector("#resposta").innerHTML = "Você está muito abaixo do peso"
    } else if(resposta<=18.49) {
        document.querySelector("#resposta").innerHTML = "Você está abaixo do peso"
    } else if(resposta<=24.99) {
        document.querySelector("#resposta").innerHTML = "Você está no peso normal"
    } else if(resposta<=29.99) {
        document.querySelector("#resposta").innerHTML = "Você está acima do peso"
    } else if(resposta<=34.99) {
        document.querySelector("#resposta").innerHTML = "Você está com obesidade I"
    } else if(resposta<=39.99) {
        document.querySelector("#resposta").innerHTML = "Você está com obesidade II"
    } else if(resposta>40) { 
        document.querySelector("#resposta").innerHTML = "Você vai morreKKKK"
    }
}