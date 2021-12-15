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

while (idCount <= 6) {
  if (index > 4) {
    index = 2;
  }
  const other = createCard('images/img-placeholder-articles.png', `images/img-placeholder-articles-0${index}.png`, 'Profesional Art Printing Data',
    `${titles[index - 2]}`,
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

function render() {
  const display = document.createElement('div');
  display.classList.add('posts-display');
  container.appendChild(display);

  const list = document.createElement('div');
  list.classList.add('posts-list');
  container.appendChild(list);

  cards.forEach(cardobject => {

    const figure = document.createElement('figure');
    figure.classList.add('post-image');

    const mobImg = document.createElement('img');
    mobImg.classList.add('mobile-item');
    mobImg.setAttribute('src', cardobject.imageMobile);
    mobImg.setAttribute('alt', 'card image');
    figure.appendChild(mobImg);

    const desktopImg = document.createElement('img');
    desktopImg.classList.add('desktop-item');
    desktopImg.setAttribute('src', cardobject.imageDesktop);
    desktopImg.setAttribute('alt', 'card image');
    figure.appendChild(desktopImg);

    // card information content
    const info = document.createElement('div');
    info.classList.add('post-information');
    const infoContent = ` <p class="post-title mobile-item">${cardobject.title}</p>
                          <p class="post-title desktop-item">${cardobject.titleDesktop}</p>
                           <p class="post-description description-text"> ${cardobject.shortDescription} </p>`;
    info.innerHTML = infoContent;

    const tags = document.createElement('ul');
    tags.classList.add('post-tags' , 'ul-list', 'horizontal-list');
    cardobject.tags.forEach( tag => {
      const litag = document.createElement('li');
      litag.classList.add('list-item-text');
      litag.textContent = tag;
      tags.appendChild(litag);
    })
    info.appendChild(tags);

    const seeProject = document.createElement('button');
    seeProject.classList.add('enable-button', 'post-button');
    seeProject.setAttribute('type', 'button');
    seeProject.setAttribute('name', 'button');
    seeProject.textContent = 'See Project';

    if (cardobject.id == 'card-1') {
      display.appendChild(figure);
      display.appendChild(info);
      info.appendChild(seeProject);
    } else {
      const card = document.createElement('article');
      card.classList.add('post-article');
      
      list.appendChild(card);
      card.appendChild(figure);
      
      const postcaption = document.createElement('figcaption');
      postcaption.classList.add('post-caption');
      postcaption.appendChild(info);
      card.appendChild(postcaption);
      postcaption.appendChild(seeProject);

      seeProject.classList.add('mobile-item');
      
      if (cardobject.id === 'special') {
        card.classList.add('active-article');
        info.classList.add('mobile-item');
        seeProject.classList.remove('mobile-item');
      }
    }
  })
}
const works = document.querySelector('#works');
function popUp (cardobject) {
  const popUpBox = document.createElement('div');
  popUpBox.classList.add('popup-box');
  works.appendChild(popUpBox); 
}

render();