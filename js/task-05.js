const inputSelect = document.getElementById("name-input");
const outputSelect = document.getElementById("name-output");
const feedbackFunction = () => {
  outputSelect.textContent = inputSelect.value;
};
inputSelect.addEventListener("input", feedbackFunction);
