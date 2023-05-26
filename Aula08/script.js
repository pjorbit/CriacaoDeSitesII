let buscar = document.getElementById("buscar");
let limpar = document.getElementById("limpar");
let containerProdutos = document.getElementById("produtos");

limpar.style.display = 'none';

buscar.addEventListener("click", () => {
    fetch("https://dummyjson.com/products")
        .then(resposta => resposta.json())
        .then(data => {

            buscar.style.display = 'none';
            limpar.style.display = 'block';

            const produtos = data;
            produtos.products.forEach(produto => {
                //cria o elemento
                const card = document.createElement("div");
                //adiciona a classe css
                card.classList.add("card");
        
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("image");
                const img = document.createElement("img");
                img.src = produto.images[0];
                imageContainer.appendChild(img);
                card.appendChild(imageContainer);
        

                const precoContainer = document.createElement("div");
                precoContainer.classList.add("preco");

                const nome = document.createElement("p");
                nome.classList.add("nome");
                nome.textContent = produto.title;
                precoContainer.appendChild(nome);

                const valor = document.createElement("h6");
                valor.classList.add("valor");
                valor.textContent = `R$ ${produto.price}`;
                precoContainer.appendChild(valor);
                card.appendChild(precoContainer);

                const btnContainer = document.createElement("div");
                btnContainer.classList.add("comprar");
                const btn = document.createElement("button");
                btn.textContent = "Comprar";
                btnContainer.appendChild(btn);
                card.appendChild(btnContainer);
        
                containerProdutos.appendChild(card);
            })
        })
        .catch(error => {
            console.log(`Deu ruim: ${error}`)
        })
})

limpar.addEventListener("click", () => {
    containerProdutos.innerHTML = '';
    buscar.style.display = 'block';
    limpar.style.display = 'none';
})