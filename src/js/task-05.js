const inputSelect = document.getElementById("name-input");
const outputSelect = document.getElementById("name-output");
const protoB = () => {
  outputSelect.textContent = inputSelect.value;
};
inputSelect.addEventListener("change", protoB);
