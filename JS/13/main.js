// {/* <ul id="tree">

// <li>Елемент 1

//     <ul>

//         <li>Під-елемент 1.1</li>

//         <li>Під-елемент 1.2

//             <ul>

//                 <li>Під-під-елемент 1.2.1</li>

//                 <li>Під-під-елемент 1.2.2</li>

//             </ul>

//         </li>

//         <li>Під-елемент 1.3</li>

//     </ul>

// </li>

// <li>Елемент 2

//     <ul>

//         <li>Під-елемент 2.1</li>

//         <li>Під-елемент 2.2</li>

//     </ul>

// </li>

// <li>Елемент 3</li>

// </ul>

// 1. Створіть сторінку в яку розмістіть список що розміщений вище, підключіть js файл до сторінки і виконайте такі завдання:

// - виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість;

// - виведіть в консоль кількість елементів 2 рівня вкладення.

console.log('== Task 1 ==');

let treeElements = document.querySelector('#tree');
let firstLevelElements = treeElements.children;
console.log(`Кількість елементів першого рівня: ${firstLevelElements.length}`);

let secondLevelCount = 0;

for (let element of firstLevelElements) {
  let nestedList = element.querySelector('ul');

  if (nestedList) {
    secondLevelCount += nestedList.children.length;
  }
}
console.log(`Кількість елементів другого рівня: ${secondLevelCount}`);

// <table>

// <thead>

//     <tr>

//         <th>

//             title

//         </th>

//         <th>

//             year

//         </th>

//         <th>

//             rating

//         </th>

//     </tr>

// </thead>

// </table>

// 2. Пройдіть по масиву і зробіть заповнення таблиці даними з масива

console.log('== Task 2 ==');

const booksArray = [
  {
    title: 'Пригоди Аліси в Країні Див',

    year: 1865,

    rating: 4.5,
  },

  {
    title: '1984',

    year: 1949,

    rating: 4.8,
  },

  {
    title: 'Гаррі Поттер і філософський камінь',

    year: 1997,

    rating: 4.7,
  },
];

let table = document.querySelector('table');

function createTableRow(book) {
  let row = document.createElement('tr');
  let titleCell = document.createElement('td');
  let yearCell = document.createElement('td');
  let ratingCell = document.createElement('td');

  titleCell.textContent = book.title;
  yearCell.textContent = book.year;
  ratingCell.textContent = book.rating;

  row.appendChild(titleCell);
  row.appendChild(yearCell);
  row.appendChild(ratingCell);

  return row;
}

for (let book of booksArray) {
  table.appendChild(createTableRow(book));
}

// 3.  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.

const elementsArray1 = [
  { tag: 'p', text: 'Елемент 1' },

  { tag: 'div', text: 'Елемент 2' },

  { tag: 'span', text: 'Елемент 3' },
];

function createElement(obj) {
  let element = document.createElement(obj.tag);
  element.textContent = obj.text;
  return element;
}

let container1 = document.querySelector('.container1');
elementsArray1.forEach((elementObject) => {
  let newEl = createElement(elementObject);
  container1.appendChild(newEl);
});

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.

// Пройдіть циклом по масиву і для кожного об'єкту застосуйте створену функцію.

// 4. Створіть блок контейнер та перебераючи масив створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером

const elementsArray2 = [
  { text: 'Елемент 1', usePrepend: true },

  { text: 'Елемент 2', usePrepend: false },

  { text: 'Елемент 3', usePrepend: true },
];

elementsArray2.forEach((el) => {
  let container2 = document.querySelector('.container2');
  let newElement = document.createElement('p');
  newElement.textContent = el.text;

  if (el.usePrepend) {
    container2.prepend(newElement);
  } else {
    container2.appendChild(newElement);
  }
});
