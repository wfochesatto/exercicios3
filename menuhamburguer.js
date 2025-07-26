
const btnHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navegacao ul');

btnHamburger.addEventListener('click', () => {
  menu.classList.toggle('mostrar');
});
