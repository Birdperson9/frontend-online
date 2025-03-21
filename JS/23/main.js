// Приклади розглянуті на уроці: https://github.com/slastonm/js-online/tree/main/23

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).

// Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) =>
    users.forEach((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    })
  )
  .catch((error) => console.log('Error: ', error));

// Виведення детальної інформації про одного користувача.

// Зробіть запит до /users/1 (або будь-якого іншого ID), щоб отримати деталі про конкретного користувача.

// Виведіть отриману інформацію в форматованому вигляді, включаючи ім'я, нікнейм та електронну адресу.

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((user) => {
    console.log(`Name: ${user.name}, Nickname: ${user.username}, Email: ${user.email}`);
  })
  .catch((error) => console.log('Error: ', error));

// Отримання та відображення постів конкретного користувача

// Використовуйте /posts?userId=1 для отримання постів певного користувача.

// Виберіть та виведіть заголовки цих постів.

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((posts) =>
    posts.forEach((post) => {
      console.log(`Post title: ${post.title}`);
    })
  )
  .catch((error) => console.log('Error: ', error));

// Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до

// http swapi.dev/api/planets/1/ та виводиться картка з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

let btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  fetch('https://swapi.dev/api/starships/')
    .then((response) => response.json())
    .then((data) => {
      let container = document.getElementById('starships-container');
      let starships = data.results;

      starships.forEach((starship) => {
        let divEl = document.createElement('div');
        divEl.classList.add('col-md-4', 'mb-4');

        divEl.innerHTML = `
          <div class="card bg-secondary text-light h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${starship.name}</h5>
              <p class="card-text"><strong>Model:</strong> ${starship.model}</p>
              <p class="card-text"><strong>Class:</strong> ${starship.starship_class}</p>
              <p class="card-text"><strong>Passengers:</strong> ${starship.passengers}</p>
              <p class="card-text"><strong>Cargo Capacity:</strong> ${
                starship.cargo_capacity
              }</p>
              <p class="card-text"><strong>Cost:</strong> ${
                starship.cost_in_credits
              } credits</p>
              <h6>Films:</h6>
              <ul class="list-unstyled">
                ${starship.films
                  .map(
                    (filmUrl) =>
                      `<li><a href="${filmUrl}" target="_blank" class="text-warning">Film Link</a></li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>
        `;

        container.appendChild(divEl);
      });
    })
    .catch((error) => console.log('Error: ', error));
});

// АPІ для запитів

// https://jsonplaceholder.typicode.com/

// https://swapi.dev/

// MGLT
// :
// "60"
// cargo_capacity
// :
// "3000000"
// consumables
// :
// "1 year"
// cost_in_credits
// :
// "3500000"
// created
// :
// "2014-12-10T14:20:33.369000Z"
// crew
// :
// "30-165"
// edited
// :
// "2014-12-20T21:23:49.867000Z"
// films
// :
// Array(3)
// 0
// :
// "https://swapi.dev/api/films/1/"
// 1
// :
// "https://swapi.dev/api/films/3/"
// 2
// :
// "https://swapi.dev/api/films/6/"
// length
// :
// 3
// [[Prototype]]
// :
// Array(0)
// hyperdrive_rating
// :
// "2.0"
// length
// :
// "150"
// manufacturer
// :
// "Corellian Engineering Corporation"
// max_atmosphering_speed
// :
// "950"
// model
// :
// "CR90 corvette"
// name
// :
// "CR90 corvette"
// passengers
// :
// "600"
// pilots
// :
// []
// starship_class
// :
// "corvette"
// url
// :
// "https://swapi.dev/api/starships/2/"
