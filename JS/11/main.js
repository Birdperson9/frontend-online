// Тема: Spread

console.log('== Spread ==');

// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let firstArr = [1, 2, 3, 4, 5];
let secondArr = ['Tom', 'John', 'Jack', 'Annie'];

let spreadArr = [...firstArr, ...secondArr];

console.log(spreadArr);

// Тема: Rest

console.log('== Rest ==');

// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

let restFunction = (stringValue, ...restArgs) => {
  console.log(`Рядок: ${stringValue}, масив аргументів: ${restArgs}`);
};

restFunction('Hello', 1, 2, 3, 3.5, true, 'John');

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

let findAverage = (...numbers) => {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  let average = sum / numbers.length;

  return average;
};

console.log(findAverage(2, 5, 10, 25));

// Тема: TypeOf

console.log('== Typeof ==');

// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

let findType = (value) => typeof value;

console.log(findType(5));
console.log(findType(true));
console.log(findType('5'));
console.log(findType({ name: 'John' }));
console.log(findType(null));

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

let typeOfFunc = (value) => {
  if (typeof value === 'number') {
    return 'Це число';
  } else if (typeof value === 'string') {
    return 'Це рядок';
  } else {
    return 'Це інший тип';
  }
};

console.log(typeOfFunc(5));
console.log(typeOfFunc('Hello'));
console.log(typeOfFunc(true));
