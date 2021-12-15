function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-visible');
}

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});

let cards = [];
let idCount = 0;

function createCard(imageMobile, title, shortDescription,
  longDescription, tags, linkLive, linkSource) {
  counter += 1;
  return {
    id: `card-${counter}`,
    image,
    title,
    shortDescription,
    longDescription,
    tags,
    linkLive,
    linkSource,
    desktop,
  };
}