let burgerMenu = document.querySelector('.burger_menu');

burgerMenu.removeEventListener('click', slideMenu);

function slideMenu(){
    burgerMenu.classList.toggle('slide_menu')
}