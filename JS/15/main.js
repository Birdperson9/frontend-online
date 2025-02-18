// 1. onclick

// Задача: Створіть кнопку та елемент Р з текстом, при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір.

let colorBtn = document.querySelector('.color-change-btn');
let colorP = document.querySelector('.color-change-p');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

colorBtn.onclick = () => {
  colorP.style.color = getRandomColor();
};

// 2. ondblclick

// Задача: Створіть елемент який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

let scaleBtn = document.querySelector('.scale-btn');

scaleBtn.ondblclick = () => {
  let width = scaleBtn.offsetWidth;
  let height = scaleBtn.offsetHeight;

  scaleBtn.style.width = `${width * 2}px`;
  scaleBtn.style.height = `${height * 2}px`;
};

// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмістіть лічільник: 0, при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let counterBtn = document.querySelector('.counter-btn');
let counterP = document.querySelector('.counter-p');
let counter = 0;

function incrementCounter() {
  counter++;
  counterP.innerText = `Counter: ${counter}`;

  if (counter >= 10) {
    counterBtn.removeEventListener('click', incrementCounter);
  }
}

counterBtn.addEventListener('click', incrementCounter);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки.

let removeEl = document.querySelectorAll('.remove-on-click');

removeEl.forEach((e) => {
  e.addEventListener('click', () => {
    e.remove();
  });
});

// 5.event.target

// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.

// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік.

let blockEl = document.querySelector('.blockContainer');

blockEl.addEventListener('click', (e) => {
  alert(`${e.target.className}`);
});
