// 22. Ajax та promise

// Приклади розглянуті на уроці: https://github.com/slastonm/js-online/tree/main/22

// Документація по кодам відповідей:

// https://www.w3schools.com/tags/ref_httpmessages.asp

// https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

// Типи запитів до сервера https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// Завдання 1.

// Ланцюжок promise: Напишіть ланцюжок promise, де перший promise додає число до вхідного параметра, другий множить його, а третій віднімає 10 від отриманого числа. Кожна операція повинна бути виконана в окремому then.

// Використайте catch для вловлювання помилок.

let calcValue = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number') {
      reject('Value must be a number!');
    } else {
      let result = num + 2;
      resolve(result);
    }
  });
};

calcValue(5)
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result - 10;
  })
  .then((finalValue) => {
    console.log(`Final value is ${finalValue}`);
  })
  .catch((error) => {
    console.log(`Promise catch error ${error}`);
  });

// Завдання 2.

// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після

// завершення, використайте then для виведення результату і catch для обробки помилок.

let textTransform = (string) => {
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string') {
      reject('Value must be a string!');
    } else {
      setTimeout(() => resolve(string.toUpperCase()), 3000);
    }
  });
};

textTransform('1Hello World!')
  .then((result) => console.log(`String after transform: ${result}`))
  .catch((error) => {
    console.log(`Promise catch error ${error}`);
  });

// Завдання 3.

// Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те, яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

function compareNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (a === b) {
      reject('The numbers are equals');
    } else {
      let message = a > b ? `${a} greater than ${b}` : `${a} les than ${b}`;
      resolve(message);
    }
  });
}

compareNumbers(2, 1)
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(`Promise catch error ${error}`);
  });
