// push:
console.log('== push ==');

// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let pushArr = new Array();

pushArr.push(2);
pushArr.push(50);
pushArr.push('Hello');

console.log(pushArr);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let pushFuncArr = [1, 2, 3, 4, 5];

let pushFunction = (arr, value) => arr.push(value);

pushFunction(pushFuncArr, 'Hello');

console.log(pushFuncArr);

// pop:
console.log('== pop ==');

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let popArr = [1, 2, 3, 4, 5, 6, 'last'];

popArr.pop();

console.log(popArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let popFuncArr = [1, 2, 3, 4, 5];

let popFunction = (arr) => arr.pop();

popFunction(popFuncArr);

console.log(popFuncArr);

// unshift:
console.log('== unshift ==');

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let unshiftArr = [1, 2, 3, 4, 5];

unshiftArr.unshift(2);
unshiftArr.unshift(50);
unshiftArr.unshift('Hello');

console.log(unshiftArr);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let unshiftFuncArr = [1, 2, 3, 4, 5];

let unshiftFunction = (arr, value) => arr.unshift(value);

unshiftFunction(unshiftFuncArr, 'Hello');

console.log(unshiftFuncArr);

// shift:
console.log('== shift ==');

// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let shiftArr = [1, 2, 3, 4, 5, 6];

shiftArr.shift();

console.log(shiftArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let shiftFuncArr = [1, 2, 3, 4, 5];

let shiftFunction = (arr) => arr.shift();

shiftFunction(shiftFuncArr);

console.log(shiftFuncArr);

// fill:
console.log('== fill ==');

// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

let fillArr = [1, 2, 3, 4, 5, 6];

fillArr.fill('Hello', 2, 4);

console.log(fillArr);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let fillFuncArr = [1, 2, 3, 4, 5];

let fillFunction = (arr, value, firstIndex, secondIndex) =>
  arr.fill(value, firstIndex, secondIndex);

fillFunction(fillFuncArr, 'Hello', 1, 3);

console.log(fillFuncArr);

// splice:
console.log('== splice ==');

// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

let spliceArr = [1, 2, 3, 4, 5, 6];

spliceArr.splice(2, 4);

console.log(spliceArr);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

let spliceFuncArr = [1, 2, 3, 4, 5];

let spliceFunction = (arr, startIndex, amountToDelete) =>
  arr.splice(startIndex, amountToDelete);

spliceFunction(spliceFuncArr, 1, 3);

console.log(spliceFuncArr);

// reverse:
console.log('== reverse ==');

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let reverseArr = [1, 2, 3, 4, 5, 6];

reverseArr.reverse();

console.log(reverseArr);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let reverseFuncArr = [1, 2, 3, 4, 5];

let reverseFunction = (arr) => arr.reverse();

reverseFunction(reverseFuncArr);

console.log(reverseFuncArr);

// concat:
console.log('== concat ==');

// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

let concatFirstArr = [1, 2, 3, 4, 5, 6];
let concatSecondArr = ['Hello', 10, 20, 'World'];
let concatArr = concatFirstArr.concat(concatSecondArr);

console.log(concatArr);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let concatFirstFuncArr = [1, 2, 3, 4, 5];
let concatSecondFuncArr = ['Hello', 10, 20, 'World'];

let concatFunction = (firstArr, secondArr) => firstArr.concat(secondArr);

console.log(concatFunction(concatFirstFuncArr, concatSecondFuncArr));

// includes:
console.log('== includes ==');

// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

let includesArr = [1, 2, 3, 4, 5, 6];

console.log(includesArr.includes(4));

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

let includesFuncArr = [1, 2, 3, 4, 5];

let includesFunction = (arr, value) => arr.includes(value);

console.log(includesFunction('A'));

// filter:
console.log('== filter ==');

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

let filterArr = [1, 2, 3, 4, 5, 6, 8, 9, 15];

let filteredArr = filterArr.filter((a) => {
  if (a % 2 === 0) return a;
});

console.log(filteredArr);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

let filterFuncArr = [1, 2, 3, 4, 5, 20, 50, 100];

let filterFunction = (arr, conditionsFunction) => arr.filter(conditionsFunction);

let checkValue = (value) => value > 20;

console.log(filterFunction(filterFuncArr, checkValue));

// map:
console.log('== map ==');

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

let mapArr = [1, 2, 3, 4, 5, 6, 8, 9, 15];

let mapedArr = mapArr.map((a) => a * a);

console.log(mapedArr);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.

let mapFuncArr = [1, 2, 3, 4, 5, 20, 50, 100];

let mapFunction = (arr, changeFunction) => arr.map(changeFunction);

let addStringFunction = (value) => `Number: ${value}`;

console.log(mapFunction(mapFuncArr, addStringFunction));
