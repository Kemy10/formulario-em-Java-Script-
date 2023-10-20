const meuFormulario = document.getElementById('meuFormulario');

 meuFormulario.addEventListener('submit', function(event){
 event.preventDefault()

 var nome = document.getElementById('nome').value
 var telefone =  document.getElementById('telefone').value
 var email =  document.getElementById('email').value
 var assunto =  document.getElementById('assunto').value
 var mensagem =  document.getElementById('mensagem').value

var nomeCodificado = encodeURIComponent(nome)
var telfefoneCodificado = encodeURIComponent(telefone)
var emailCodificado = encodeURIComponent (email)
var assuntoCodificado = encodeURIComponent (assunto)
var mensagemCodificado = encodeURIComponent (mensagem)

window.location.href = 'envio.html' + 
'?nome=' + nomeCodificado +
'&telefone=' + telfefoneCodificado +
'&email=' + emailCodificado + 
'&assunto=' + assuntoCodificado + 
'&mensagem=' + mensagemCodificado
});