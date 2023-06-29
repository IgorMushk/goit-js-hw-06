/*

Задание 10 (выполнять не обязательно)

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов 
в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

1. Размеры самого первого <div> - 30px на 30px.
2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию
 getRandomHexColor для получения цвета.
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//----------------------------------------------------------

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");

let quantityBox = 0;
const heightStart = 30;
const widthStart = 30;

inputEl.addEventListener("blur", onInputNum);
btnCreateEl.addEventListener("click", onCreateBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function onInputNum(event) {
  quantityBox = Number(event.currentTarget.value);
}

function onCreateBoxes(event) {
  createBoxes(quantityBox);
}

// Коллекция для теста из 3 объектов
const randomBoxs = [
  { height: heightStart + 10, width: widthStart + 10, color: "#04058f" },
  { height: heightStart + 20, width: widthStart + 20, color: "#d8fb59" },
  { height: heightStart + 30, width: widthStart + 30, color: "#5dff3b" },
];

function createBoxes(amount) {
  // <<<--- for of --- Создание массива объекто размеров и цыетов для div-box --->>>

  const boxParentEl = document.querySelector("#boxes");

  const boxElementArr = randomBoxs.map((randomBox) => {
    const boxEl = document.createElement("div");
    boxEl.style.height = `${randomBox.height}px`;
    boxEl.style.width = `${randomBox.width}px`;
    boxEl.style.backgroundColor = randomBox.color;
    return boxEl;
  });

  boxParentEl.append(...boxElementArr);
}

function destroyBoxes() {
  console.log("destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы");
  console.log("Очистки коллекции элементов randomBoxs[{},{},{}] ...");
}
