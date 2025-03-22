// Приклади розглянуті на уроці: https://github.com/slastonm/js-online/tree/main/24

// Домашня робота:

// Завдання 1: Отримання даних користувача з JSONPlaceholder

// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder. Виведіть ім'я та електронну адресу користувача.

// підказка: запит за іd чи іншими параметрами `https://jsonplaceholder.typicode.com/users/${userId}`

async function showUserInfo(userId) {
  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => console.log(`Name: ${user.name}, Email: ${user.email}`))
    .catch((error) => console.log('Error: ', error));
}

showUserInfo(2);

// Завдання 2: Виведення інформації про фільм з SWAPI

// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

async function showFilmInfo(filmId) {
  await fetch(`https://swapi.dev/api/films/${filmId}`)
    .then((response) => response.json())
    .then((film) =>
      console.log(`Film title: ${film.title}, Release date: ${film.release_date}`)
    )
    .catch((error) => console.log('Error: ', error));
}

showFilmInfo(2);

// Завдання 3: Отримання і виведення інформації про планету з SWAPI

// Створіть функцію, яка використовує async/await для запиту інформації про конкретну планету з SWAPI. Виведіть назву планети та клімат.

async function showPlanetInfo(planetId) {
  await fetch(`https://swapi.dev/api/planets/${planetId}`)
    .then((response) => response.json())
    .then((planet) =>
      console.log(`Planet name: ${planet.name}, Planet climate: ${planet.climate}`)
    )
    .catch((error) => console.log('Error: ', error));
}

showPlanetInfo(2);

// Завдання 4: Розділення коду на модулі

// Створіть файл mathOperations.js, в якому будуть оголошені функції для основних математичних операцій (додавання, віднімання, множення, ділення). Експортуйте ці функції за допомогою named export.

// Створіть файл index.js, в якому ви імпортуєте та використовуєте ці функції для виконання математичних операцій.

// Завдання 5: Імпорт утиліти для роботи з текстом

// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.
