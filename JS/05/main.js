// 1. Визначення типу геометричної фігури за допомогою switch:

// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let shape = prompt(
  `Введіть назву геометричної фігури ("коло", "квадрат", "трикутник"):`,
  'коло'
);

switch (shape) {
  case 'коло':
    console.log('Коло має 0 сторін');
    break;
  case 'квадрат':
    console.log('Квадрат має 4 сторони');
    break;
  case 'трикутник':
    console.log('Трикутник має 3 сторони');
    break;
  default:
    console.log('Введіть коректну назву геометричної фігури');
}

// 2. Підрахунок суми парних чисел:

// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let sum = 0;
let count = 0;
while (count < 20) {
  if (count % 2 == 0) {
    sum += count;
    count++;
  } else {
    count++;
  }
}

console.log(`сума всіх парних чисел в заданому діапазоні - ${sum}`);

// 3. Таблиця множення:

// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).

let number = 5;

for (let i = 1; i < 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// 4. Зворотний лічильник:

// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 5. Визначення чи є число парним чи непарним:

// Напишіть програму, яка приймає число і використовуючи if та for, виводить повідомлення про те, чи є число парним чи непарним.

let number1 = 10;

for (let i = 1; i < number1; i++) {
  if (i % 2 === 0) {
    console.log(`Число ${i} є парним`);
  } else {
    console.log(`Число ${i} є непарним`);
  }
}

// 6. Знаходження першого парного числа:

// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} є першим парним числом`);
    break;
  }
}

// 7. Виведення парних чисел:

// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа. Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
