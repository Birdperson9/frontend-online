// 1. Порівняння трьох чисел:

// Запитайте у користувача ввести три числа (ввести через prompt)

// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let number1 = Number(prompt('Введіть перше число', '0'));
let number2 = Number(prompt('Введіть друге число', '0'));
let number3 = Number(prompt('Введіть третє число', '0'));

let maxValue = 0;

if (number1 >= number2 && number1 >= number3) {
  maxValue = number1;
} else if (number2 >= number1 && number2 >= number3) {
  maxValue = number2;
} else if (number3 >= number1 && number3 >= number2) {
  maxValue = number3;
} else {
  console.log('Ви ввели не число!');
}

console.log(`Найбільшим числом з трьох є ${maxValue}`);

// 2. Визначення сезону:

// Запитайте у користувача ввести номер місяця (від 1 до 12).

// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let month = Number(prompt('Введіть номер місяця (від 1 до 12)', '1'));

if (month >= 3 && month <= 5) {
  console.log('введений місяць належить весні');
} else if (month >= 6 && month <= 8) {
  console.log('введений місяць належить літу');
} else if (month >= 9 && month <= 11) {
  console.log('введений місяць належить осені');
} else if (month === 12 || month === 1 || month === 2) {
  console.log('введений місяць належить зимі');
} else {
  console.log('Такого місяця немає!');
}

// 3. Визначення розміру числа:

// Запитайте у користувача ввести число.

// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let number4 = Number(prompt('Введіть число', '0'));

if (number4 < 0) {
  console.log("Число є від'ємним");
} else if (number4 > 0) {
  console.log('Число є додатнім');
} else if (number4 === 0) {
  console.log('Це нуль');
} else {
  console.log('Це не число!');
}

// 4. Перевірка величини кута:

// Запитайте у користувача ввести величину кута в градусах.

// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(prompt('Введіть величину кута в градусах', '0'));

angle > 90 ? console.log('величина кута є гострою') : console.log('вличина кута тупою');

// 5. Оцінка студента:

// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).

// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// менше 60: F

// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.

// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let numericGrade = Number(prompt('Введіть свою оцінку за тест (від 0 до 100)', '0'));

let grade;

if (numericGrade >= 90 && numericGrade <= 100) {
  grade = 'A';
} else if (numericGrade >= 80 && numericGrade <= 89) {
  grade = 'B';
} else if (numericGrade >= 70 && numericGrade <= 79) {
  grade = 'C';
} else if (numericGrade >= 60 && numericGrade <= 69) {
  grade = 'D';
} else {
  grade = 'F';
}

console.log(`Ваша оцінка '${grade}'`);

console.log(`Оцінка до інкремента ${numericGrade} `);

numericGrade++;

console.log(`Оцінка після інкремента ${numericGrade}`);

numericGrade > 60 ? console.log('Ви зараховані') : console.log('Ви не зараховані');
