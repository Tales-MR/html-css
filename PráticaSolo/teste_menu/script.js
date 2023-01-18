let menu_butt   = document.getElementById('butt_menu');
let cont_menu   = document.getElementById('container_menu');

menu_butt.addEventListener('click', exib_menu)

function exib_menu() {
    cont_menu.classList.toggle('fechar');

    cont_menu.style.display = 'block';
}