const validSelect = document.getElementById("validation-input");
const validDataLength = validSelect.dataset.length;
function validFunction() {
  if (validSelect.value.length < validDataLength) {
    validSelect.classList.remove("valid");
    validSelect.classList.add("invalid");
    return;
  } else if (validSelect.value.length == validDataLength) {
    validSelect.classList.remove("invalid");
    validSelect.classList.add("valid");
  } else if (validSelect.value.length > validDataLength) {
    validSelect.classList.remove("valid");
    validSelect.classList.add("invalid");
  }
}
validSelect.addEventListener("blur", validFunction);
