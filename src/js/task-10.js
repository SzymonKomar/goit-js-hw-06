let inputSelect = document.querySelector("input[type = number]");
let buttonCreateSelect = document.querySelector("button[data-create]");
let buttonDeleteSelect = document.querySelector("button[data-destroy]");
let divSelect = document.getElementById("boxes");
console;
function collectionCreate() {
  for (let i = 0; i < inputSelect.value; i++) {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    let divCreate = document.createElement("div");
    divCreate.className = "yes";
    let valueHW = 30;
    let valueHWChange = valueHW + 10 * [i];
    divCreate.style.backgroundColor = randomColor;
    divCreate.style.height = valueHWChange + "px";
    divCreate.style.width = valueHWChange + "px";
    divSelect.append(divCreate);
  }
}
buttonCreateSelect.addEventListener("click", collectionCreate);
function collectionDelete() {
  for (var i = divSelect.children.length - 1; i >= 0; --i) {
    let childrenSelect = divSelect.children;
    childrenSelect[i].remove();
  }
  inputSelect.value = 1;
}
buttonDeleteSelect.addEventListener("click", collectionDelete);
