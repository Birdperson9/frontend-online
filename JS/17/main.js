// Завдання 1: Конвертер валют

// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:

// Створіть два поля введення: одне для суми, друге для курсу обміну.

// Додайте кнопку, яка виконає конвертацію при її натисканні.

// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.

// Виведіть результат конвертації на сторінку.

let submitBtn = document.querySelector('#convert-btn');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = document.querySelector('#amount');
  let rate = document.querySelector('#rate');
  let resultEl = document.querySelector('#convert-result');

  let convertResult = amount.value * rate.value;

  if (!amount.value || !rate.value) {
    resultEl.innerText = `Заповніть поля!`;
  } else {
    resultEl.innerText = `Результат конвертації = ${convertResult}`;
  }
});

// Завдання 2: Динамічний список задач

// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:

// Створіть поле введення для введення назви задачі.

// Додайте кнопку для додавання задачі до списку.

// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.

// Додайте можливість видалення задачі зі списку.

let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
  let taskText = taskInput.value.trim();

  if (taskText !== '') {
    let li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );
    li.innerHTML = `${taskText} <button class="delete-btn btn btn-danger btn-sm">❌</button>`;
    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.delete-btn').addEventListener('click', function () {
      li.remove();
    });
  } else {
    alert('Введіть задачу!');
  }
});
