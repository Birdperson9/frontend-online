// 1. Створіть сторінку та підключіть до неї js

// 2. За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

let bodyEl = document.querySelector('body');
let headerEl = document.createElement('header');

bodyEl.appendChild(headerEl);

headerEl.innerHTML = 'Hello';
headerEl.style.padding = '50px';
headerEl.style.backgroundColor = 'yellow';
headerEl.style.textAlign = 'center';

// 3. Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.

const menuData = [
  { name: 'Головна', url: '/' },

  { name: 'Про нас', url: '/about' },

  { name: 'Послуги', url: '/services' },

  { name: 'Контакти', url: '/contacts' },
];

for (let element of menuData) {
  let linkEl = document.createElement('a');

  headerEl.appendChild(linkEl);

  linkEl.innerHTML = element.name;
  linkEl.setAttribute('href', element.url);
}

// 4. Додайте тегам А що створені в header  атрибут target з властивістю _blank

let linkElem = document.querySelectorAll('a');

linkElem.forEach((element) => {
  element.setAttribute('target', '_blank');
});

// 5. Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let divContainer = document.createElement('div');
bodyEl.appendChild(divContainer);

divContainer.className = 'container';
divContainer.style.display = 'flex';
divContainer.style.flexWrap = 'wrap';

for (let i = 0; i < 50; i++) {
  let divEl = document.createElement('div');
  divContainer.appendChild(divEl);

  divEl.style.borderRadius = '50%';
  divEl.style.width = '50px';
  divEl.style.height = '50px';
  divEl.style.backgroundColor = 'red';
}

// 6. Додайте всім стврореним 50 div елементам класс circle-elemt

let divEl = document.querySelectorAll('.container > div');

divEl.forEach((element) => {
  element.classList.add('circle-element');
});

// Додаткове завдання: спробуйте зробити  завдання 5 так щоб в кожного div елемента був унікальний бекграунд

function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

divEl.forEach((element) => {
  element.style.backgroundColor = getRandomColor();
});
