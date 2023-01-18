//Responsividade com JS - TESTE

//Variável referente ao MENU do header
var menu = document.querySelector('nav#menu')
var tela = document.querySelector('body')

tela.addEventListener('load', responsiv)

//Detectando redimensionamento
function responsiv() {
    let tamanho = Number(tela.clientWidth)

    if (tamanho < 630) {
        menu.style.display = 'none';
    }   

    window.alert('rodei')
}
