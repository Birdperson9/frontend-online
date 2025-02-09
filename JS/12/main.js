// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою

// getElementById

console.log('== getElementById ==');

let headerById = document.getElementById('header');
console.log(headerById);

let sectionById = document.getElementById('section');
console.log(sectionById);

let divById = document.getElementById('header-div');
console.log(divById);

// getElementsByClassName

console.log('== getElementsByClassName ==');

let headerByClassName = document.getElementsByClassName('header-nav');
console.log(headerByClassName);

let sectionByClassName = document.getElementsByClassName('section-card');
console.log(sectionByClassName);

let divByClassName = document.getElementsByClassName('div');
console.log(divByClassName);

// getElementsByTagName

console.log('== getElementsByTagName ==');

let headerByTagName = document.getElementsByTagName('header');
console.log(headerByTagName);

let sectionByTagName = document.getElementsByTagName('section');
console.log(sectionByTagName);

let divByTagName = document.getElementsByTagName('div');
console.log(divByTagName);

// Створіть список ul з 5 елементами li всередині.

// За допомогою querySelector виберіть:

// - перший елемент списку

// - останній елемент списку

// - 3 елемент списку

console.log('== querySelector ==');

let firstUl = document.querySelector('ul li');
console.log(firstUl);

let thirdUl = document.querySelector('ul li:nth-child(3)');
console.log(thirdUl);

let lastUl = document.querySelector('ul li:last-child');
console.log(lastUl);

// За допомогою querySelectorAll

// - всі елементи li в списку

// - конвертуйте вибрані елменти в массив

console.log('== querySelectorAll ==');

let [...liElements] = document.querySelectorAll('li');
console.log(liElements);

// Створіть на сторінці елемент який вибирається ціми селекторами

let listItems = document.querySelectorAll('ul.nav > li');
console.log(listItems);

let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItem);
