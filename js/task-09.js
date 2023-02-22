let buttonSelect = document.querySelector(".change-color");
let spanSelect = document.querySelector(".color");

function bgcChange() {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanSelect.innerHTML = randomColor;
  let bodySelect = document.querySelector("body");
  bodySelect.style.backgroundColor = randomColor;
}
buttonSelect.addEventListener("click", bgcChange);
