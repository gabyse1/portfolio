function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-visible');
}

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});

const cards = [
  {
    id: 1,
    imageDesktop: 'images/img-air-pollution.png',
    title: 'Air Pollution',
    shortDescription: `Offers users information on the Air Quality Index (AQI) of the world's cities 
    and the detailed measurement of each polluting substance used to measure said AQI.`,
    longDescription: `Air pollution app offers users information on the Air Quality Index (AQI) of the world's 
    cities using the international standar colors and indexes. The detailed measurement of each polluting substance 
    used to measure said AQI. City location information. The forecast of air pollution for the next 24 hours.
    The forecast of air pollution for the next 5 days. A table with the measurement of each polluting substance.
    Users can search the AQI by entering the city name.`,
    tags: ['JavaScript', 'React', 'Redux', 'SCSS'],
    linkLive: 'https://airpollutiongaby.herokuapp.com/',
    linkSource: 'https://github.com/gabyse1/air-pollution',
  },
  {
    id: 2,
    imageDesktop: 'images/img-snap-budget.png',
    title: 'SnapBudget',
    shortDescription: `A mobile web application where users can manage their budget.`,
    longDescription: `A mobile web application where users can manage their budget. 
    Users can have a list of transactions associated with a category, so that they 
    can see how much money they spent and on what.`,
    tags: ['Ruby on Rails', 'Postgresql', 'CSS'],
    linkLive: 'https://budgetappgaby.herokuapp.com/',
    linkSource: 'https://github.com/gabyse1/budget-app',
  },
  {
    id: 3,
    imageDesktop: 'images/img-bookstore.png',
    title: 'Book Store',
    shortDescription: `A minimum viable product that allows users to add, delete, and list books from a 
    third party API.`,
    longDescription: `Bookstore is a minimum viable product where users visualize a list of books and 
    a representative graph of the reading progress of each one. The users can add to and eliminate books 
    from a third-party API that preserves the books' data.`,
    tags: ['JavaScript', 'React', 'Redux', 'SCSS'],
    linkLive: 'https://gabyse1.github.io/bookstore/',
    linkSource: 'https://github.com/gabyse1/bookstore',
  },
  {
    id: 4,
    imageDesktop: 'images/img-space-travelers.png',
    title: 'Space Travelers',
    shortDescription: `A minimum viable product that offers users information about space travels 
    classified between rockets, dragons, and missions.`,
    longDescription: `The website offers users information about space travels classified between rockets, 
    dragons, and missions, information that is fetched from a third-party API. Users can book and cancel 
    rocket and dragon reservations and also join and leave missions. The Profile page lists all user choices.`,
    tags: ['JavaScript', 'React', 'Redux', 'SCSS'],
    linkLive: 'https://spacetravelsgaby.herokuapp.com/',
    linkSource: 'https://github.com/gabyse1/space-travel',
  },
  {
    id: 5,
    imageDesktop: 'images/img-rent-a-movie.png',
    title: 'Rent a Movie',
    shortDescription: `A website that allows the user to rent movies, make reservations, leave likes, 
    and make comments about them.`,
    longDescription: `A website that allows the user to rent movies, make reservations, leave likes, 
    and make comments about them. An entertaining space to share opinions, and a very useful way to make 
    reservations from anywhere you are without worrying as before due to the closing hours of the movie .`,
    tags: ['JavaScript', 'HTML', 'SCSS', 'Webpack'],
    linkLive: 'https://zhadier.github.io/Rent-A-Movie/',
    linkSource: 'https://github.com/zhadier/Rent-A-Movie',
  },
  {
    id: 6,
    imageDesktop: 'images/img-math-magicians.png',
    title: 'Math Magicians',
    shortDescription: `This Single Page App (SPA) allows users to make simple math calculations and read 
    random math-related quotes. Ideal for math lovers.`,
    longDescription: `This Single Page App (SPA) allows users to make simple math calculations and read 
    random math-related quotes.`,
    tags: ['React', 'JavaScript', 'SCSS', 'Webpack'],
    linkLive: 'https://gabyse1.github.io/math-magicians/',
    linkSource: 'https://github.com/gabyse1/math-magicians',
  },
  {
    id: 7,
    imageDesktop: 'images/img-leaderboard.png',
    title: 'Leaderboard',
    shortDescription: 'This minimalistic design website displays scores submitted by different players.',
    longDescription: `This minimalistic design website displays scores submitted by different players. 
    The user can also create more than a game and submit his scores in all of them.`,
    tags: ['JavaScript', 'HTML', 'SCSS', 'Webpack'],
    linkLive: 'https://gabyse1.github.io/leaderboard/',
    linkSource: 'https://github.com/gabyse1/leaderboard',
  },
  {
    id: 8,
    imageDesktop: 'images/img-todo-list.png',
    title: 'Todo List',
    shortDescription: `A tool that helps to organize your day. It simply lists the things that you need 
    to do and allows you to mark them as complete. `,
    longDescription: `A tool that helps to organize your day. It simply lists the things that you need 
    to do and allows you to mark them as complete. `,
    tags: ['JavaScript', 'HTML', 'SCSS', 'Webpack'],
    linkLive: 'https://gabyse1.github.io/to-do-list',
    linkSource: 'https://github.com/gabyse1/to-do-list',
  },
  {
    id: 9,
    imageDesktop: 'images/img-awesome-books.png',
    title: 'Awesome Books',
    shortDescription: 'A simple website that displays a list of books and allows you to add and remove books from that list.',
    longDescription: 'A simple website that displays a list of books and allows you to add and remove books from that list.',
    tags: ['JavaScript', 'HTML', 'SCSS', 'Webpack'],
    linkLive: 'https://gabyse1.github.io/awesome-books/dist/',
    linkSource: 'https://github.com/gabyse1/awesome-books',
  },
  {
    id: 10,
    imageDesktop: 'images/img-environment-action.png',
    title: 'Environment Action',
    shortDescription: `Website to publicize the early arrival of a new edition of the conference and exhibition 
    that Environment Action organizes every two years.`,
    longDescription: `Website to publicize the early arrival of a new edition of the conference and exhibition 
    that Environment Action organizes every two years.`,
    tags: ['JavaScript', 'HTML', 'SCSS'],
    linkLive: 'https://gabyse1.github.io/environment-action/',
    linkSource: 'https://github.com/gabyse1/repo-capston-project-01',
  },
];

const container = document.querySelector('.works-container');
const works = document.querySelector('#works');

function popUp(cardobject) {
  function listItemsGenerator(arr) {
    let listItems = '';
    arr.forEach((tag) => {
      listItems += `<li class="list-item-text">${tag}</li>`;
    });
    return listItems;
  }

  const popUpBox = document.createElement('div');
  popUpBox.classList.add('popup-box');
  works.appendChild(popUpBox);

  const popUpContent = `<div class="popup-container posts-display">
    <div class="popup-header">
      <p class="post-title mobile-item">${cardobject.title}</p>
      <p class="post-title desktop-item">${cardobject.titleDesktop}</p>
      <button type="button" id="close-button-popup" class="close-button close-button-popup">
        <img src="images/close-icon.svg" alt="close icon" class="close-icon">
      </button>
    </div>
    <ul class="post-tags ul-list horizontal-list">
      ${listItemsGenerator(cardobject.tags)}
    </ul>
    <figure class="post-image">
      <img class="mobile-item" src=${cardobject.imageDesktop} alt="card image">
      <img class="desktop-item" src=${cardobject.imageDesktop} alt="card image">
    </figure>
    <div class="popup-info">
      <p class="post-description description-text">${cardobject.longDescription}</p>
      <div class="popup-buttons">
        <a rel="noopener noreferrer" href= ${cardobject.linkLive} aria-label="See live" target="_blank" class="enable-button post-button">See Live
          <img src="images/see-live-icon.svg" alt="close icon" class="close-icon">
        </a>
        <a rel="noopener noreferrer" href= ${cardobject.linkSource} aria-label="See Source" target="_blank" class="enable-button post-button">See Source
          <img src="images/see-source-icon.svg" alt="close icon" class="close-icon">
        </a>
      </div>
    </div>
  </div>`;

  popUpBox.innerHTML = popUpContent;

  const closeButton = document.querySelector('#close-button-popup');
  closeButton.addEventListener('click', () => {
    works.removeChild(popUpBox);
  });
}

function render() {
  const display = document.createElement('div');
  display.classList.add('posts-display');
  container.appendChild(display);

  const list = document.createElement('div');
  list.classList.add('posts-list');
  container.appendChild(list);

  cards.forEach((cardobject) => {
    const figure = document.createElement('figure');
    figure.classList.add('post-image');

    const mobImg = document.createElement('img');
    mobImg.classList.add('mobile-item');
    mobImg.setAttribute('src', cardobject.imageDesktop);
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
                          <p class="post-title desktop-item">${cardobject.title}</p>
                          <p class="post-description description-text"> ${cardobject.shortDescription} </p>`;
    info.innerHTML = infoContent;

    const tags = document.createElement('ul');
    tags.classList.add('post-tags', 'ul-list', 'horizontal-list');
    cardobject.tags.forEach((tag) => {
      const litag = document.createElement('li');
      litag.classList.add('list-item-text');
      litag.textContent = tag;
      tags.appendChild(litag);
    });
    info.appendChild(tags);

    const seeProject = document.createElement('button');
    seeProject.classList.add('enable-button', 'post-button');
    seeProject.setAttribute('type', 'button');
    seeProject.setAttribute('name', 'button');
    seeProject.textContent = 'See Project';

    seeProject.addEventListener('click', () => {
      popUp(cardobject);
    });

    if (cardobject.id === 1) {
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
    }
  });
}

const contactForm = document.querySelector('#contact-form');
const errorSpan = document.querySelector('.error');
const emailv = document.querySelector('#email');
const inputName = document.querySelector('#inputName');
const inputMessage = document.querySelector('#inputMessage');
let localFormData = {
  name: '',
  email: '',
  message: '',
};

function setDataForm() {
  localFormData = JSON.parse(localStorage.getItem('formData'));
  inputName.value = localFormData.name;
  emailv.value = localFormData.email;
  inputMessage.value = localFormData.message;
}

function populateStorage() {
  localStorage.setItem('formData', JSON.stringify(localFormData));
  setDataForm();
}

function validateEmail() {
  if (emailv.value.trim().match(/[A-Z]/g)) {
    errorSpan.textContent = 'Email field should not have capital letters.';
    errorSpan.classList.add('visible');
    emailv.classList.add('field-error');
    return false;
  }
  return true;
}

if (!localStorage.getItem('formData')) {
  populateStorage();
} else {
  setDataForm();
}

inputName.addEventListener('input', () => {
  localFormData.name = inputName.value;
  populateStorage();
});

emailv.addEventListener('input', () => {
  errorSpan.textContent = '';
  errorSpan.classList.remove('visible');
  emailv.classList.remove('field-error');
  localFormData.email = emailv.value;
  populateStorage();
});

inputMessage.addEventListener('input', () => {
  localFormData.message = inputMessage.value;
  populateStorage();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateEmail()) {
    contactForm.submit();
  }
});

// Create work cards automatically
render();