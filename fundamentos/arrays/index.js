let alunos = [
    {
        nome: 'Ana',
        nota: 8,
    },
    {
        nome: 'Pedro',
        nota: 5,
    },
    {
        nome: 'João',
        nota: 7,
    } 
]; 

// a) Filtre os alunos aprovados (nota >= 7)
let alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos aprovados:", alunosAprovados.length);

// b) Crie um array apenas com o nome dos alunos
let nomeAlunos = alunos.map(aluno => aluno.nome);
    console.log("nome dos alunos: ", nomeAlunos);

// c) Calcule a média geral das notas
let somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
let mediaNotas = somaNotas / alunos.length;
console.log("Média das notas:", mediaNotas);