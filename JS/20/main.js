// Приклади з уроку: https://github.com/slastonm/js-online/tree/main/20

// Напишіть функцію, яка приймає повідомлення та час у мілісекундах як аргументи, і виводить це повідомлення у консоль після зазначеного часу.

let delayMessage = (message, delayTime) => {
  setTimeout(() => {
    console.log(message);
  }, delayTime);
};

delayMessage('Delayed message', 3000);

// Створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.

let counterBtn = document.querySelector('#counterBtn');
let countText = document.querySelector('#countText');

counterBtn.addEventListener('click', function () {
  let counter = 0;
  let intervalFunction = setInterval(() => {
    counter++;
    countText.innerHTML = `Count number: ${counter}`;

    if (counter >= 10) {
      clearInterval(intervalFunction);
    }
  }, 1000);
});

// Створіть HTML сторінку з кнопкою, яка змінює колір фону сторінки на випадковий колір який заданий в css зміних при кожному натисканні.

let colorChangeBtn = document.querySelector('#colorChangeBtn');

colorChangeBtn.onclick = function () {
  let colors = [
    getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color-white')
      .trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--bg-color-red').trim(),
    getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color-green')
      .trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--bg-color-blue').trim(),
    getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color-yellow')
      .trim(),
    getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-color-coral')
      .trim(),
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
};

// Додадткова робота:

// Реалізуйте таймер з дизайну

// https://www.figma.com/file/AQtBhmWEI5QPOiH29eJAev/Pomodoro-File-Playground-File-(Copy)?node-id=0%3A1&mode=dev
