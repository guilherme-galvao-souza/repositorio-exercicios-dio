let numeroAtualHTML = document.getElementById('numeroAtual')
let numeroAtual = 0
function adiciona(){
    numeroAtualHTML.innerHTML = ++numeroAtual
}
function diminui(){
    numeroAtualHTML.innerHTML = --numeroAtual
}