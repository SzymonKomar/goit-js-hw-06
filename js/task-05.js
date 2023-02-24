const inputSelect = document.getElementById("name-input");
const outputSelect = document.getElementById("name-output");
function feedbackFunction() {
  if (inputSelect.value.length === 0) {
    outputSelect.textContent = "Anonymous";
  } else {
    outputSelect.textContent = inputSelect.value;
  }
}
inputSelect.addEventListener("input", feedbackFunction);
