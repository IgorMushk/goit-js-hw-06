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
const boxParentEl = document.querySelector("#boxes");

let quantityBox = 0;
const heightStart = 30;
const widthStart = 30;
const increment = 10;
const randomBoxs = [];

inputEl.addEventListener("blur", onInputNum);
btnCreateEl.addEventListener("click", onCreateBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function onInputNum(event) {
  quantityBox = Number(event.currentTarget.value);
}

function onCreateBoxes(event) {
  createBoxes(quantityBox);
}

function createCollectionParams(amount) {
  let startH = heightStart;
  let startW = widthStart;

  for (let index = 0; index < amount; index++) {
    startH += increment;
    startW += increment;
    randomBoxs.push({
      height: startH,
      width: startW,
      color: getRandomHexColor(),
    });
  }
}

function createBoxes(amount) {
  createCollectionParams(amount);

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
  boxParentEl.innerHTML = "";
  randomBoxs.length = 0;
}
