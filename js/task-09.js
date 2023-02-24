let buttonSelect = document.querySelector(".change-color");
let spanSelect = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function bgcChange() {
  const randomColor = getRandomHexColor();
  spanSelect.textContent = randomColor;
  let bodySelect = document.querySelector("body");
  bodySelect.style.backgroundColor = randomColor;
}
buttonSelect.addEventListener("click", bgcChange);
