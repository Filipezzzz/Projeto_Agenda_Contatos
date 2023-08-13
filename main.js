const forms = document.getElementById('contatos');
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById("numero-contato");
const corpoDaTabela = document.querySelector('tbody');
let linhas = '';





forms.addEventListener('submit', function(e){
e.preventDefault();


    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";
    linhas += linha;


    corpoDaTabela.innerHTML = linhas;




    inputNomeContato.value = '';
    inputNumeroContato.value = '';




});


