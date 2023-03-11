//Faça um programa que solicite que o usuário informe os dados de um série de produtos. 
//Para cada produto informado deve ser criado um objeto com as propriedades:descrição, estoque, categoria e valor. 
//cada um destes objetos deve ser armazenado em um array. 
//Após o usuário decidir não mais informar dados de produto, o programa deve exibir no console a lista com os produtos informados. 
//A lista exibida no console, deve seguir o seguinte formato: nome do produto | quantidade em estoque | valor do produto | categoria

class Produto {
    constructor(nome, quantidade, valor, categoria) {
        this.nomeProduto = nome;
        this.quantidadeEstoque = quantidade;
        this.valorProduto = valor;
        this.categoria = categoria;
    }
}

let produtoUm = {
    "nomeProduto": "Óreo",
    "quantidadeProduto": 50,
    "valorProduto": 2.99,
    "categoria": "Comidas"
}

let produtoDois;
produtoDois = new Produto("Coca-cola", 30, 7.49, "Bebidas");

console.log(produtoDois);