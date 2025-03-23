window.onload = function () {
  // Приклади використання canvas з уроку:

  // https://www.freeriderhd.com/t/1016-layers

  // https://codepen.io/dissimulate/pen/nYQrNP

  // https://codepen.io/eltonkamami/pen/ANpOQo

  // https://viliusle.github.io/miniPaint/

  // Бібліотеки для роботи з canvas:

  // https://www.chartjs.org/

  // https://brm.io/matter-js/demo/#mixed

  // Вивчення canvas:

  // https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html

  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

  // Домашня робота:

  // Використовуючи матеріали з https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes вирішіть такі задачі:

  // 1. Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.

  // https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#fillrect-x-y-w-h

  const canvas = document.querySelector('#myFirstCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 10, 100, 100);
  ctx.fillStyle = 'green';
  ctx.fillRect(100, 50, 100, 100);
  ctx.fillStyle = 'blue';
  ctx.fillRect(150, 100, 100, 100);

  // 2. Залиття канвасу градієнтом

  // Створіть функцію, яка отримує 2 кольори та заливає весь канвас лінійним або  градієнтом. Використовуйте createLinearGradient  для створення градієнту:

  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient

  function fillCanvas(firstColor, secondColor) {
    const canvas = document.querySelector('#mySecondCanvas');
    const ctx = canvas.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(1, firstColor);
    gradient.addColorStop(0, secondColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  fillCanvas('yellow', 'blue');

  // 3. Малювання простої лінії

  // Створіть функцію, яка малює пряму лінію з однієї точки канвасу до іншої. Використовуйте методи moveTo для встановлення початкової точки лінії та lineTo для визначення кінцевої точки. Не забудьте викликати stroke(), щоб

  // намалювати лінію.

  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo

  function drawLine(x1, y1, x2, y2) {
    const canvas = document.querySelector('#myThirdCanvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  drawLine(180, 15, 5, 200);
  drawLine(180, 15, 350, 200);

  // Практика роботи з svg https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

  // 4. Динамічне створення SVG-лінії

  // Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки, колір, товщина) передаються як аргументи функції.

  function drawSvgLine(x1, y1, x2, y2, color, width) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '45%');
    svg.setAttribute('height', '100vh');

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);

    svg.appendChild(line);
    document.body.appendChild(svg);
  }

  drawSvgLine(20, 20, 250, 250, 'green', 3);

  // 5. Створення SVG прямокутника з JavaScript

  // Створіть функцію, що динамічно додає на сторінку SVG прямокутник з заданими користувачем параметрами (ширина, висота, колір заливки, колір обведення та товщина лінії обведення).

  function drawSvgRect(width, height, fillColor, strokeColor, strokeWidth) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '30%');
    svg.setAttribute('height', '100vh');

    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', strokeWidth);
    rect.setAttribute('y', strokeWidth);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fillColor);
    rect.setAttribute('stroke', strokeColor);
    rect.setAttribute('stroke-width', strokeWidth);

    svg.appendChild(rect);
    document.body.appendChild(svg);
  }

  drawSvgRect(300, 300, 'yellow', 'green', 5);
};
