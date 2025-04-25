// Adicione no topo do arquivo buscarLivros.js
let livros = [
    { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Clássico" },
    { id: 2, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia" },
    { id: 3, titulo: "1984", autor: "George Orwell", genero: "Ficção Científica" },
    { id: 4, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Fábula" }
  ];

function buscarLivros(textoBusca, tipoBusca) {
    // Converter para minúsculo para busca case-insensitive
    const textoMinusculo = textoBusca.toLowerCase();
    let resultado = [];
    
    // Usar switch case em vez de múltiplos if/else
    switch(tipoBusca.toLowerCase()) {
        case "titulo":
            resultado = livros.filter(livro => 
                livro.titulo.toLowerCase().includes(textoMinusculo)
            );
            break;
            
        case "autor":
            resultado = livros.filter(livro => 
                livro.autor.toLowerCase().includes(textoMinusculo)
            );
            break;
            
        case "genero":
            resultado = livros.filter(livro => 
                livro.genero.toLowerCase().includes(textoMinusculo)
            );
            break;
            
        case "todos":
            resultado = livros.filter(livro => 
                livro.titulo.toLowerCase().includes(textoMinusculo) ||
                livro.autor.toLowerCase().includes(textoMinusculo) ||
                livro.genero.toLowerCase().includes(textoMinusculo)
            );
            break;
            
        default:
            console.log("Tipo de busca inválido. Use 'titulo', 'autor', 'genero' ou 'todos'.");
            return [];
    }
    
    // Informar o resultado
    console.log(`Foram encontrados ${resultado.length} livros na busca por '${textoBusca}' em ${tipoBusca}`);
    
    // Retornar os livros encontrados
    return resultado;
}

// Testes da função
console.log("\n--- TESTES DE BUSCA ---");

console.log("\nBusca por título 'Harry':");
const resultadoTitulo = buscarLivros("Harry", "titulo");
resultadoTitulo.forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.autor})`);
});

console.log("\nBusca por autor 'Cervantes':");
const resultadoAutor = buscarLivros("Cervantes", "autor");
resultadoAutor.forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.autor})`);
});

console.log("\nBusca em todos os campos 'Pequeno':");
const resultadoTodos = buscarLivros("Pequeno", "todos");
resultadoTodos.forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.autor})`);
});