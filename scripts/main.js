function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-visible');
}

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});