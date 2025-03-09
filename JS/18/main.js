// Форма з вибором улюбленого кольору:

// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).

// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

const body = document.querySelector('body');
const [...colorRadioButtons] = document.querySelectorAll('input[name="color"]');

colorRadioButtons.forEach((colorEl) => {
  colorEl.addEventListener('change', () => {
    body.style.backgroundColor = colorEl.value;
  });
});

// Форма для вибору хобі з чекбоксами:

// Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).

// Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

const [...hobbyCheckboxes] = document.querySelectorAll('input[name="hobby"]');
const selectedHobbyEl = document.querySelector('#selectedHobby');

hobbyCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const checkedHobbies = hobbyCheckboxes.filter((i) => i.checked).map((i) => i.value);

    selectedHobbyEl.textContent = `Selected hobbies are: ${checkedHobbies.join(', ')}`;
  });
});

// Форма з вибором країни із випадаючого списку:

// Створіть випадаючий список з назвами країн.

// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

let selectEl = document.querySelector('select[name="countries"]');
let selectedCountry = document.querySelector('.selectedCountry');

selectEl.addEventListener('change', function () {
  switch (this.value) {
    case 'Ukraine':
      selectedCountry.innerText = `Столиця України - Київ`;
      break;
    case 'Poland':
      selectedCountry.innerText = `Столиця Польщі - Варшава`;
      break;
    case 'Spain':
      selectedCountry.innerText = `Столиця Іспаніі - Мадрид`;
      break;
  }
});

// Форма для оцінювання якості обслуговування:

// Створіть групу радіокнопок для оцінки від 1 до 5.

// Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо за вашу оцінку!").

const [...ratingRadioButtons] = document.querySelectorAll('input[name="rating"]');
const ratingResult = document.querySelector('#ratingResult');

ratingRadioButtons.forEach((radioEl) => {
  radioEl.addEventListener('change', function () {
    ratingResult.textContent = `Selected rating ${this.value}`;
    alert('Дякуємо за вашу оцінку!');
  });
});

// Додаткове завдання:

// Створіть форму замовлення піци де в селекті є назва, за допомогою радіобатонів вибирається розмір, а за допогою чекбоксів додаткова начинка.

// При зміні в формі треба рахувати ціну.

// Кожний розмір +50 до ціни кожна додаткова вибрана начинка +25 до ціни.

let basePrice = 100;
const totalPriceEl = document.getElementById('totalPrice');

function calculatePrice() {
  let total = basePrice;

  const size = document.querySelector('input[name="size"]:checked').value;
  if (size === 'medium') total += 50;
  if (size === 'large') total += 100;

  let extras = document.querySelectorAll('.extra:checked');
  total += extras.length * 25;

  totalPriceEl.textContent = total;
}

document.getElementById('pizzaForm').addEventListener('change', calculatePrice);
