// Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

const sessionText = document.querySelector('#sessionText');
const sessionSaveBtn = document.querySelector('.sessionSaveBtn');
const sessionLoadBtn = document.querySelector('.sessionLoadBtn');

sessionSaveBtn.onclick = (e) => {
  e.preventDefault();

  let textValue = sessionText.value;

  window.sessionStorage.setItem('userText', textValue);
  sessionText.value = '';
};

sessionLoadBtn.onclick = (e) => {
  e.preventDefault();

  let data = window.sessionStorage.getItem('userText');

  if (data) {
    sessionText.value = data;
  } else {
    sessionText.value = 'Немає збережених даних';
  }
};

// Створіть просту форму з декількома налаштуваннями (наприклад, кольором фону сторінки), і збережіть вибір користувача у localStorage. При наступному відкритті сторінки, застосуйте ці налаштування.

function saveSettings() {
  const bgColor = document.getElementById('bgColor').value;

  localStorage.setItem('bgColor', bgColor);

  document.body.style.backgroundColor = bgColor;
}

function getSettings() {
  const savedBgColor = localStorage.getItem('bgColor');

  if (savedBgColor) {
    document.body.style.backgroundColor = savedBgColor;
    document.getElementById('bgColor').value = savedBgColor;
  }
}

document.getElementById('bgColor').addEventListener('change', saveSettings);

window.onload = getSettings;

// Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти. Зберігайте список у localStorage, щоб після перезавантаження сторінки завдання залишалися доступні.

document.addEventListener('DOMContentLoaded', loadTasks);

let form = document.querySelector('.form');
let taskInput = document.querySelector('.text-input');
let taskList = document.getElementById('taskList');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (taskInput.value.trim() === '') {
    alert('Поле не може бути пустим!');
    return;
  }
  addTask(taskInput.value);
  taskInput.value = '';
});

function addTask(text) {
  let li = document.createElement('li');
  li.innerText = text;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Видалити';
  deleteBtn.onclick = function () {
    li.remove();
    updateLocalStorage();
  };
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  updateLocalStorage();
}

function updateLocalStorage() {
  let tasks = [];
  document.querySelectorAll('#taskList li').forEach((li) => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem('todo-list', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('todo-list')) || [];
  tasks.forEach((task) => addTask(task));
}

// Створіть об'єкт JavaScript, який включає різні типи даних (наприклад, рядки, числа, масиви, об'єкти). Використовуйте JSON.stringify для конвертації об'єкта у формат JSON. Потім збережіть цей JSON у файл. Ви можете

// зробити це в редакторі коду, зберігши дані у файл із розширенням .json.

let user = {
  name: 'John',
  surname: 'Doe',
  age: 35,
  email: 'example@gmail.com',
  isAdmin: false,
  skills: ['html', 'css', 'JS'],
};

window.localStorage.userData = JSON.stringify(user);
let parseData = JSON.parse(window.localStorage.getItem('userData'));
console.log(parseData);
