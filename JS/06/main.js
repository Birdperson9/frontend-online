// 1. Калькулятор

// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї

// математичної операції з 2 цифровими значеннями

function sumTwoNumbers(a, b) {
  return a + b;
}

function subtractTwoNumbers(a, b) {
  return a - b;
}

function divideTwoNumbers(a, b) {
  if (b === 0) {
    console.log('На нуль ділити не можна!');
  } else {
    return a / b;
  }
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}

function calculator(operation, num1, num2) {
  switch (operation) {
    case '+':
      console.log(sumTwoNumbers(num1, num2));
      break;
    case '-':
      console.log(subtractTwoNumbers(num1, num2));
      break;
    case '/':
      console.log(divideTwoNumbers(num1, num2));
      break;
    case '*':
      console.log(multiplyTwoNumbers(num1, num2));
      break;
    default:
      console.log('Введіть правильні значення (оператор, перше число, друге число)');
  }
}

// 2. Параметри та колбеки:

// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

function welcomeUser(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

let users = ['Tom', 'Bob', 'Ros', 'Nick', 'Diana'];

welcomeUser(users, hiUser);

// 3. Стрілкові функції:

// Перепишіть попередню функцію в стрілкову

let hiUserArrow = (user) => {
  console.log(`Вітаю ${user}`);
};

let welcomeUserArrow = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

let users1 = ['Tom', 'Bob', 'Ros', 'Nick', 'Diana'];

welcomeUser(users1, hiUserArrow);

// 4. Параметри за замовчуванням:

// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

let defaultValue = (value = 'default') => console.log(value);

defaultValue();

// 5. Задача з колбеком:

// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

let userHello = (userName = 'John') => console.log(`Hello ${userName}`);

let helloFunction = (string, someFunction) => someFunction(string);

helloFunction('Bob', userHello);

// 6. Перепишіть стрілкову функцію в звичайну

// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
  return a * b * c;
}
