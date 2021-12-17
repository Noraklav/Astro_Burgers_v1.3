const iconoMenu = document.querySelector("#icono-menu");
const menu = document.querySelector("#menu");

iconoMenu.addEventListener('click', (e) =>{
    // toggle: Mostrar un div mientras se oculta otro
    // Alternar estilos para el menu y el body
    menu.classList.toggle('active');
    document.body.toggle('opacity');
})