function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-visible');
}

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});

let cards = [];
let idCount = 0;

function createCard(imageMobile, imageDesktop, title, titleDesktop, shortDescription,
  longDescription, tags, linkLive, linkSource) {
  idCount += 1;
  return {
    id: `card-${idCount}`,
    imageMobile,
    imageDesktop,
    title,
    titleDesktop,
    shortDescription,
    longDescription,
    tags,
    linkLive,
    linkSource,
  };
}

const postsDisplay = createCard('images/img-placeholder-display.png', 'images/img-placeholder-display.png', 'Multi-Post Stories',
'Multi-Post Stories', `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
took a standar dummy text.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
but also the leap into electronic typesetting, remaining essent`, ['css', 'html', 'bootstrap', 'Ruby'],
'https://gabyse1.github.io/repo-portfolio', 'https://github.com/gabyse1/repo-portfolio');
cards.push(postsDisplay);

const special = createCard('images/img-placeholder-articles.png', 'images/img-placeholder-articles-01.png', 'Profesional Art Printing Data',
'Profesional Art Printing Data', `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
'https://gabyse1.github.io/repo-portfolio', 'https://github.com/gabyse1/repo-portfolio');
special.id = 'special';
cards.push(special);

const titles = ['Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data'];

let index = 2;

while (idCount <= 5) {
  if (index > 4){
    index = 2;
  }
  const other = createCard('images/img-placeholder-articles.png', `images/img-placeholder-articles-0${index}`, 'Profesional Art Printing Data', 
  `${titles[index]}`,
    `A daily selection of privately personalized reads; no accounts or sign-ups required. 
  has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
 'https://gabyse1.github.io/repo-portfolio', 'https://github.com/gabyse1/repo-portfolio');
  cards.push(other);
  index += 1;
}

const container = document.querySelector('.works-container');

function render () {
  cards.forEach( cardobject =>  {
    if (cardobject.id == 'card-1') {
      const Display = document.createElement('div');
      Display.classList.add('posts-display');
      container.appendChild(Display);
    }
    else {
      const list = document.createElement('div');
      list.classList.add();
    }
  })
}