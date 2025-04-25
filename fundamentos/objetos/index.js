let produto = {
    nome: "Produto 1", 
    preco: 32.12,
    estoque: 23, 
    categorias: ["Categoria 1", "Categoria 2"], 
    fabricante: {
        nome: "TechCorp", 
        country: "Brasil"
    },
    calcularValorTotal: function() {
        return this.preco * this.estoque;
    }
}

console.log("Valor total do produto:", produto.calcularValorTotal());