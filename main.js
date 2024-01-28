
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt= "Emoji celebrando" /> '
const imgReprovado = '<img src="./imagens/reprovado.png" alt= "Emoji triste" /> '

const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado" > Aprovado </span>';
const spanReprovado = '<span class="resultado reprovado" > Reprovado </span>';
const notaminima = parseFloat(prompt("Digite a nota minima"));

let linhas = '';

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    adicionarlinha ();
    atualizatabela ();
    atualizamediafinal ();

    

});

function adicionarlinha () {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade: ${inputNomeAtividade.value} já foi inserida `);
    } else {
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=notaminima ? imgAprovado : imgReprovado} </td>`;
    linha += `</tr>`;
    
    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizatabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizamediafinal(){
    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >=notaminima ? spanAprovado : spanReprovado;
    
    console.log (media);
    
}

function calculamediafinal () {

    let somadasnotas = 0;

    for (let i=0; i < notas.length; i++) {
        somadasnotas += notas [i];
    }

    return somadasnotas / notas.length;
}