// Завдання 'onMouseOver' і 'onMouseOut':

// Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю

// область.

let colorChangeEl = document.querySelector('.colorChange');

colorChangeEl.addEventListener('mouseover', () => {
  colorChangeEl.style.background = 'red';
});

colorChangeEl.addEventListener('mouseout', () => {
  colorChangeEl.style.background = 'white';
});

// Завдання 'onContextMenu':

// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру",

// "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

let customMenuEl = document.querySelector('.customMenu');
let textEl = document.querySelector('.textBlock');

textEl.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  customMenuEl.style.top = `${e.clientY}px`;
  customMenuEl.style.left = `${e.clientX}px`;
  customMenuEl.style.display = 'block';
});

document.addEventListener('click', function () {
  customMenuEl.style.display = 'none';
});

customMenuEl.addEventListener('click', function (e) {
  if (e.target.innerText == 'Вирівняти текст по центру') {
    textEl.style.textAlign = 'center';
    textEl.style.alignItems = 'center';
  } else if (e.target.innerText == 'Вирівняти текст по правому краю') {
    textEl.style.textAlign = 'right';
    textEl.style.alignItems = 'center';
  } else if (e.target.innerText == 'Вирівняти текст по лівому краю') {
    textEl.style.textAlign = 'left';
    textEl.style.alignItems = 'left';
  } else if (e.target.innerText == 'Приховати елемент') {
    textEl.style.display = 'none';
  }
});

// Завдання 'onMouseOver' і 'onMouseOut':

// Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується. Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або

// стилю.

let imageEl = document.querySelector('.duck-img');

imageEl.addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.2)';
  this.style.transition = 'transform 0.4s ease';
  this.style.boxShadow = '0 0 10px rgba(0,0,0, 0.5)';
});

imageEl.addEventListener('mouseout', function () {
  this.style.transform = 'none';
  this.style.boxShadow = 'none';
});

// Завдання 'keyup':

// Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

let gameArea = document.querySelector('.gameArea');
let gameObj = document.querySelector('.gameObject');
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function (e) {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
    e.preventDefault();

    switch (e.key) {
      case 'ArrowUp':
        posY = Math.max(0, posY - 10);
        break;
      case 'ArrowDown':
        posY = Math.min(gameArea.clientHeight - gameObj.clientHeight, posY + 10);
        break;
      case 'ArrowLeft':
        posX = Math.max(0, posX - 10);
        break;
      case 'ArrowRight':
        posX = Math.min(gameArea.clientWidth - gameObj.clientWidth, posX + 10);
        break;
    }
    gameObj.style.top = `${posY}px`;
    gameObj.style.left = `${posX}px`;
  }
});

// Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню,

// використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

let menu = document.querySelector('.menu');
let items = Array.from(menu.children);

document.addEventListener('keyup', function (e) {
  if (e.key == 'm' || e.key === 'M') {
    menu.style.display = 'block';
    let count = -1;
    document.addEventListener('keydown', function (e) {
      if (e.key == 'ArrowUp') {
        count--;
        if (count < 0) count = items.length - 1;
      }
      if (e.key == 'ArrowDown') {
        count++;
        if (count > items.length - 1) count = 0;
      }
      items.forEach((item) => item.classList.remove('active'));
      items[count].classList.add('active');
    });
  }
});

document.addEventListener('keyup', function (e) {
  if (e.key == 'c' || e.key === 'C') {
    menu.style.display = 'none';
  }
});

// Додаткове завдання 'onMouseDown' і 'onMouseUp':

// Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події натискання та відпускання кнопки миші.

let dragEl = document.querySelector('.dragItem');
let gameDragArea = document.querySelector('.gameDragArea');

let offsetX = 0,
  offsetY = 0,
  isDragging = false;

dragEl.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - dragEl.offsetLeft;
  offsetY = e.clientY - dragEl.offsetTop;
  dragEl.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    let maxX = gameArea.clientWidth - dragEl.clientWidth;
    let maxY = gameArea.clientHeight - dragEl.clientHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    dragEl.style.left = `${newX}px`;
    dragEl.style.top = `${newY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  dragEl.style.cursor = 'grab';
});
