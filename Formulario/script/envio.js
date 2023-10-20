var parametro = new URLSearchParams(window.location.search)

nome = parametro.get('nome')
email = parametro.get('email')
assunto = parametro.get('assunto')
mensagem = parametro.get('mensagem')

elementoNome=document.createElement('h1')
elementoNome.TextContent = nome

document.getElementById('spanNome').innerHTML = '<h1>' + nome + '</h1>';
document.getElementById('spanEmail').innerHTML = elementoNome
document.getElementById('spanAssunto').innerHTML = assunto
document.getElementById('spanMensagem').innerHTML = mensagem