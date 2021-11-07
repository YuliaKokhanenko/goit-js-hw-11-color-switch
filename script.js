/*Напиши кнопки скрипт Start, раз в секунду, используя цвет фона bodyна случайное значение из массива инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно быть изменаться.
 предупреждениеУчти, на кнопку Startможно нажать бесконечное количество раз. Сделай так, чтобы пока изменить темы запушено, кнопка Startбыла не активна.
*/
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;
startBtnEl.addEventListener('click', () => {
  startBtnEl.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  startBtnEl.disabled = false;
  clearInterval(intervalId);
});
