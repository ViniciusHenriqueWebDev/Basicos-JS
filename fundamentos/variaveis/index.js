//variaveis

let nomeProduto = "Notebook"
let preco = 4998.90
let isDisponivelEstoque = true
//arrays são objetos especiais que podem conter uma lista de valores
let categorias = ["Eletrônicos", "Informática", "Tecnologia"]
//objeto é uma coleção de pares chave-valor
let detalheFabricants = {
    nome: "Dell",
    ano: 2023,
    pais: "Brasil",
}

// Imprima o tipo de cada variável
console.log(typeof nomeProduto) //string
console.log(typeof preco) //number
console.log(typeof isDisponivelEstoque) //boolean
console.log(typeof categorias) //object
console.log(typeof detalheFabricants) //object

let desconto = 0.1 //10% de desconto
precocomDesconto = preco - (preco * desconto)
console.log(precocomDesconto); 
