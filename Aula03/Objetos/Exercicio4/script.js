//Faça um programa que solicite que o usuário informe os dados de um série de produtos. 
//Para cada produto informado deve ser criado um objeto com as propriedades: descrição, 
//estoque, categoria e valor. cada um destes objetos deve ser armazenado em um array. 
//Após o usuário decidir não mais informar dados de produto, o programa deve exibir no console 
//a lista com os produtos informados. A lista exibida no console, deve seguir o seguinte formato: 
// nome do produto | quantidade em estoque | valor do produto | categoria

class Produto {
    constructor(
    descricao,
    estoque,
    categoria,
    valor) {
        this.descricao = descricao;
        this.estoque = estoque;
        this.categoria = categoria;
        this.valor = valor;
    }
}

let produtos = [];

do{
    let produto = new Produto();
    produto.descricao = prompt('Descrição: ');
    produto.estoque = prompt('Estoque: ');
    produto.categoria = prompt('Categoria: ');
    produto.valor = prompt('Valor: ');
    
    produtos.push(produto);

} while(confirm('Continuar?'));

produtos.forEach(
    (produto) => {
        console.log(`${produto.descricao} | ${produto.estoque} | ${produto.categoria} | ${produto.valor}`)
    }
)
