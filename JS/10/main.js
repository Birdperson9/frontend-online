// Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt, а результат гри виводити використовуючи alert

console.log('== Камінь, ножниці, папір ==');

function startGame() {
  let options = ['камінь', 'ножниці', 'папір'];
  let computerChoice = options[Math.floor(Math.random() * 3)];

  let userChoice = prompt('Виберіть одне з значень: камінь, ножниці, папір')
    .trim()
    .toLowerCase();

  if (!options.includes(userChoice)) {
    alert('Виберіть один з запропонованих варіантів');
    return;
  }

  if (computerChoice === userChoice) {
    alert('Hічия!');
  } else if (
    (userChoice === 'камінь' && computerChoice === 'ножниці') ||
    (userChoice === 'ножниці' && computerChoice === 'папір') ||
    (userChoice === 'папір' && computerChoice === 'камінь')
  ) {
    alert(`Перемога! my ${userChoice} vs ${computerChoice}`);
  } else {
    alert('Програш, спробуйте ще!');
  }
}
startGame();

// Завдання для Math.min та Math.max:

// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.

// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

console.log('== min max ==');

let minNumber = (firstNumber, secondNumber) => Math.min(firstNumber, secondNumber);

console.log(`min number is ${minNumber(20, 1)}`);

let maxNumber = (firstNumber, secondNumber) => Math.max(firstNumber, secondNumber);

console.log(`max number is ${maxNumber(20, 1)}`);

// Завдання для Math.pow:

// Створіть функцію, яка підносить число до заданого ступеня.

// Виведіть результат у консоль.

console.log('== Math.pow ==');

let powFunction = (num, pow) => Math.pow(num, pow);

console.log(powFunction(5, 2));

// Завдання для Math.floor та Math.ceil:

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

console.log('== Math.floor та Math.ceil ==');

let floorFunction = (num) => Math.floor(num);

console.log(floorFunction(5.3));

let ceilFunction = (num) => Math.ceil(num);

console.log(ceilFunction(6.2));

// Завдання для Date.getYear:

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік

// Виведіть результат у консоль.

console.log('== Date.getYear ==');

let showUserAge = () => {
  let userAge = Number(prompt('Enter your age'));

  let userBirthYear = new Date().getFullYear() - userAge;

  console.log(`Your birth year is ${userBirthYear}`);
};

showUserAge();

// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.

// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.

// Виведіть результат у консоль.

console.log('== Date.toLocaleString ==');

let currentDate = new Date().toLocaleString();

console.log(currentDate);

// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.

// Використайте метод split, щоб розбити рядок на масив слів.

// Виведіть отриманий масив у консоль у верхньому регістрі.

console.log('== String.split ==');

let dataString = 'рядок який містить слова розділені пробілами';

let stringArray = dataString.toUpperCase().split(' ');

console.log(stringArray);
