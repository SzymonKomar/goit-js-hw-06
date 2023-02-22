const sizeContrSelect = document.getElementById("font-size-control");
const textSelect = document.getElementById("text");
const sizeChange = () => {
  let protoFX = sizeContrSelect.value;
  textSelect.style.fontSize = protoFX + "px";
};
sizeContrSelect.addEventListener("change", sizeChange);
