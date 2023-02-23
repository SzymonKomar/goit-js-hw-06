const sizeContrSelect = document.getElementById("font-size-control");
const textSelect = document.getElementById("text");
const sizeChange = () => {
  let feedbackFunction = sizeContrSelect.value;
  textSelect.style.fontSize = feedbackFunction + "px";
};
sizeContrSelect.addEventListener("input", sizeChange);
