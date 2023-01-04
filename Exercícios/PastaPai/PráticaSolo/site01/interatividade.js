//Responsividade com JS - TESTE

//Variável referente ao MENU do header
var menu = document.querySelector('nav#menu')

var tela = document.querySelector('body')

//Detectando redimensionamento
tela.addEventListener('online', controle)

function controle() {
    tamanho = tela.clientWidth

    if (tamanho < 630) {
        menu.style.display = 'none';
    }
}