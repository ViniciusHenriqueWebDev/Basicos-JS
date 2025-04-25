//declara os arrays
let livros = []; 
let usuarios = []; 

function adicionarLivro(titulo, autor, ano, genero){
    const livro = {
        id: livros.length + 1, 
        titulo: titulo, 
        autor: autor, 
        genero: genero,
        disponibilidade: true
    }; 

    livros.push(livro)
    return livro; 
}

function adicionarUsuario(nome) {
    const usuario = {
        id: usuarios.length + 1,
        nome: nome,
        livros_emprestados: [] // inicialmente sem livros
    };
    
    usuarios.push(usuario);
    return usuario;
}

function realizarEmprestimos(idLivro, idUsuario) {
    // Passo 1: Encontrar o livro e o usuario
    //(Como encontrar um elemento pelo id em um array? com find())
    const livro = livros.find(l => l.id === idLivro);
    const usuario = usuarios.find( u => u.id === idUsuario); 

    if(!livro || !usuario){
        console.log("Livro ou usuario não encontrado"); 
        return false; 
    }

    if(!livro.disponibilidade){
        console.log("Livro não disponivel");
        return false;
    }

    if(usuario.livros_emprestados.length >= 3){
        console.log("limite atingido");
        return false; 
    }
    livro.disponibilidade = false; 
    usuario.livros_emprestados.push(idLivro);
    console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}`);
    return true;
}

// Criar alguns livros para teste
const livro1 = adicionarLivro("Dom Quixote", "Miguel de Cervantes", 1605, "Clássico");
const livro2 = adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Fantasia");
const livro3 = adicionarLivro("1984", "George Orwell", 1949, "Ficção Científica");
const livro4 = adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Fábula");

// Criar usuários para teste
const usuario1 = adicionarUsuario("Maria Silva");
const usuario2 = adicionarUsuario("João Pereira");

// Testar diferentes cenários de empréstimo
console.log("\n--- TESTES DE EMPRÉSTIMO ---");

// Teste 1: Empréstimo bem-sucedido
console.log("\nTeste 1: Empréstimo normal");
realizarEmprestimos(livro1.id, usuario1.id);

// Teste 2: Tentativa de emprestar o mesmo livro novamente
console.log("\nTeste 2: Tentativa de emprestar livro indisponível");
realizarEmprestimos(livro1.id, usuario2.id);

// Teste 3: Realizar mais empréstimos para testar o limite
console.log("\nTeste 3: Mais empréstimos para o mesmo usuário");
realizarEmprestimos(livro2.id, usuario1.id);
realizarEmprestimos(livro3.id, usuario1.id);

// Teste 4: Tentar exceder o limite de 3 livros
console.log("\nTeste 4: Tentativa de exceder o limite de 3 livros");
realizarEmprestimos(livro4.id, usuario1.id);

// Verificar o estado final
console.log("\n--- ESTADO FINAL ---");
console.log("Livros do usuário Maria:", usuario1.livros_emprestados);
console.log("Status do livro Dom Quixote:", livro1.disponibilidade ? "Disponível" : "Emprestado");

function devolverLivro(usuarioId, livroId){
    // Encontrar o usuário e o livro
    const usuario = usuarios.find(u => u.id === usuarioId);
    const livro = livros.find(l => l.id === livroId);
    
    // Verificar se existe o livro e o usuário
    if(!livro || !usuario) {
        console.log("Livro ou usuário não encontrado");
        return false;
    }
    
    // Verificar se o livro está na lista de empréstimos do usuário
    const livroIndex = usuario.livros_emprestados.indexOf(livroId);
    if(livroIndex === -1) {
        console.log(`O usuário ${usuario.nome} não possui o livro "${livro.titulo}"`);
        return false;
    }
    
    // Realizar a devolução
    livro.disponibilidade = true;
    usuario.livros_emprestados.splice(livroIndex, 1);
    
    console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}`);
    return true;
}