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

// d) Verifique se todos os alunos foram aprovados; 
let todosAprovados = alunos.every(aluno => aluno.nota >= 7); 
console.log("Todos os alunos foram aprovados?", todosAprovados ? "Sim" : "Não");


// e) Verifique o aluno com a maior nota

let alunoMaiorNota = alunos.reduce((melhorAluno, alunoAtual) => {
    //melhorAluno = o aluno com maior nota encontrado até agora; 
    //alunoAtual = o aluno que estamos analisando neste momento; 

    //se a nota do aluno atual for maior que a nota do melhor aluno
    //o aluno atual será o novo melhor aluno; 
    if(alunoAtual.nota > melhorAluno.nota){
        return alunoAtual; 
    } else{
        return melhorAluno
    }
},alunos[0]); //Começamos considerando o primeiro aluno como o melhor ou seja o aluno 0
console.log("Aluno com maior nota:", alunoMaiorNota.nome, "com nota", alunoMaiorNota.nota);


// f) lista os alunos pela nota crescente/decrescente
let alunosDecrescente = alunos.sort((a,b) => b.nota - a.nota); 
console.log("Alunos ordenados por nota (decrescente):", alunosDecrescente);

let alunosCrescente = alunos.sort((a,b) => a.nota - b.nota); 
console.log("Alunos ordenados por nota crescente", alunosCrescente); 