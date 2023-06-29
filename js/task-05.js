/*

Задание 5

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

*/

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const outTextEmpty = "Anonymous";
outputEl.textContent = outTextEmpty;

inputEl.addEventListener("input", onInputName);

function onInputName(event) {
  outputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    outputEl.textContent = outTextEmpty;
  }
}
