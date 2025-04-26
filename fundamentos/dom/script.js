// Garantir que o DOM está carregado antes de manipulá-lo
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado com sucesso!');

    // 1. Selecionando elementos
    const btnSelecionar = document.getElementById('btn-selecionar');
    const resultadoSelecao = document.getElementById('resultado-selecao');

    btnSelecionar.addEventListener('click', function () {
        // a. Selecionar por ID
        const paragrafo1 = document.getElementById('paragrafo1');

        // b. Selecionar por classe
        const elementosTexto = document.getElementsByClassName('texto');

        // c. Selecionar por tag
        const todosParagrafos = document.getElementsByTagName('p');

        // d. Selecionar com querySelector e querySelectorAll
        const primeiroParagrafo = document.querySelector('p');
        const todosTextos = document.querySelectorAll('.texto');

        // Mostrar resultados
        resultadoSelecao.innerHTML = `
            <p>Elemento selecionado por ID: <strong>${paragrafo1.textContent}</strong></p>
            <p>Elementos com classe "texto": <strong>${elementosTexto.length}</strong></p>
            <p>Total de parágrafos: <strong>${todosParagrafos.length}</strong></p>
        `;

        console.log("Elemento por ID:", paragrafo1);
        console.log("Elementos por classe:", elementosTexto);
        console.log("Elementos por tag:", todosParagrafos);
    });

    // 2. Modificando conteúdo e estilos
    const paragrafoModificavel = document.getElementById('paragrafo-modificavel');
    const btnModificarTexto = document.getElementById('btn-modificar-texto');
    const btnModificarHTML = document.getElementById('btn-modificar-html');
    const btnModificarEstilo = document.getElementById('btn-modificar-estilo');

    // a. Modificar texto com textContent
    btnModificarTexto.addEventListener('click', function () {
        paragrafoModificavel.textContent = "Este texto foi modificado via JavaScript!";
    });

    // b. Modificar HTML com innerHTML
    btnModificarHTML.addEventListener('click', function () {
        paragrafoModificavel.innerHTML = "Este texto tem <strong>formatação em negrito</strong> e <em>itálico</em> via JavaScript!";
    });

    // c. Modificar estilos com style
    btnModificarEstilo.addEventListener('click', function () {
        paragrafoModificavel.style.color = 'blue';
        paragrafoModificavel.style.backgroundColor = '#f0f0f0';
        paragrafoModificavel.style.padding = '10px';
        paragrafoModificavel.style.borderRadius = '5px';
        paragrafoModificavel.style.border = '1px solid #ccc';
    });

    const paragrafoClasses = document.getElementById('paragrafo-classes');
    const btnAdicionarClasse = document.getElementById('btn-adicionar-classe');
    const btnRemoverClasse = document.getElementById('btn-remover-classe');
    const btnAlternarClasse = document.getElementById('btn-alternar-classe');

    btnAdicionarClasse.addEventListener('click', function(){
        paragrafoClasses.classList.add('destacado'); 
        console.log("Classe adicionada");
    });
    btnRemoverClasse.addEventListener('click', function(){
        paragrafoClasses.classList.remove('destacado')
        console.log("Classe removida");
    });
    btnAlternarClasse.addEventListener('click', function(){
        paragrafoClasses.classList.toggle('destacado'); 
        console.log(`Classe ${paragrafoClasses.classList.contains('destacado') ? 'adicionada' : 'removida'}`);
    })

    const containerElementos = document.getElementById('container-elementos');
    const btnCriar = document.getElementById('btn-criar');
    const btnRemover = document.getElementById('btn-remover');
    let contador = 0;

    function atualizarVisibilidadeBotaoRemover(){
        const elementos = containerElementos.querySelectorAll('.elemento-criado'); 
        if(elementos.length > 0){
            btnRemover.disabled = false;  
        }else{
            btnRemover.disabled = true; 
        }
    }

    atualizarVisibilidadeBotaoRemover(); 

    btnCriar.addEventListener('click', function(){
        const novoElemento = document.createElement('div'); 
        
        contador++ 
        novoElemento.textContent = `Elemento ${contador}`;
        //setAtribute 1° define tipo depois nome; 
        //pode ser class ou id 
        novoElemento.setAttribute('class', 'elemento-criado')
        novoElemento.style.padding = '8px';
        novoElemento.style.margin = '5px 0';
        novoElemento.style.backgroundColor = '#e0e0e0';
        novoElemento.style.borderRadius = '3px';
        
        //Adicionar ao DOM
        containerElementos.appendChild(novoElemento); 
        console.log("Elemento criado");
        atualizarVisibilidadeBotaoRemover(); 
    });

    btnRemover.addEventListener('click', function(){
        const elementos = containerElementos.querySelectorAll('.elemento-criado');
        if(elementos.length > 0){
            containerElementos.removeChild(elementos[elementos.length -1]); 
            console.log("Elemento removido"); 
            if(elementos.length === 1){
                atualizarVisibilidadeBotaoRemover();
            }
        }else{
            console.log("Não há elementos para remover");
        }
    });

});